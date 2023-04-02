const images = [
    '../images/image1.jpg',
    '../images/image2.jpg',
    '../images/image3.jpg',
    '../images/image4.jpg',
    '../images/image5.jpg',
    '../images/image6.jpg',
    '../images/image7.jpg',
    '../images/image8.jpg',
    // Add more image paths here
];

let currentImageIndex = 0;

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateImage();
}

function updateImage() {
    document.getElementById('gallery-image').src = images[currentImageIndex];
}

function initGallery() {
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    leftArrow.addEventListener('click', () => changeImage(-1));
    rightArrow.addEventListener('click', () => changeImage(1));
}

document.addEventListener('DOMContentLoaded', initGallery);