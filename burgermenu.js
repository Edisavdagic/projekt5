let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let menuItems = ["CASES", "YDELSER", "OM OS", "KONTAKT" ]

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.
addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

document.querySelectorAll(".nav-link").forEach((n, index) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
    if (menuItems[index] === "CASES") {
      // Hvis linket er "CASES"
      // Udfør specifikke handlinger her
      console.log("Du klikkede på CASES");
    } else if (menuItems[index] === "YDELSER") {
      // Hvis linket er "YDELSER"
      // Udfør specifikke handlinger her
      console.log("Du klikkede på YDELSER");
    } else if (menuItems[index] === "OM OS") {
      // Hvis linket er "OM OS"
      // Udfør specifikke handlinger her
      console.log("Du klikkede på OM OS");
    } else if (menuItems[index] === "KONTAKT") {
      // Hvis linket er "KONTAKT"
      // Udfør specifikke handlinger her
      console.log("Du klikkede på KONTAKT");
    }
  });
});