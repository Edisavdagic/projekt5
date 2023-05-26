document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.querySelector('.burger-menu');
    var menu = document.querySelector('.menu');
    var menuItems = ['Hjem', 'Om os', 'Kontakt'];
    var isMenuOpen = false;
  
    // Generer HTML for menuen baseret på arrayet
    function generateMenu() {
      var menuHTML = '';
      for (var i = 0; i < menuItems.length; i++) {
        menuHTML += '<li><a href="#">' + menuItems[i] + '</a></li>';
      }
      menu.innerHTML = menuHTML;
    }
  
    // Vis eller skjul menuen ved klik
    burgerMenu.addEventListener('click', function() {
      if (!isMenuOpen) {
        menu.style.display = 'block';
        isMenuOpen = true;
      } else {
        menu.style.display = 'none';
        isMenuOpen = false;
      }
    });
  
    // Generer menuen ved indlæsning af siden
    generateMenu();
  });
  
  
  
  
  
  
  
  