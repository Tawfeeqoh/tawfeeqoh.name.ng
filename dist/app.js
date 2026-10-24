// The page and all destination links work without JavaScript.
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => link.addEventListener('click', () => {
  const id = link.getAttribute('href').slice(1);
  const target = document.getElementById(id);
  if (target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({preventScroll: true});
  }
}));
