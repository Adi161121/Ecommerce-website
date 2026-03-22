// Mobile nav toggle
const bar = document.getElementById('bar');
const closeBtn = document.getElementById('close');
const navbar = document.getElementById('navbar');

function openNav() {
  navbar.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeNav() {
  navbar.classList.remove('active');
  document.body.style.overflow = '';
}

if (bar) bar.addEventListener('click', openNav);
if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); closeNav(); });

// Close when clicking the dark overlay (the ::before pseudo element area)
navbar.addEventListener('click', (e) => {
  if (e.target === navbar) closeNav();
});

// Close nav when a link is clicked
document.querySelectorAll('#navbar li:not(#close-btn) a').forEach(link => {
  link.addEventListener('click', closeNav);
});