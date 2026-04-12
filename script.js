(function () {
  'use strict';

  const list = document.getElementById('projects-list');
  const panel = document.getElementById('hover-image-panel');
  const img = document.getElementById('hover-image');

  // Disable hover images on touch devices
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  // Build the project list from projects.js
  PROJECTS.forEach(function (project) {
    const li = document.createElement('li');
    li.className = 'project-row';
    li.dataset.type = project.type;

    // Title — linked only when there is no description
    const titleEl = document.createElement('span');
    titleEl.className = 'project-title';

    if (project.link && !project.description) {
      const a = document.createElement('a');
      a.href = project.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = project.title;
      titleEl.appendChild(a);
    } else {
      titleEl.textContent = project.title;
    }

    // Venue
    const venueEl = document.createElement('span');
    venueEl.className = 'project-venue';
    venueEl.textContent = project.venue;

    // Type
    const typeEl = document.createElement('span');
    typeEl.className = 'project-type';
    typeEl.textContent = project.type;

    li.appendChild(titleEl);
    li.appendChild(venueEl);
    li.appendChild(typeEl);

    // Description accordion (optional)
    if (project.description) {
      const descWrap = document.createElement('div');
      descWrap.className = 'project-desc-wrap';

      const descEl = document.createElement('p');
      descEl.className = 'project-desc';
      // innerHTML allows <a href="..."> links inside descriptions
      descEl.innerHTML = project.description;
      descWrap.appendChild(descEl);
      li.appendChild(descWrap);

      li.classList.add('has-description');
      li.addEventListener('click', function (e) {
        // Don't toggle if clicking an external link
        if (e.target.tagName === 'A') return;
        const isOpen = li.classList.contains('open');
        li.classList.toggle('open', !isOpen);
      });
    }

    // Hover interaction (desktop only, and only if image is set)
    if (!isTouchDevice && project.image) {
      li.addEventListener('mouseenter', function () {
        img.src = project.image;
        img.alt = project.title;

        img.onload = function () {
          // Align image center with the hovered row's center
          const rowRect = li.getBoundingClientRect();
          const rowCenterY = rowRect.top + rowRect.height / 2;
          const imgH = img.offsetHeight;
          let top = rowCenterY - imgH / 2;
          // Clamp so image stays within viewport
          top = Math.max(24, Math.min(top, window.innerHeight - imgH - 24));
          img.style.top = top + 'px';
          panel.classList.add('visible');
        };

        img.onerror = function () {
          panel.classList.remove('visible');
        };
      });

      li.addEventListener('mouseleave', function () {
        panel.classList.remove('visible');
      });
    }

    list.appendChild(li);
  });

  // Custom filter dropdown
  const filterWrap = document.getElementById('projects-filter');
  const filterCurrent = document.getElementById('filter-current');
  const filterDropdown = document.getElementById('filter-dropdown');

  if (filterWrap && filterCurrent && filterDropdown) {
    // Toggle open/close
    filterCurrent.addEventListener('click', function (e) {
      e.stopPropagation();
      filterDropdown.classList.toggle('open');
    });

    // Select an option
    filterDropdown.addEventListener('click', function (e) {
      const btn = e.target.closest('button');
      if (!btn) return;

      const filter = btn.dataset.filter;
      filterCurrent.textContent = btn.textContent;

      // Mark active
      filterDropdown.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      filterDropdown.classList.remove('open');

      // Apply filter
      list.querySelectorAll('.project-row').forEach(function (row) {
        if (filter === 'all' || row.dataset.type === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
          row.classList.remove('open');
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function () {
      filterDropdown.classList.remove('open');
    });
  }
})();
