document.addEventListener('DOMContentLoaded', function() {
  // Mouse movement effect for skill icons
  document.addEventListener('mousemove', function(e) {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    // Calculate the movement ratio based on the mouse's position
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 30;  // Move up to 15px left/right
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 30; // Move up to 15px up/down
    
    // Move each image in the same direction as the mouse
    skillIcons.forEach(icon => {
      icon.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  });

  // Scrolling effect for projects container
  const container = document.querySelector('.projects-container');
  const wrapper = document.querySelector('.scroll-wrapper');

  // Clone the container to create a seamless effect
  const clone = container.cloneNode(true);
  container.appendChild(clone);

  // Function to handle infinite scroll
  function scroll() {
    // Use CSS animation instead of JavaScript for smoother performance
    container.style.animation = 'scroll-left 20s linear infinite';
  }

  // Start the scrolling effect
  scroll();

  // Typing effect for the welcome section
  const section = document.getElementById('welcome');
  const header = section.querySelector('h1');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    if (isInViewport(section)) {
      header.classList.add('typing');
    } else {
      header.classList.remove('typing');
    }
  }

  // Check visibility on scroll and resize
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check
  checkVisibility();
});
gsap.from("#abt",{
 opacity:0,
 y:20,
 delay:1,
 duration:2,
 scrollTrigger:"#abt"
})
gsap.from("#me",{
  opacity:0,
  delay:2,
  duration:2,
  scrollTrigger:"#me"
 })
 gsap.from("#wit",{
  scale:2,
  delay:4,
  duration:.5,
  scrollTrigger:"#me"
 })