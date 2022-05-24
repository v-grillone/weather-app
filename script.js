const key = 'bc2b6a90312480de38b5f081a7c20d7f';

let getWeather = async function(city, key){
    let pathCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
    const resolveCoordinates = await fetch(pathCoordinates);
    const jsonCoordinates = await resolveCoordinates.json();
    let lat = jsonCoordinates[0].lat;
    let lon = jsonCoordinates[0].lon
    let pathWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    async function weatherData(path){
        const resolveWeather = await fetch(path);
        const jsonWeather = await resolveWeather.json();
        let temp = jsonWeather.current.temp;
        let description = jsonWeather.current.weather[0].main;
        let humidity = jsonWeather.current.humidity;
        let windSpeed = jsonWeather.current.wind_speed; 
        appendTemp(temp); 
        appendDescription(description); 
        appendHumidity(humidity);
        appendWindSpeed(windSpeed);  
        // for loop to append day to 7 day forcast.
        for(let i = 1; i < jsonWeather.daily.length; i++){
            let day = [jsonWeather.daily[i].temp.max, jsonWeather.daily[i].weather[0].main];
            appendDay(day);
        };

        // let day1 = [jsonWeather.daily[1].temp.max, jsonWeather.daily[1].weather[0].main]
        // appendDay(day);
        // let day2 = [jsonWeather.daily[2].temp.max, jsonWeather.daily[2].weather[0].main]
        // let day3 = [jsonWeather.daily[3].temp.max, jsonWeather.daily[3].weather[0].main]
        // let day4 = [jsonWeather.daily[4].temp.max, jsonWeather.daily[4].weather[0].main]
        // let day5 = [jsonWeather.daily[5].temp.max, jsonWeather.daily[5].weather[0].main]
        // let day6 = [jsonWeather.daily[6].temp.max, jsonWeather.daily[6].weather[0].main]
        // let day7 = [jsonWeather.daily[7].temp.max, jsonWeather.daily[7].weather[0].main]
        // console.log();
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
    dayTempHeader.innerText = 15;
    const dayIcon = document.createElement('i');
    dayIcon.classList.add('fa-solid');
    dayIcon.classList.add('day-image');
    // to be done. create a for loop to determine which icon is appropriate
    dayIcon.classList.add('fa-cloud');
    // Constructing html to append to dom
    dayDataDiv.appendChild(dayTempHeader);
    dayDataDiv.appendChild(dayIcon);
    dayContainerDiv.appendChild(dayDataDiv);
    dayContainerDiv.appendChild(dayHeader);
    sevenDayDiv.appendChild(dayContainerDiv);
}


searchAction();