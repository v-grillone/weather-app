/* eslint-disable no-alert */
/* eslint-disable no-console */
import weatherData from './weather-data';

async function getWeather(city) {
  try {
    const key = 'bc2b6a90312480de38b5f081a7c20d7f';
    const pathCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
    const resolveCoordinates = await fetch(pathCoordinates);
    const jsonCoordinates = await resolveCoordinates.json();
    const { lat } = jsonCoordinates[0];
    const { lon } = jsonCoordinates[0];
    const pathWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
    weatherData(pathWeather);
  } catch (err) {
    console.log(err.name);
    console.log(err);
    if (err instanceof TypeError) {
      alert('It looks like the city you entered is incorrect.\nPlease enter another city name.');
    }
  }
}

export default getWeather;
