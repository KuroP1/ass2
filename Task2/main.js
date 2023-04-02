const images = [

    { src: '../images/image1.jpg', description: 'image1' },
    { src: '../images/image2.jpg', description: 'image2' },
    { src: '../images/image3.jpg', description: 'image3' },
    { src: '../images/image4.jpg', description: 'image4' },
    { src: '../images/image5.jpg', description: 'image5' },
    { src: '../images/image6.jpg', description: 'image6' },
    { src: '../images/image7.jpg', description: 'image7' },
    { src: '../images/image8.jpg', description: 'image8' },

    // Add more image paths here
];

let currentImageIndex = 0;

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateImage();
}

function updateImage() {
    const imageElement = document.getElementById('gallery-image');
    const descriptionElement = document.getElementById('image-description');

    imageElement.src = images[currentImageIndex].src;
    descriptionElement.textContent = images[currentImageIndex].description;
}

function initGallery() {
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    leftArrow.addEventListener('click', () => changeImage(-1));
    rightArrow.addEventListener('click', () => changeImage(1));
}

document.addEventListener('DOMContentLoaded', initGallery);