function clearPrevious() {
  // removing previous days
  const sevenDayContainer = document.querySelectorAll('.seven-day-container');
  const days = Array.from(sevenDayContainer);
  days[0].innerHTML = '';
  // removing previous icon
  const descriptionIcon = document.getElementById('city-description-icon');
  if (descriptionIcon !== null) {
    descriptionIcon.remove();
  }
  // removing previous data
  const cityInformation = document.getElementById('city-information');
  Array.from(cityInformation.children).forEach((info) => {
    if (info.innerText !== '') {
      const currentInfo = info;
      currentInfo.innerText = '';
    }
  });
}

export default clearPrevious;
