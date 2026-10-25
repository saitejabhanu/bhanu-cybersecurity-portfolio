const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
// Replace this with your exact LinkedIn profile URL before publishing.
const linkedinLink = document.getElementById('linkedin-link');
linkedinLink.href = 'https://www.linkedin.com/';
document.getElementById('copy-linkedin')?.addEventListener('click', async (event) => {
  try {
    await navigator.clipboard.writeText(linkedinLink.href);
    event.currentTarget.textContent = 'Copied!';
    setTimeout(() => event.currentTarget.textContent = 'Copy LinkedIn URL', 1800);
  } catch {
    window.prompt('Copy your LinkedIn URL:', linkedinLink.href);
  }
});
