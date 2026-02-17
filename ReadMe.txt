🌤 Real-Time Weather Dashboard

A clean and minimal Real-Time Weather Dashboard built using:

HTML

CSS

JavaScript

OpenWeatherMap API

This application fetches and displays real-time weather data for multiple cities, including temperature, weather icons, and a 3-day forecast.

🚀 Features

🔎 Search weather by city name

🌡 Display current temperature and weather description

🌤 Dynamic weather icons

📅 3-day forecast

⏳ Loading state while fetching data

📍 Auto-detect user’s current location (Geolocation API)

🎨 Clean and minimal UI

🛠 Technologies Used

HTML5

CSS3

JavaScript (ES6+)

Fetch API

OpenWeatherMap API

📁 Project Structure
weather/
│
├── weather.html
├── weather.css
├── weather.js
└── ReadMe.txt

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Eden1916/weather.git
cd weather

2️⃣ Get an API Key

Sign up and get a free API key from:

OpenWeatherMap → https://openweathermap.org/api

3️⃣ Add Your API Key

Open weather.js and replace:

const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';


With your actual API key:

const apiKey = 'your_real_api_key_here';

4️⃣ Run the Project

Simply open:

weather.html


in your browser.

No backend or server required.

🌐 API Used

OpenWeatherMap Current Weather API
OpenWeatherMap 5-Day / 3-Hour Forecast API

🧠 Concepts Covered

API Integration

Asynchronous JavaScript (async/await)

Fetch API

Dynamic Rendering

DOM Manipulation

Loading States

Geolocation API

✨ Future Improvements

Add multiple city weather cards

Add hourly forecast chart

Improve UI animations

Add dark mode

Convert into a React version

Deploy to Netlify or Vercel