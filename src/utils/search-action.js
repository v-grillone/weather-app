/* eslint-disable no-alert */
import getWeather from './get-weather';
import appendCity from './append-city';
import clearPrevious from './clear-previous';

function searchAction() {
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearPrevious();
    const cityInput = document.querySelector('.search-bar');
    const cityValue = cityInput.value;
    if (cityValue.length <= 1) {
      alert('Not a city!');
      cityInput.value = '';
    } else {
      const cityFormatted = cityValue.split('')[0].toUpperCase() + cityValue.slice(1);
      cityInput.value = '';
      appendCity(cityFormatted);
      getWeather(cityFormatted);
    }
  });
}

export default searchAction;
