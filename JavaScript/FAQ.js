console.log("main.js is running..."); //* Tjekker om javascript virker ved at console.log//* 
let select_element = document.getElementsByClassName("FAQboks"); //opretter en varibel select_element, som er en lokal variabel da den er inden For Funktionen, 
let i;

for (i = 0; i < select_element.length; i++) {
  select_element[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let BoksVedKlik = this.nextElementSibling;
    if (BoksVedKlik.style.display === "block") {
      BoksVedKlik.style.display = "none";
    } else {
      BoksVedKlik.style.display = "block";
    }
  });
}