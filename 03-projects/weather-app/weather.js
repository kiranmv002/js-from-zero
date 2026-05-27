// Day 16 - Mini Project: Weather App
// uses fetch, async await, DOM manipulation, local storage
// API: openweathermap.org (free)


// --- config ---
// replace with your actual API key from openweathermap.org
const API_KEY = 'cb63725eef13895de41c498ba84ea923'
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


// --- format date and time ---
function formatDateTime() {
    const now = new Date()
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    const day = days[now.getDay()]
    const date = now.getDate()
    const month = months[now.getMonth()]
    const hours = now.getHours().toString().padStart(2, '0')
    const mins = now.getMinutes().toString().padStart(2, '0')

    return `${day}, ${date} ${month}\n${hours}:${mins}`
}


// --- show status message ---
function showStatus(msg, isError = false) {
    const status = document.getElementById('status')
    status.textContent = msg
    status.className = isError ? 'status error' : 'status'
    status.style.display = 'block'
    document.getElementById('weatherCard').classList.remove('show')
}


// --- hide status ---
function hideStatus() {
    document.getElementById('status').style.display = 'none'
}


// --- display weather data ---
function displayWeather(data) {
    hideStatus()

    const card = document.getElementById('weatherCard')

    document.getElementById('cityName').textContent = data.name
    document.getElementById('country').textContent = `${data.sys.country} · ${data.coord.lat.toFixed(1)}°N ${data.coord.lon.toFixed(1)}°E`
    document.getElementById('dateTime').textContent = formatDateTime()
    document.getElementById('weatherIcon').textContent = getWeatherIcon(data.weather[0].id)
    document.getElementById('temp').innerHTML = `${Math.round(data.main.temp)}<sup>°C</sup>`
    document.getElementById('description').textContent = data.weather[0].description
    document.getElementById('feelsLike').textContent = `feels like ${Math.round(data.main.feels_like)}°C`
    document.getElementById('humidity').innerHTML = `${data.main.humidity}<span class="stat-unit">%</span>`
    document.getElementById('wind').innerHTML = `${Math.round(data.wind.speed * 3.6)}<span class="stat-unit">km/h</span>`
    document.getElementById('visibility').innerHTML = `${(data.visibility / 1000).toFixed(1)}<span class="stat-unit">km</span>`
    document.getElementById('pressure').innerHTML = `${data.main.pressure}<span class="stat-unit">hPa</span>`
    document.getElementById('tempMin').innerHTML = `${Math.round(data.main.temp_min)}<span style="font-size:13px;">°C</span>`
    document.getElementById('tempMax').innerHTML = `${Math.round(data.main.temp_max)}<span style="font-size:13px;">°C</span>`

    card.classList.add('show')
}


// --- fetch weather ---
async function fetchWeather(city) {
    if (!city.trim()) {
        showStatus('please enter a city name', true)
        return
    }

    showStatus('loading...')

    try {
        const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        const response = await fetch(url)

        if (response.status === 401) {
            showStatus('invalid API key — please check your key', true)
            return
        }

        if (response.status === 404) {
            showStatus(`city "${city}" not found — try another name`, true)
            return
        }

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        const data = await response.json()
        displayWeather(data)
        saveToRecent(city.trim())

    } catch (error) {
        showStatus('something went wrong. check your connection.', true)
        console.error(error)
    }
}


// --- recent searches ---
function saveToRecent(city) {
    let recent = JSON.parse(localStorage.getItem('weatherRecent') || '[]')
    recent = recent.filter(c => c.toLowerCase() !== city.toLowerCase())
    recent.unshift(city)
    recent = recent.slice(0, 5)
    localStorage.setItem('weatherRecent', JSON.stringify(recent))
    renderRecent()
}

function renderRecent() {
    const recent = JSON.parse(localStorage.getItem('weatherRecent') || '[]')
    const section = document.getElementById('recentSection')
    const chips = document.getElementById('recentChips')

    if (recent.length === 0) {
        section.style.display = 'none'
        return
    }

    section.style.display = 'block'
    chips.innerHTML = recent.map(city =>
        `<div class="chip" onclick="searchCity('${city}')">${city}</div>`
    ).join('')
}

function searchCity(city) {
    document.getElementById('cityInput').value = city
    fetchWeather(city)
}


// --- event listeners ---
document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value
    fetchWeather(city)
})

document.getElementById('cityInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchWeather(document.getElementById('cityInput').value)
    }
})


// --- on load ---
renderRecent()

// load default city
fetchWeather('Hyderabad')
