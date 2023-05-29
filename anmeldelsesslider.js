const colors = {
    "red": "#e74c3c",
    "orange": "#e67e22",
    "yellow": "#f1c40f",
    "green": "#2ecc71",
    "blue": "#3498db"
}

// Keep track of the current slide
let slideIndex = 1;

// Show the first slide
showSlides(slideIndex);

// Button event listeners
document.getElementById("prevBtn").addEventListener("click", function() {
    changeSlide(-1);
});

document.getElementById("nextBtn").addEventListener("click", function() {
    changeSlide(1);
});

function changeSlide(n) {
    // Change slide by n and loop back to 1
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // Get all slides from the DOM
    let slides = document.getElementsByClassName("slide");

    // If n is greater than the number of slides, set slideIndex to 1
    if (n > slides.length) {slideIndex = 1}

    // If n is less than 1, set slideIndex to the number of slides
    if (n < 1) {slideIndex = slides.length}

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex-1].style.display = "grid";
    // Set the color of the quote svg with in the current slide to a random color in the colors object
    slides[slideIndex-1].querySelector("svg").style.fill = colors[Object.keys(colors)[Math.floor(Math.random()*Object.keys(colors).length)]];
    
}