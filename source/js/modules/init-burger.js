export const initBurger = () => {
  const SCREEN_TABLET = 768;
  const pageBody = document.querySelector('body');
  const headerNav = document.querySelector('[data-header-nav]');
  const burgerButton = document.querySelector('[data-burger]');

  const closeMenu = () => {
    pageBody.classList.remove('scroll-lock');
    headerNav.classList.remove('is-open');
    burgerButton.classList.remove('is-open');
  };

  burgerButton.addEventListener('click', () => {
    pageBody.classList.toggle('scroll-lock');
    headerNav.classList.toggle('is-open');
    burgerButton.classList.toggle('is-open');
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-close-menu]')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > SCREEN_TABLET) {
      closeMenu();
    }
  });
};
