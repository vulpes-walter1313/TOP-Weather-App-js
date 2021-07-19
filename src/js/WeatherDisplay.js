class WeatherDisplay {
  constructor() {
    this.display = document.querySelector('.weather-results');
  }
  updateDisplay(err, weatherData) {
    this.display.innerHTML = '';
    if (err != null) {
      this.display.innerHTML = `<p class="display-err-msg">Error ${err.cod} - ${err.message}</p>`;
      return;
    }
    const unit = weatherData.unitType === 'imperial' ? 'F' : 'C';
    this.display.innerHTML = `
      <h2>Weather in ${weatherData.city}</h2>
      <div class="display-temps">
        <div class="display-description display-temp">
          <h3>${weatherData.weatherType}</h3>
          <p>${weatherData.weatherDesc}</p>
        </div>
        <div class="display-curr-temp display-temp">
          <p>Current Temp:</p>
          <p>${weatherData.currTemp} ${unit}</p>
        </div>
        <div class="display-max-temp display-temp">
          <p>Max Temp:</p>
          <p>${weatherData.maxTemp} ${unit}</p>
        </div>
        <div class="display-min-temp display-temp">
          <p>Min Temp:</p>
          <p>${weatherData.minTemp} ${unit}</p>
        </div>
        <div class="display-sunrise display-temp">
          <p>Sunrise:</p>
          <p>${weatherData.sunrise}</p>
        </div>
        <div class="display-sunset display-temp">
          <p>Sunset:</p>
          <p>${weatherData.sunset}</p>
        </div>
        <div class="display-humidity display-temp">
          <p>Humidity:</p>
          <p>${weatherData.humidity}%</p>
        </div>
      </div>
    `;
  }
}

export default WeatherDisplay;