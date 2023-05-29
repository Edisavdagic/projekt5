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

if (isMobile) {
  navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    a.classList.add("nav-link");
    li.classList.add("nav-item");
    li.appendChild(a);
    navMenu.appendChild(li);
  });

} else {
  const navItemContainer = document.querySelector(".nav-item-container");
  navItems.forEach(item => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    a.classList.add("nav-link");
    navItemContainer.appendChild(a);
  });
}

// Håndter burgermenu klik
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
  
  
  
