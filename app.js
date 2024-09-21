document.addEventListener('DOMContentLoaded', function() {
  // Mouse movement effect for skill icons
  document.addEventListener('mousemove', function(e) {
      const skillIcons = document.querySelectorAll('.skill-icon');
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 30;  // Move up to 15px left/right
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 30; // Move up to 15px up/down

      skillIcons.forEach(icon => {
          icon.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      });
  });

  // Scrolling effect for projects container
  const container = document.querySelector('.projects-container');
  const wrapper = document.querySelector('.scroll-wrapper');

  const clone = container.cloneNode(true);
  container.appendChild(clone);

  function scroll() {
      container.style.animation = 'scroll-left 20s linear infinite';
  }
  scroll();

  // GSAP setup


  gsap.from("#abt", {
      opacity: 0,
      y: 20,
      delay: 1,
      duration: 2,
      scrollTrigger: "#abt"
         
  });

  gsap.from("#me", {
      opacity: 0,
      delay: 2,
      duration: 2,
      scrollTrigger:"#me" 
         
  });

  gsap.from("#wit", {
      scale: 2,
      delay: 4,
      duration: 0.5,
      scrollTrigger: "#wit"
         
  });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    freeMode: true,
    speed: 2000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});
