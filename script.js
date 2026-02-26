document.addEventListener("DOMContentLoaded", function () {

    /* ================= NAVBAR HIDE ON SCROLL ================= */

    const navbar = document.querySelector("nav");

    if (navbar) {
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.top = "-120px"; // hide navbar
            } else {
                navbar.style.top = "0"; // show navbar
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }


    /* ================= GALLERY LIGHTBOX ================= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    if (lightbox && lightboxImg) {

        const galleryImages = document.querySelectorAll(".gallery-item img");

        galleryImages.forEach(img => {
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
