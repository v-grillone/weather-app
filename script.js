const key = 'bc2b6a90312480de38b5f081a7c20d7f';

let getWeather = async function(city, key){
    let pathCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
    const resolveCoordinates = await fetch(pathCoordinates);
    const jsonCoordinates = await resolveCoordinates.json();
    let lat = jsonCoordinates[0].lat;
    let lon = jsonCoordinates[0].lon;
    let pathWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    async function weatherData(path){
        const resolveWeather = await fetch(path);
        const jsonWeather = await resolveWeather.json();
        let temp = jsonWeather.current.temp;
        let description = jsonWeather.current.weather[0].main;
        let icon = `http://openweathermap.org/img/wn/${jsonWeather.current.weather[0].icon}@2x.png`;
        console.log(icon);
        let humidity = jsonWeather.current.humidity;
        let windSpeed = jsonWeather.current.wind_speed; 
        appendTemp(temp); 
        appendIcon(icon);
        appendDescription(description); 
        appendHumidity(humidity);
        appendWindSpeed(windSpeed);  
        // for loop to append day to 7 day forcast.
        for(let i = 1; i < jsonWeather.daily.length; i++){
            let day = [jsonWeather.daily[i].temp.max, jsonWeather.daily[i].weather[0].main, `http://openweathermap.org/img/wn/${jsonWeather.daily[i].weather[0].icon}@2x.png`];
            appendDay(day);
        };
    }
    weatherData(pathWeather);
};

let searchAction = function(){
    const searchBtn = document.getElementById('search-btn');   
    searchBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        const cityInput = document.querySelector('.search-bar');
        let cityValue = cityInput.value;
        if(cityValue.length <= 1){
            alert('Not a city!');
            cityInput.value = '';
        }else{
            let cityFormatted = cityValue.split('')[0].toUpperCase()+cityValue.slice(1);
            cityInput.value = '';
            appendCity(cityFormatted);
            getWeather(cityFormatted, key);
        }
    }) 
};

let appendTemp = function(temp){
    tempRound = Math.round(temp);
    const cityTemp = document.getElementById('city-temp');
    cityTemp.innerText = tempRound+'°';
};

let appendIcon = function(icon){
    const cityInfoDiv = document.getElementById('city-information');
    const cityDescriptionHeader = document.getElementById('city-description')
    const cityDescriptionIcon = document.createElement('img');
    cityDescriptionIcon.id = 'city-description-icon';
    cityDescriptionIcon.alt = 'temperature description icon';
    cityDescriptionIcon.src = icon;
    cityInfoDiv.insertBefore(cityDescriptionIcon, cityDescriptionHeader);
};

let appendDescription = function(description){
    const cityDescription = document.getElementById('city-description');
    cityDescription.innerText = description;
};

let appendHumidity = function(humidity){
    const cityHumidity = document.getElementById('city-humidity');
    cityHumidity.innerText = 'Humidity: '+humidity+'%';
};

let appendWindSpeed = function(windSpeed){
    const cityWindSpeed = document.getElementById('city-wind');
    cityWindSpeed.innerText = 'Wind Speed: '+windSpeed+' m/s';
};

let appendCity = function(city){
    const cityName = document.getElementById('city');
    cityName.innerText = city;
};

let appendDay = function(day){
    // grabbing document 7 day div
    const sevenDayDiv = document.querySelector('.seven-day-container');
    // creating dom elements
    const dayContainerDiv = document.createElement('div');
    dayContainerDiv.classList.add('day-container');
    const dayHeader = document.createElement('h5');
    dayHeader.classList.add('day');
    dayHeader.innerText = 'Day';
    const dayDataDiv = document.createElement('div');
    dayDataDiv.classList.add('day-data');
    const dayTempHeader = document.createElement('h5');
    dayTempHeader.classList.add('day-temp');
    dayTempHeader.innerText = Math.round(day[0])+'°';
    // adding image to day of the week weather
    const dayIcon = document.createElement('img');
    dayIcon.src = day[2];
    dayIcon.classList.add('day-image');
    dayIcon.alt = 'temperature description icon';

    // Constructing html to append to dom
    dayDataDiv.appendChild(dayTempHeader);
    dayDataDiv.appendChild(dayIcon);
    dayContainerDiv.appendChild(dayDataDiv);
    dayContainerDiv.appendChild(dayHeader);
    sevenDayDiv.appendChild(dayContainerDiv);
}


searchAction();