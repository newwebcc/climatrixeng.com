// ================= GALLERY LIGHTBOX =================

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const images = document.querySelectorAll(".gallery-item img");

    // If important elements not found → stop script safely
    if (!lightbox || !lightboxImg || images.length === 0) {
        return;
    }

    // Open lightbox
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    // Close button (only if exists)
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

});
