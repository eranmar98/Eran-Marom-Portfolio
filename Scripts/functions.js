// Check if an element is visible in the viewport
// getBoudingClientRect() - get size and position of element
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Animate the progress bars once when in view
export function animateSkillsOnScroll() {
  
}

// Function to mark the link in the navbar when the same section is on display
// Loop through each <section> tag, get their size and position\
// Loop through links in the navbar and remove their active status accordingly
export function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }