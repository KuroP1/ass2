const mainImage = document.getElementById('gallery-image');
const imageDescription = document.getElementById('image-description');
const thumbnails = document.querySelectorAll('.thumbnail');

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

const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

let currentImageIndex = 0;


function changeImage(direction) {
    console.log('changeImage');
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateImage();
}


function initGallery() {

    leftArrow.addEventListener('click', () => changeImage(-1));
    rightArrow.addEventListener('click', () => changeImage(1));
}
let currentIndex = 0;

function updateImage() {
    mainImage.src = images[currentIndex].src;
    imageDescription.textContent = images[currentIndex].description;

    // Remove active class from all thumbnails
    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
    });

    // Add active class to the current thumbnail
    thumbnails[currentIndex].classList.add('active');
}

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = parseInt(thumbnail.dataset.index);
        updateImage();
    });
});

leftArrow.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateImage();
});

rightArrow.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
});

updateImage();