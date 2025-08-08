import { animateSkillsOnScroll } from './functions.js';

// Listen for scroll and trigger check
window.addEventListener('scroll', animateSkillsOnScroll);
window.addEventListener('load', animateSkillsOnScroll); // if it's already in view

// AOS library trigger 
// DOMContentLoad - the HTML page has loaded
//AOS.init - activate AOS 
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 1000, once: true });


  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-bar ul li a');

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
});
