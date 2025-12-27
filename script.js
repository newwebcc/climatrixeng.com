/* ================= CONTACT CARD POPUP ================= */

const cards = document.querySelectorAll('.contact-card');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
    card.addEventListener('click', () => {
        popupText.textContent = card.getAttribute('data-info');
        popup.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});


/* ================= NAVBAR HIDE ON SCROLL ================= */

let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 80) {
        // scrolling down → hide navbar
        navbar.style.top = "-120px";
    } else {
        // scrolling up → show navbar
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
