let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
  
hamburger.addEventListener("click", () => {
  hamburger.classlist.toggle("active");
  navMenu.classlist.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n=> n.
addEventListener("click" , () => {
  hamburger.classlist.remove ("active");
  navMenu.classlist.remove ("active");
}))
  
  
  