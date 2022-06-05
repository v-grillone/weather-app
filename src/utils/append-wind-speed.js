function appendWindSpeed(windSpeed) {
  const cityWindSpeed = document.getElementById('city-wind');
  cityWindSpeed.innerText = `Wind Speed: ${windSpeed} m/s`;
}

export default appendWindSpeed;
