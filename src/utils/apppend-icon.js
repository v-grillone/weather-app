function appendIcon(icon) {
  const cityInfoDiv = document.getElementById('city-information');
  const cityDescriptionHeader = document.getElementById('city-description');
  const cityDescriptionIcon = document.createElement('img');
  cityDescriptionIcon.id = 'city-description-icon';
  cityDescriptionIcon.alt = 'temperature description icon';
  cityDescriptionIcon.src = icon;
  cityInfoDiv.insertBefore(cityDescriptionIcon, cityDescriptionHeader);
}

export default appendIcon;
