import { refs } from './js/refs';
import { setActiveLink } from './js/nav';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { createMarkup } from './js/create-markup';
import './styles.scss';

refs.input.addEventListener('input', debounce(getData, 500));
refs.nav.addEventListener('click', handleNavClick);

function getData(event) {
  if (event.target.value) {
    fetchCountries('name', event.target.value).then(countries =>
      createMarkup(countries, event.target),
    );
  }
}

function handleNavClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'A') return;

  fetchCountries('region', event.target.dataset.region).then(countries =>
    createMarkup(countries, event.target),
  );
  setActiveLink(event.target);
}
