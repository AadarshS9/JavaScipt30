const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json()) // get the data from the blob
  .then(data => cities.push(...data)); // spread the data into the array

function findMatches(wordToMatch, cities) {
  return cities.filter(place => { 
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi'); // g: global, i: case insensitive
    return place.city.match(regex) || place.state.match(regex) // if city or state matches
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // regex to add commas to numbers
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities); // this.value is the value of the input
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi'); // g: global, i: case insensitive
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // highlight the matching part
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); // highlight the matching part
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span> 
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html; 
}

const searchInput = document.querySelector('.search'); 
const suggestions = document.querySelector('.suggestions'); 

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
