function appendHumidity(humidity) {
  const cityHumidity = document.getElementById('city-humidity');
  cityHumidity.innerText = `Humidity: ${humidity}%`;
}

export default appendHumidity;
