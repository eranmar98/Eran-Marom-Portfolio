// Check if an element is visible in the viewport
// getBoudingClientRect() - get size and position of element
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Animate the progress bars once when in view
export function animateSkillsOnScroll() {}

// Function to mark the link in the navbar when the same section is on display
// Loop through each <section> tag, get their size and position\
// Loop through links in the navbar and remove their active status accordingly
export function updateActiveLink() {
  let currentSection = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Fetch the github API function
// Load and display GitHub projects dynamically
export async function displayGitHubProjects() {
  const username = 'eranmar98';
  const container = document.getElementById('projects-container');

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await response.json();

    for (const repo of repos) {
      // Skip forks or repos without a description
      if (repo.fork || !repo.description) continue;

      // Fetch all languages for this repo
      const languagesResponse = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/languages`
      );
      const languagesData = await languagesResponse.json();
      const allLanguages = Object.keys(languagesData);
      const languageBadges = allLanguages
        .map((lang) => `<span class="language-badge">${lang}</span>`)
        .join('');

      // Build the project card
      const card = document.createElement('div');
      card.classList.add('project-card');

      card.innerHTML = `
  <h3>${repo.name}</h3>
  <p>${repo.description}</p>
  <div class="language-badges">${languageBadges}</div>
  <a href="${repo.html_url}" target="_blank" class="project-link">View on GitHub</a>
`;

      container.appendChild(card);
    }
  } catch (error) {
    console.error('Failed to load GitHub projects:', error);
    container.innerHTML = `<p>Failed to load GitHub projects. Please try again later.</p>`;
  }
}
