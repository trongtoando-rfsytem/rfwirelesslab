/* RF Wireless Lab homepage — filter/search and content rendering. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const store = window.RFW_CONTENT || {lessons:[],tools:[],resources:[]};
  const lang = window.RFW_I18N;
  const tt = key => lang?.t(key) || key;
  const local = value => typeof value === 'string' ? value : (value?.[lang.getLang()] || value?.en || value?.vi || '');
  const array = key => Array.isArray(store[key]) ? store[key] : [];
  let activeCat = 'all';
  let searchText = '';
  const categoryIcons = {antenna:'⌁',propagation:'∿',beamforming:'M',nr5g:'5G',ris:'R',standards:'✓'};
  const categories = ['antenna','propagation','beamforming','nr5g','ris','standards'];
  const safeHref = href => {
    const s = String(href || '').trim();
    if (!s || /^(?:javascript|data|vbscript):/i.test(s) || /^\/\//.test(s)) return '#';
    return s;
  };
  const external = href => /^https?:\/\//i.test(href);
  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text != null) el.textContent = text;
    return el;
  };
  function linkTo(href,label,className) {
    const a = make('a',className,label);
    a.href = safeHref(href);
    if (external(a.href) && new URL(a.href).origin !== location.origin) {
      a.target = '_blank'; a.rel = 'noopener noreferrer';
    }
    return a;
  }
  function matches(entry) {
    const byCat = activeCat === 'all' || entry.category === activeCat;
    const content = [entry.category, ...(entry.tags || []), ...Object.values(entry.title || {}), ...Object.values(entry.description || {})].join(' ').toLowerCase();
    return byCat && content.includes(searchText);
  }
  function createCard(entry,type) {
    const el = make('article','item-card'+(type==='tools'?' tool-card':''));
    if (type === 'tools') {
      el.append(make('div','tool-icon',entry.symbol || 'RF'));
    }
    const top = make('div','card-top');
    top.append(make('span','category-pill',tt('cat.'+(entry.category || 'antenna'))));
    top.append(make('span','format-tag',type==='lessons' ? (entry.format || 'HTML') : type==='resources' ? (entry.format || 'FILE') : 'WEB APP'));
    el.append(top);
    const h = make('h3','',local(entry.title));
    el.append(h);
    el.append(make('p','',local(entry.description)));
    const end = make('div','card-end');
    const label = type==='lessons' ? tt('level.' + (entry.level || 'beginner')) : type==='tools' ? 'HTML / JS' : (entry.format || 'FILE');
    end.append(make('small','',label));
    const action = type==='lessons'?'lessons.open':type==='tools'?'tools.open':'resources.open';
    end.append(linkTo(entry.href,tt(action)+' ↗'));
    el.append(end);
    return el;
  }
  function drawTopics() {
    const grid = $('topic-grid');if(!grid)return;
    grid.replaceChildren();
    for (const cat of categories) {
      const count = array('lessons').filter(x=>x.category===cat).length + array('tools').filter(x=>x.category===cat).length + array('resources').filter(x=>x.category===cat).length;
      const button = make('button','topic-card');
      button.type = 'button'; button.setAttribute('aria-label',tt('cat.'+cat));
      button.append(make('span','topic-symbol',categoryIcons[cat]));
      button.append(make('h3','',tt('cat.'+cat)));
      const bottom = make('div','topic-bottom');
      bottom.append(make('span','',count ? tt('topics.view') : tt('topics.soon')));
      bottom.append(make('i','','↗'));
      button.append(bottom);
      button.addEventListener('click',()=>{
        activeCat=cat;searchText='';if($('lesson-search'))$('lesson-search').value='';
        drawFilters();drawLessons();$('lessons')?.scrollIntoView({behavior:'smooth'});
      });
      grid.append(button);
    }
  }
  function drawFilters() {
    const filters = $('filters');if(!filters)return;
    filters.replaceChildren();
    for(const cat of ['all',...categories]) {
      const chip = make('button','filter-chip'+(cat===activeCat?' active':''),tt('cat.'+cat));
      chip.type='button'; chip.setAttribute('aria-pressed',String(cat===activeCat));
      chip.addEventListener('click',()=>{activeCat=cat;drawFilters();drawLessons();});
      filters.append(chip);
    }
  }
  function drawLessons() {
    const list=$('lesson-list');if(!list)return;
    list.replaceChildren(...array('lessons').filter(matches).map(entry=>createCard(entry,'lessons')));
    $('lesson-empty').hidden = list.children.length!==0;
  }
  function drawKind(kind,container,empty) {
    const list=$(container);if(!list)return;
    list.replaceChildren(...array(kind).map(x=>createCard(x,kind)));
    if(empty)$(empty).hidden=list.children.length!==0;
  }
  function formatCount(id,num){ if($(id)) $(id).textContent=String(num).padStart(2,'0'); }
  function render() {
    drawTopics();drawFilters();drawLessons();drawKind('tools','tool-list');drawKind('resources','resource-list','resource-empty');
    formatCount('count-lessons',array('lessons').length);formatCount('lesson-count',array('lessons').length);
    formatCount('count-tools',array('tools').length);formatCount('tool-count',array('tools').length);formatCount('resource-count',array('resources').length);
  }
  function init() {
    $('lesson-search')?.addEventListener('input',ev=>{searchText=ev.target.value.trim().toLowerCase();drawLessons();});
    if($('current-year'))$('current-year').textContent=String(new Date().getFullYear());
    render();
    document.addEventListener('rfwl:language',render);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
