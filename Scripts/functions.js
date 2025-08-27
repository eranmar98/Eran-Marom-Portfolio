// Check if an element is visible in the viewport
// getBoudingClientRect() - get size and position of element
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0; // return true if in viewport
}

// Animate the progress bars once when in view
export function animateSkillsOnScroll() {}

// Function to mark the link in the navbar when the same section is on display
export function updateActiveLink(sections, navLinks) {
  let current = '';
  sections.forEach((section) => {
    const r = section.getBoundingClientRect();
    if (r.top <= 100 && r.bottom >= 100) current = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
}

// Fetch the github API function
// Load and display GitHub projects dynamically
// Used self-taught exception handling in case of error
export async function displayGitHubProjects() {
  const username = 'eranmar98';
  const container = document.getElementById('projects-container');

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await response.json();

    // Loop over each repository in repos
    for (const repo of repos) {
      // Fork = someone else's project
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

      // Dynamically fills the project details card
      card.innerHTML = `
  <h3>${repo.name}</h3>
  <p>${repo.description}</p>
  <div class="language-badges">${languageBadges}</div>
  <a href="${repo.html_url}" target="_blank" class="project-link">View on GitHub</a>
`;
      container.appendChild(card); // Append the project card
    }
  } catch (error) {
    //error handling
    console.error('Failed to load GitHub projects:', error);
    container.innerHTML = `<p>Failed to load GitHub projects. Please try again later.</p>`;
  }
}

export function initContactForm() {
  const form   = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const btn    = document.getElementById("sendBtn");

  if (!form) return; // if contact form not on page

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = "Sending…";
    status.textContent = "";

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        status.textContent = "✅ Message sent successfully!";
        status.className = "ok";
      } else {
        const err = await res.json();
        status.textContent = err.errors
          ? err.errors[0].message
          : "❌ Could not send.";
        status.className = "err";
      }
    } catch (error) {
      status.textContent = "❌ Network error. Try again later.";
      status.className = "err";
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  });
}



