'use strict';
// All content and navigation work without JavaScript; filtering is an enhancement.
const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  const projects = [...document.querySelectorAll('.project')];
  const applyFilter = (category) => {
    let count = 0;
    projects.forEach(project => {
      project.hidden = category !== 'All' && project.dataset.category !== category;
      if (!project.hidden) count++;
    });
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    document.getElementById('filter-status').textContent = `${count} research entries shown`;
  };
  filters.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (button) applyFilter(button.dataset.filter);
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
