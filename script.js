// Mobile nav toggle
const bar = document.getElementById('bar');
const closeBtn = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('active');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.remove('active');
  });
}

// Close nav when a link is clicked
document.querySelectorAll('#navbar li a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});