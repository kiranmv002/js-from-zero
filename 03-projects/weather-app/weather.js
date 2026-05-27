// Day 16 - Mini Project: Weather App
// uses fetch, async await, DOM manipulation, local storage
// API: openweathermap.org (free)


// --- config ---
// replace with your actual API key from openweathermap.org
const API_KEY = 'YOUR_API_KEY_HERE'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'


// --- weather icons based on condition ---
function getWeatherIcon(code) {
    if (code >= 200 && code < 300) return '⛈️'    // thunderstorm
    if (code >= 300 && code < 400) return '🌧️'    // drizzle
    if (code >= 500 && code < 600) return '🌧️'    // rain
    if (code >= 600 && code < 700) return '❄️'    // snow
    if (code >= 700 && code < 800) return '🌫️'    // fog/mist
    if (code === 800) return '☀️'                  // clear
    if (code === 801) return '🌤️'                 // few clouds
    if (code === 802) return '⛅'                  // scattered clouds
    if (code >= 803) return '☁️'                  // overcast
    return '🌡️'
}

