// ================= GALLERY LIGHTBOX =================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

// Close button
closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// Click outside image
lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
