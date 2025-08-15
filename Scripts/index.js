import { updateActiveLink, animateSkillsOnScroll, displayGitHubProjects } from './functions.js';

// Listen for scroll and trigger check
window.addEventListener('scroll', animateSkillsOnScroll);
window.addEventListener('load', animateSkillsOnScroll); // if it's already in view

// AOS + active link + GitHub projects
document.addEventListener('DOMContentLoaded', () => {
  // AOS
  AOS.init({ duration: 1000, once: true });

  // cache once
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-bar ul li a');

  // call with args
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


