document.addEventListener("DOMContentLoaded", function () {
    var countdown = document.getElementById("timer");
    var animationContainer = document.getElementById("animation-container");
    var animationImage = document.getElementById("animation-image");
    var newText = document.getElementById("new-text");
    var text = document.getElementById("text");
    
    var images = [
        "Arte 2.jpg",
        "Arte 3.jpg",
        "Arte 1.jpg"
        // Agrega más rutas de imágenes según sea necesario
    ];
    var currentImageIndex = 0;

    var seconds = 5;
    countdown.textContent = seconds;

    var countdownInterval = setInterval(function () {
        seconds--;
        countdown.textContent = seconds;

        if (seconds === 0) {
            clearInterval(countdownInterval);
            countdown.style.display = "none";
            
            function showNextImage() {
                animationImage.src = images[currentImageIndex];
                currentImageIndex = (currentImageIndex + 1) % images.length;
            }
            showNextImage();
            // Mostrar la imagen y comenzar la animación
            animationImage.style.animation = "spin 4s linear infinite";
            animationContainer.style.display = "block";
            text.style.display = "none";
            newText.style.display = "block";
            setInterval(showNextImage, 4000);
        }
    }, 1000); // Actualizar cada segundo
});
