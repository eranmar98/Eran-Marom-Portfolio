import { isInViewport, animateSkillsOnScroll } from './functions.js';

// Listen for scroll and trigger check
window.addEventListener('scroll', animateSkillsOnScroll);
window.addEventListener('load', animateSkillsOnScroll); // if it's already in view
