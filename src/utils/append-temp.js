function appendTemp(temp) {
  const tempRound = Math.round(temp);
  const cityTemp = document.getElementById('city-temp');
  cityTemp.innerText = `${tempRound}°`;
}

export default appendTemp;
