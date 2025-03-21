

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
    } else {
        return "N/A";
    }
} 

const temperature = 6;
const windSpeed = 34;
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').textContent = windChill + "°C";
