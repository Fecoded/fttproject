export const alertScroll = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const toggleNav = () => {
  const toggle = document.getElementById('toggle');
  const navMenu = document.querySelector('.site-navbar');

  if (toggle) {
    navMenu.classList.toggle('show-nav');
  }
};
