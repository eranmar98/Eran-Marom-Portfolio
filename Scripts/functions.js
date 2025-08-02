// Check if an element is visible in the viewport
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Animate the progress bars once when in view
export function animateSkillsOnScroll() {
  //get each skill card
  document.querySelectorAll('.skill-card').forEach((card) => {
    const progress = card.querySelector('.progress');
    const target = card.dataset.progress;
    if (isInViewport(card) && !progress.classList.contains('animated')) {
      progress.style.width = target;
      progress.classList.add('animated');
    }
  });
}

// Function to mark the link in the navbar when the same section is on display
export function updateActiveLink() {
    let currentSection = '';

    // loop through <section> tags
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