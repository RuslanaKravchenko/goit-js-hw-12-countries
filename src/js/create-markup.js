import countriesList from '../templates/list-of-countries.hbs';
import country from '../templates/country.hbs';
import { refs } from './refs';
import { notice } from '@pnotify/core/';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const createMarkup = function (countries, e) {
  refs.content.innerHTML = '';

  if (!countries.length) {
    console.log('sefsfssds');
    const errorMarkup =
      '<h1 class="title title--error">😔<br>Сountry not found</h1>';
    refs.content.insertAdjacentHTML('beforeend', errorMarkup);
  }

  if (countries.length > 10 && e.nodeName === 'INPUT') {
    notice({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2500,
      minHeight: '40px',
    });
  }

  if (countries.length > 1 && countries.length <= 10) {
    refs.content.insertAdjacentHTML('beforeend', countriesList(countries));
  }

  if (countries.length === 1) {
    refs.content.insertAdjacentHTML('beforeend', country(countries));
    e.value = '';
  }

  if (e.nodeName === 'A') {
    refs.content.insertAdjacentHTML('beforeend', countriesList(countries));
  }

  refs.content.addEventListener('click', handleOnCountryClick);

  function handleOnCountryClick(event) {
    if (event.target.nodeName === 'IMG' || event.target.nodeName === 'H2') {
      const targetCountry = countries.filter(
        country => event.target.dataset.name === country.name,
      );

      refs.content.innerHTML = '';

      refs.content.insertAdjacentHTML('beforeend', country(targetCountry));
      e.value = '';
    }
    return;
  }
};
