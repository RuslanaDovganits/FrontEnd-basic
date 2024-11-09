const locationElement = document.querySelector('.city-text');
const iconElement = document.querySelector('.icon-big img');
const conditionElement = document.querySelector('.weather-text');
const temperatureNowElement = document.querySelector('.temperature-now-text');
const dateElement = document.querySelector('#today');
const iconSmallElement = document.querySelectorAll('.icon-small');
const weekDayElement = document.querySelectorAll('.weekDay');
const tempMaxElement = document.querySelectorAll('.temperature-max');
const tempMinElement = document.querySelectorAll('.temperature-min');

console.log(weekDayElement);
const getWeatherForecastByLocation = async () => {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json();

    const weatherForecast = await fetch(`http://api.weatherapi.com/v1/current.json?key=512a90261096497bb74174453240711&q=${data.city}&aqi=no`);
    const allDataAboutWeather = await weatherForecast.json();
    renderWeatherInfo(data.city, allDataAboutWeather.current.condition.icon, allDataAboutWeather.current.condition.text, allDataAboutWeather.current.temp_c, new Date());

    const sevenDaysWeather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=512a90261096497bb74174453240711&q=${data.city}&days=7&aqi=no&alerts=no`);
    const allDataAboutSevenDaysWeather = await sevenDaysWeather.json();
    console.log(allDataAboutSevenDaysWeather);


    let sortedWeatherSevenDays = [];
    sortedWeatherSevenDays = allDataAboutSevenDaysWeather.forecast.forecastday.map(
        (weatherForOneDay) => {
            const filteredWeatherForOneDay = {
                date: new Date(weatherForOneDay.date).toLocaleString('en-US', { weekday: 'short' }),
                smallIcon: weatherForOneDay.day.condition.icon,
                maxTemp: weatherForOneDay.day.maxtemp_c,
                minTemp: weatherForOneDay.day.mintemp_c,
            }
            console.log(filteredWeatherForOneDay)
            return filteredWeatherForOneDay;    /// 7 days [] 
        }
    )


    const myWeathwerFunc = () => {

        iconSmallElement.forEach((element, index) => {
            element.src = sortedWeatherSevenDays[index].smallIcon;
        });
        tempMaxElement.forEach((element, index) => {
            element.textContent = sortedWeatherSevenDays[index].maxTemp;
        });

        tempMinElement.forEach((element, index) => {
            element.textContent = sortedWeatherSevenDays[index].minTemp;
        });
    }
    myWeathwerFunc();
}



getWeatherForecastByLocation();
function renderWeatherInfo(city, icon, condition, temperature, date) {
    locationElement.textContent = city;
    iconElement.src = icon;
    conditionElement.textContent = condition;
    temperatureNowElement.textContent = temperature + '°';
    dateElement.textContent = `${date.toDateString()}`
}






























// renderWeatherInfo(data.city, allDataAboutWeather.current.condition.icon, allDataAboutWeather.current.condition.text, allDataAboutWeather.current.temp_c);
// displayWeekDays(allDataAboutWeather.forecast.forecastday); // Передаем данные о прогнозе на 7 дней
// }
// getWeatherForecastByLocation();
// function renderWeatherInfo(city, icon, condition, temperature) {
// locationElement.textContent = city;
// iconElement.src = icon;
// conditionElement.textContent = condition;
// temperatureNowElement.textContent = temperature;
// }




















