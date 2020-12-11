import { refs } from './refs';

export const setActiveLink = function (nextActiveLink) {
  const currentActiveLink = refs.nav.querySelector('a.active');

  if (currentActiveLink) {
    currentActiveLink.classList.remove('active');
  }

  nextActiveLink.classList.add('active');
};
