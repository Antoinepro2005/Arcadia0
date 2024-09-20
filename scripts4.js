const slides = document.querySelector('.slides');
let index = 0;

function showNextSlide() {
    index++;
    if (index >= slides.children.length) {
        index = 0; // Revient à la première image
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change d'image toutes les 3 secondes
