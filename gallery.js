const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close-btn');

// Add animation delay to items
document.querySelectorAll('.gallery-item').forEach((item,index)=>{
    item.style.animationDelay = `${index*0.2}s`;
});

// Lightbox open
galleryItems.forEach(img=>{
    img.addEventListener('click',()=>{
        lightboxImg.src=img.src;
        lightbox.classList.add('show');
    });
});

// Lightbox close
closeBtn.addEventListener('click',()=>{ lightbox.classList.remove('show'); });
window.addEventListener('click',e=>{ if(e.target===lightbox){ lightbox.classList.remove('show'); } });

