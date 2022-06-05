import { utcToZonedTime, format } from 'date-fns-tz';

function appendDate(timeZone) {
  const zonedDate = utcToZonedTime(new Date(), timeZone);
  const formattedDate = format(zonedDate, 'E MMMM do h:mm aaaa');
  const cityDate = document.getElementById('city-date');
  cityDate.innerText = formattedDate;
}

export default appendDate;
