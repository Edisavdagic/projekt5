let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let menuItems = ["CASES", "YDELSER", "OM OS", "KONTAKT" ]

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
hamburger.addEventListener('click', function() {
  // Tjek om menuen er skjult eller synlig
  if (navMenu.style.display === 'none') {
    // Vis menuen
    navMenu.style.display = 'block';
  } else {
    // Skjul menuen
    navMenu.style.display = 'none';
  }
});

document.querySelectorAll(".nav-link").forEach(n=> n.
addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

