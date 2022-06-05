import appendTemp from './append-temp';
import appendIcon from './apppend-icon';
import appendDescription from './append-description';
import appendHumidity from './append-humidity';
import appendWindSpeed from './append-wind-speed';
import appendDay from './append-day';
import appendDate from './append-date';
import sevenDays from './seven-days';

async function weatherData(path) {
  const resolveWeather = await fetch(path);
  const jsonWeather = await resolveWeather.json();
  const { timezone } = jsonWeather;
  const { temp } = jsonWeather.current;
  const description = jsonWeather.current.weather[0].main;
  const icon = `http://openweathermap.org/img/wn/${jsonWeather.current.weather[0].icon}@2x.png`;
  const { humidity } = jsonWeather.current;
  const windSpeed = jsonWeather.current.wind_speed;
  appendDate(timezone);
  appendTemp(temp);
  appendIcon(icon);
  appendDescription(description);
  appendHumidity(humidity);
  appendWindSpeed(windSpeed);
  // for loop to append day to 7 day forcast.
  for (let i = 1; i < jsonWeather.daily.length; i += 1) {
    const day = [jsonWeather.daily[i].temp.max, jsonWeather.daily[i].weather[0].main, `http://openweathermap.org/img/wn/${jsonWeather.daily[i].weather[0].icon}@2x.png`];
    appendDay(day);
  }
  sevenDays();
}

export default weatherData;
