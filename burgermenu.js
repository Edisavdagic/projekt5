let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let menuItems = ["CASES", "YDELSER", "OM OS", "KONTAKT" ]
const isMobile = true;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n=> n.
addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

