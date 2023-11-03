let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("image_carousel");
    let dots = document.getElementsByClassName("dot");
    // Boundary control
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    // Clear active images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Clear active dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Set active image and dot
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

setInterval(function() {plusSlides(1);}, 5000); // Change image every 5 seconds