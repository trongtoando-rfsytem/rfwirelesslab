(() => {
  'use strict';
  const lessons = window.LESSONS || [];
  const tools = window.TOOLS || [];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const lessonList = document.getElementById('lesson-list');
  const toolList = document.getElementById('tool-list');
  const filters = document.getElementById('filters');
  const search = document.getElementById('lesson-search');
  let category = 'Tất cả';
  const categories = ['Tất cả', ...new Set(lessons.map(x => x.category))];
  filters.innerHTML = categories.map(x => `<button class="filter ${x===category?'is-active':''}" type="button" data-category="${esc(x)}">${esc(x)}</button>`).join('');
  function renderLessons() {
    const query = search.value.trim().toLocaleLowerCase('vi');
    const shown = lessons.filter(x => (category === 'Tất cả' || x.category === category) &&
      [x.title,x.category,x.summary,...(x.tags||[])].join(' ').toLocaleLowerCase('vi').includes(query));
    lessonList.innerHTML = shown.map(x => `<article class="content-card"><div class="card-meta"><span class="pill">${esc(x.category)}</span><span class="kind">${esc(x.type || 'TÀI LIỆU')}</span></div><h3>${esc(x.title)}</h3><p>${esc(x.summary)}</p><div class="card-bottom"><span>${esc(x.level || 'Tài liệu')}</span><a href="${esc(x.href)}" ${/^https?:\/\//.test(x.href)?'target="_blank" rel="noopener noreferrer"':''}>Mở tài liệu ↗</a></div></article>`).join('');
    document.getElementById('lesson-empty').hidden = shown.length > 0;
  }
  toolList.innerHTML = tools.map(x => `<article class="content-card tool-card"><div class="tool-symbol" aria-hidden="true">${esc(x.icon || '⌘')}</div><span class="pill">${esc(x.category)}</span><h3>${esc(x.title)}</h3><p>${esc(x.summary)}</p><div class="card-bottom"><span>CHẠY TRÊN WEB</span><a href="${esc(x.href)}">Mở công cụ ↗</a></div></article>`).join('');
  document.getElementById('lesson-count').textContent = `${lessons.length} tài liệu`;
  document.getElementById('tool-count').textContent = `${tools.length} công cụ`;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-category]');
    if (!button) return;
    category = button.dataset.category;
    filters.querySelectorAll('button').forEach(b => b.classList.toggle('is-active', b === button));
    renderLessons();
  });
  search.addEventListener('input', renderLessons);
  renderLessons();
})();
