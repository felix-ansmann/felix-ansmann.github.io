(function () {
  'use strict';

  const list = document.getElementById('projects-list');
  const panel = document.getElementById('hover-image-panel');
  const img = document.getElementById('hover-image');

  // Disable hover images on touch devices
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  // Active slideshow state
  let slideshowInterval = null;

  function stopSlideshow() {
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      slideshowInterval = null;
    }
    panel.classList.remove('visible');
  }

  function startSlideshow(images, rowEl) {
    stopSlideshow();

    let index = 0;

    function showImage(src) {
      img.src = src;
      img.onload = function () {
        const rowRect = rowEl.getBoundingClientRect();
        const rowCenterY = rowRect.top + rowRect.height / 2;
        const imgH = img.offsetHeight;
        let top = rowCenterY - imgH / 2;
        top = Math.max(24, Math.min(top, window.innerHeight - imgH - 24));
        img.style.top = top + 'px';
        panel.classList.add('visible');
      };
      img.onerror = function () {
        panel.classList.remove('visible');
      };
    }

    // Show first image immediately
    showImage(images[index]);

    // Only start interval if there are multiple images
    if (images.length > 1) {
      slideshowInterval = setInterval(function () {
        index = (index + 1) % images.length;
        showImage(images[index]);
      }, 1000);
    }
  }

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
      descEl.innerHTML = project.description;
      descWrap.appendChild(descEl);
      li.appendChild(descWrap);

      li.classList.add('has-description');
      li.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') return;
        const isOpen = li.classList.contains('open');
        li.classList.toggle('open', !isOpen);
      });
    }

    // Slideshow hover (desktop only, only if images array has entries)
    const images = Array.isArray(project.images) ? project.images.filter(Boolean) : [];
    if (!isTouchDevice && images.length > 0) {
      li.addEventListener('mouseenter', function () {
        startSlideshow(images, li);
      });
      li.addEventListener('mouseleave', function () {
        stopSlideshow();
      });
    }

    list.appendChild(li);
  });

  // Custom filter dropdown
  const filterWrap = document.getElementById('projects-filter');
  const filterCurrent = document.getElementById('filter-current');
  const filterDropdown = document.getElementById('filter-dropdown');

  if (filterWrap && filterCurrent && filterDropdown) {
    filterCurrent.addEventListener('click', function (e) {
      e.stopPropagation();
      filterDropdown.classList.toggle('open');
    });

    filterDropdown.addEventListener('click', function (e) {
      const btn = e.target.closest('button');
      if (!btn) return;

      const filter = btn.dataset.filter;
      filterCurrent.textContent = btn.textContent;

      filterDropdown.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterDropdown.classList.remove('open');

      list.querySelectorAll('.project-row').forEach(function (row) {
        if (filter === 'all' || row.dataset.type === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
          row.classList.remove('open');
        }
      });
    });

    document.addEventListener('click', function () {
      filterDropdown.classList.remove('open');
    });
  }
})();
