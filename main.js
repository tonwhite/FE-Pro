// За допомогою ajax - запиту вивести погоду



// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

// q = XXX - місто, для якого показати погоду
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки
// http://openweathermap.org/img/w/10d.png

// Документація: https://openweathermap.org/current

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const lat = '49.839700201373404';
const lon = '24.028291266206672';

const apiKey = 'e723c2b497ef1fcc2c4e81b1a4c26a60';

const url = `${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        
        const weatherInfo = {
            temperature: data.main.temp,
            pressure: data.main.pressure,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg,
            iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        };

        console.log(weatherInfo);
    })
    .catch(error => {
        console.log('An error occurred while fetching the weather data: ', error);
    });









