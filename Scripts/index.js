import {
  updateActiveLink,
  animateSkillsOnScroll,
  displayGitHubProjects,
} from './functions.js';
import { initContactForm } from './functions.js';

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

// contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name');
    alert(`Thanks, ${name}! I’ll get back to you soon.`);
    form.reset();
  });
}

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

window.addEventListener('DOMContentLoaded', () => {
  initContactForm({
    publicKey: 'LaA8GkckyWRFet9_4',
    serviceId: 'service_km3xffi',
    templateId: 'template_5ayyr5r',
  });
});
