async function city_weather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5c8c38aab4a7438187a50458242803&q=${city}&days=5`);
        const data = await response.json();

        weather(data);
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

const form = document.getElementById('search');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    city_weather(city);
});

function weather(data) {
    const current_info = data.current;
    const forecast = data.forecast.forecastday;

    let weather_forecast = `
    <div class="weather-info">
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Current time: ${current_info.last_updated}</p>
        <p>Current temperature: ${current_info.temp_f}</p>
        <p>Weather condition: ${current_info.condition.text}</p>
        <img src="http:${current_info.condition.icon}" alt="${current_info.condition.text}">
        <p>Humidity: ${current_info.humidity}%</p>
    </div>`;

    forecast.forEach(day => {
        weather_forecast += `
            <div class="weather-info">
                <h3>${new Date(day.date).toLocaleDateString("en-US", {weekday: "short"})}</h3>
                <p>Max temperature: ${day.day.maxtemp_f}</p>
                <p>Min temperature: ${day.day.mintemp_f}</p>
                <p>Weather condition: ${day.day.condition.text}</p>
                <img src="http:${day.day.condition.icon}" alt="${day.day.condition.text}">
            </div>
        `;
    });
    document.getElementById("weather-info").innerHTML = weather_forecast;
}