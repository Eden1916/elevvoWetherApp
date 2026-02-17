const apiKey = "Enter Your API Key Here"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

const loading = document.getElementById('loading');
const currentWeather = document.getElementById('current-weather');
const forecastContainer = document.getElementById('forecast');
const forecastCards = document.getElementById('forecast-cards');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    showLoading();
    try {
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const weatherData = await weatherRes.json();

        if(weatherData.cod !== 200) {
            alert(weatherData.message);
            hideLoading();
            return;
        }

        displayCurrentWeather(weatherData);

        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastRes.json();
        displayForecast(forecastData);

    } catch (error) {
        alert('Error fetching weather data');
        console.error(error);
    } finally {
        hideLoading();
    }
}

function displayCurrentWeather(data) {
    currentWeather.classList.remove('hidden');
    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function displayForecast(data) {
    forecastContainer.classList.remove('hidden');
    forecastCards.innerHTML = '';

    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

    dailyData.forEach(day => {
        const card = document.createElement('div');
        card.classList.add('forecast-card');
        card.innerHTML = `
            <h4>${new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="icon">
            <div>${Math.round(day.main.temp)}°C</div>
            <div>${day.weather[0].description}</div>
        `;
        forecastCards.appendChild(card);
    });
}

function showLoading() {
    loading.classList.remove('hidden');
    currentWeather.classList.add('hidden');
    forecastContainer.classList.add('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

window.addEventListener('load', () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            showLoading();

            try {
                const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
                const weatherData = await weatherRes.json();
                displayCurrentWeather(weatherData);

                const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
                const forecastData = await forecastRes.json();
                displayForecast(forecastData);
            } catch (error) {
                console.error(error);
            } finally {
                hideLoading();
            }
        });
    }
});
