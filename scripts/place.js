document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;

    // Static values for temperature and wind speed
    const temperature = 10; // in °C
    const windSpeed = 5; // in km/h

    // Calculate and display the wind chill
    function calculateWindChill(temp, wind) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById('wind-chill-value').textContent = `${windChill}°C`;
    } else {
        document.getElementById('wind-chill-value').textContent = 'N/A';
    }
});
