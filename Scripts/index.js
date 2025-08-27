import {
  updateActiveLink,
  animateSkillsOnScroll,
  displayGitHubProjects,
   initContactForm
} from './functions.js';

// Listen for scroll and trigger check
window.addEventListener('scroll', animateSkillsOnScroll); //if not in view
window.addEventListener('load', animateSkillsOnScroll); // if it's already in view

// AOS + active link + GitHub projects
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 800, once: true });

  // cache once
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-bar ul li a');

  // call with arguments
  const onScroll = () => updateActiveLink(sections, navLinks);
  window.addEventListener('scroll', onScroll);
  onScroll(); // set correct active link on load
   
    // GitHub projects
  displayGitHubProjects();

});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('open');
});

// close menu when clicking a link
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});
