const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const menu = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? '' : 'flex';
  if (!open) {
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.padding = '20px';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'rgba(14,59,53,.98)';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,.08)';
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.style.display = '');
});
