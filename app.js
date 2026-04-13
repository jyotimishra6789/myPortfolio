document.addEventListener('DOMContentLoaded', () => {

    // 1. Swiper Initialization
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        freeMode: false,
        speed: 1500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
        }
    });

    // 2. GSAP Animations with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Neon Paths Setup 
    const neonPaths = document.querySelectorAll(".neon-path");
    
    neonPaths.forEach((path) => {
        let length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length; // start hidden

        // Animate them drawing in
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 3.5,
            ease: "power2.inOut",
            delay: 0.5
        });

        // Add a subtle breathing glow effect once drawn
        gsap.to(path, {
            opacity: 0.7,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 4
        });
    });

    // Typography fade in
    gsap.from(".hero-svg text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        delay: 1.5,
        ease: "power3.out"
    });

    // Circular Badge pop in
    gsap.from(".circular-badge", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        delay: 2.5,
        ease: "elastic.out(1, 0.5)"
    });

    // Fade in Nav
    gsap.from("nav .logo, nav ul li", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Section Titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // About Panel
    gsap.from(".about-section", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Skills Grid Cards
    gsap.from(".skill-category", {
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // 3D Parallax Hover for Skills Cards (Interactive)
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = -(y / rect.height) * 25; 
            const rotateY = (x / rect.width) * 25;
            
            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                ease: "power2.out",
                duration: 0.5
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                ease: "power3.out",
                duration: 0.8
            });
        });
    });

    // Contact Panel
    gsap.from(".contact-section", {
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 85%"
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    });
});
