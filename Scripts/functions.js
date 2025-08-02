// Check if an element is visible in the viewport
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Animate the progress bars once when in view
export function animateSkillsOnScroll() {
    
    //get each skill card
  document.querySelectorAll('.skill-card').forEach(card => {
    const progress = card.querySelector('.progress');
    const target = card.dataset.progress;
     if (isInViewport(card) && !progress.classList.contains('animated')) {
      progress.style.width = target;
      progress.classList.add('animated');
    }
  });
}