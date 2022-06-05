function appendDay(day) {
  // grabbing document 7 day div
  const sevenDayDiv = document.querySelector('.seven-day-container');
  // creating dom elements
  const dayContainerDiv = document.createElement('div');
  dayContainerDiv.classList.add('day-container');
  const dayHeader = document.createElement('h5');
  dayHeader.classList.add('day');
  // dayHeader.innerText = 'Day';
  const dayDataDiv = document.createElement('div');
  dayDataDiv.classList.add('day-data');
  const dayTempHeader = document.createElement('h5');
  dayTempHeader.classList.add('day-temp');
  dayTempHeader.innerText = `${Math.round(day[0])}°`;
  // adding image to day of the week weather
  const dayIcon = document.createElement('img');
  const iconSrc = day[2];
  dayIcon.src = iconSrc;
  dayIcon.classList.add('day-image');
  dayIcon.alt = 'temperature description icon';

  // Constructing html to append to dom
  dayDataDiv.appendChild(dayTempHeader);
  dayDataDiv.appendChild(dayIcon);
  dayContainerDiv.appendChild(dayDataDiv);
  dayContainerDiv.appendChild(dayHeader);
  sevenDayDiv.appendChild(dayContainerDiv);
}

export default appendDay;
