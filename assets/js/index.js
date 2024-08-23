
 //Menu javascript code

function openNav() {
document.getElementById("myNav").style.width = "20%";
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}


// Sports javascript

    function initImageSlideshow(container) {
        const images = container.querySelectorAll('img');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 2000); // Change image every 2 seconds
    }

    // Initialize the image slideshow for each image container
    document.querySelectorAll('.image-container').forEach(initImageSlideshow);
