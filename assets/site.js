
'use strict';

// All content and navigation work without JavaScript; filtering is an enhancement.
const filters = document.querySelector('.filters');

if (filters) {
  const projects = [...document.querySelectorAll('.project')];

  // Each chip in .project-categories is a tag.
  // Add/remove chips in research.html;
  // filter buttons and matching update automatically,
  // including multiple tags.
  const categories = [...new Set(projects.flatMap(project =>
    [...project.querySelectorAll('.project-categories .category')]
      .map(tag => tag.textContent.trim())
  ))];

  categories.forEach(category => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.filter = category;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = category;
    filters.appendChild(button);
  });

  const countLabel = filters.querySelector('[data-filter="All"] span');
  if (countLabel) countLabel.textContent = projects.length;
  filters.hidden = false;

  const applyFilter = category => {
    let count = 0;

    projects.forEach(project => {
      const tags = [...project.querySelectorAll('.project-categories .category')]
        .map(tag => tag.textContent.trim());

      project.hidden = category !== 'All' && !tags.includes(category);
      if (!project.hidden) count++;
    });

    filters.querySelectorAll('button').forEach(button =>
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.filter === category)
      )
    );

    document.getElementById('filter-status').textContent =
      `${count} research entries shown`;
  };

  filters.addEventListener('click', event => {
    const button = event.target.closest('button');

    if (button && filters.contains(button)) {
      applyFilter(button.dataset.filter);
    }
  });

  // Keep deep links usable after a filter has hidden the target.
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));

    if (target?.classList.contains('project')) {
      applyFilter('All');
      target.scrollIntoView();
    }
  });
}
