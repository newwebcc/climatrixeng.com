// ================= GALLERY LIGHTBOX =================

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const images = document.querySelectorAll(".gallery-item img");

    // Open Lightbox
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    // Close Button
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Click Outside Image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});
