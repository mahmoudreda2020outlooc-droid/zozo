document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1500);
    });

    // Gallery Images
    const images = [
        "WhatsApp Image 2026-05-25 at 10.24.05 PM.jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.06 PM.jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.07 PM (1).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.07 PM.jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.08 PM.jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.09 PM (1).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.09 PM (2).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.09 PM (3).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.09 PM (4).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.09 PM (5).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.09 PM.jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.10 PM (1).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.10 PM (2).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.10 PM (3).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.10 PM (4).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.10 PM (5).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.10 PM.jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.11 PM (1).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.11 PM (2).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.11 PM (3).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.11 PM (4).jpeg",
        "WhatsApp Image 2026-05-25 at 10.24.11 PM.jpeg"
    ];

    const galleryGrid = document.getElementById('gallery');
    images.forEach((imgSrc) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${encodeURIComponent(imgSrc)}" alt="Memory" loading="lazy">`;
        div.onclick = () => openLightbox(imgSrc);
        galleryGrid.appendChild(div);
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    function openLightbox(src) {
        lightboxImg.src = encodeURIComponent(src);
        lightbox.style.display = 'flex';
        gsap.fromTo(lightboxImg, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 });
    }

    document.querySelector('.close-lightbox').onclick = () => {
        lightbox.style.display = 'none';
    };

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".revelation-card", {
        scrollTrigger: {
            trigger: ".revelation-card",
            start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".gallery-item", {
        scrollTrigger: {
            trigger: ".masonry-gallery",
            start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)"
    });

    // Floating Icons System
    const floatingElementsContainer = document.getElementById('floatingElements');
    const icons = ['🐑', '🌙', '🌟', '🕋', '✨'];

    for (let i = 0; i < 20; i++) {
        const span = document.createElement('span');
        span.className = 'floating-sheep-icon';
        span.innerText = icons[Math.floor(Math.random() * icons.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.top = Math.random() * 100 + '%';
        floatingElementsContainer.appendChild(span);

        gsap.to(span, {
            y: "random(-100, 100)",
            x: "random(-50, 50)",
            rotation: "random(-45, 45)",
            duration: "random(10, 20)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    // Gift Box Interaction
    const giftBox = document.getElementById('giftBox');
    giftBox.onclick = () => {
        gsap.to(".gift-lid", { y: -100, rotation: 30, opacity: 0, duration: 0.5 });
        gsap.to(".gift-box", { scale: 1.5, opacity: 0, duration: 0.5, delay: 0.2 });

        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.top = '50%';
            confetti.style.left = '50%';
            confetti.style.transform = 'translate(-50%, -50%)';
            confetti.style.fontSize = '3rem';
            confetti.innerText = '🌸 عيد مبارك يا قلبي 🌸';
            confetti.style.zIndex = '3000';
            document.body.appendChild(confetti);

            gsap.from(confetti, { scale: 0, opacity: 0, rotation: 360, duration: 1, ease: "back.out(2)" });
        }, 600);
    };
});
