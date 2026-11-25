// ---------- Project detail view ----------
// Clicking a project card copies its picture, title, facts and <template class="detail">
// into the pop-up. No edits needed here when you add projects.
const view = document.getElementById('project-view');

if (view) {
  const media = view.querySelector('.pv-media');
  const title = view.querySelector('#pv-title');
  const facts = view.querySelector('.pv-facts');
  const body = view.querySelector('.pv-body');
  let lastCard = null;

  function open(card) {
    lastCard = card;
    const img = card.querySelector('.card-img');
    media.replaceChildren(img ? img.cloneNode(true) : '');
    media.hidden = !img;
    view.classList.toggle('no-media', !img);
    title.textContent = card.querySelector('h4').textContent;
    const dl = card.querySelector('.facts');
    facts.replaceChildren(dl ? dl.cloneNode(true) : '');
    const tpl = card.querySelector('template.detail');
    body.replaceChildren(tpl ? tpl.content.cloneNode(true) : '');
    view.showModal();
    view.scrollTop = 0;
    document.body.classList.add('modal-open');
  }

  document.querySelectorAll('.card').forEach(card => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-haspopup', 'dialog');
    const more = document.createElement('div');
    more.className = 'card-more';
    more.textContent = 'View project →';
    card.appendChild(more);
    card.addEventListener('click', () => open(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
    });
  });

  // Any button with data-open="ID" opens the project card with that id (used by the featured picture)
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = document.getElementById(btn.dataset.open);
      if (card) open(card);
    });
  });

  view.querySelector('[data-close]').addEventListener('click', () => view.close());
  // click on the dimmed background closes it
  view.addEventListener('click', e => { if (e.target === view) view.close(); });
  view.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (lastCard) lastCard.focus();
  });
}

// ---------- Full-size picture viewer ----------
// Any element with data-zoom opens its <img> big. Click anywhere or press Esc to close.
const lb = document.getElementById('lightbox');
if (lb) {
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('.lb-caption');
  let opener = null;
  document.querySelectorAll('[data-zoom]').forEach(el => {
    el.addEventListener('click', () => {
      const img = el.querySelector('img');
      const tag = el.querySelector('.feature-tag');
      opener = el;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = tag ? tag.textContent : '';
      lb.showModal();
      document.body.classList.add('modal-open');
    });
  });
  lb.addEventListener('click', () => lb.close());
  lb.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (opener) opener.focus();
  });
}

// Keeps the footer year current.
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
