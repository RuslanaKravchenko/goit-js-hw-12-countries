function fetchCountries(parameter, searchQuery) {
  const url = `https://restcountries.eu/rest/v2/${parameter}/${searchQuery}`;

  return fetch(url).then(response => response.json());
}

export default fetchCountries;
