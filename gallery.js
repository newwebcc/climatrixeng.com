/* ================= GALLERY LIGHTBOX ================= */

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const galleryImages = document.querySelectorAll(".gallery-item img");

    if (lightbox && lightboxImg) {

        galleryImages.forEach(function (img) {
            img.addEventListener("click", function () {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
            });
        });

        // Close button
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                lightbox.style.display = "none";
            });
        }

        // Click outside image
        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

});
