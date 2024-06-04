// script.js
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".service-img .img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Change image every 4 seconds
    setInterval(showNextImage, 5000);   
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".service-img .img2");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Change image every 4 seconds
    setInterval(showNextImage, 5500);   
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".service-img .img3");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Change image every 4 seconds
    setInterval(showNextImage, 5500);   
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".service-img .img4");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Change image every 4 seconds
    setInterval(showNextImage, 5000);   
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".service-img .img5");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Change image every 4 seconds
    setInterval(showNextImage, 5500);   
});