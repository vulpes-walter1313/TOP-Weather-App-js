import FormatTime from './formatTime.js';

class App {
  constructor(display) {
    this.weatherDisplay = display;
    this.apiKey = '8d7d2aa8646a7f552882e5e61d8df7e4';
    this.searchForm = document.querySelector('.search-form-wrapper form');
    this.searchHandler = this.searchHandler.bind(this);
    this.searchForm.addEventListener('submit', this.searchHandler);
  }
  async getWeather(location, units='metric') {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=${units}`, {mode: 'cors'});
    const data = await response.json();
    if (data.main) {
      console.log('Raw Data: ', data);
      console.log(this.processWeatherData(data, units, location));
      this.weatherDisplay.updateDisplay(null, this.processWeatherData(data, units, location));
    } else {
      console.log('Something is wrong in the data', data);
      this.weatherDisplay.updateDisplay(data)
    }
  }
  processWeatherData(data, units, cityName) {
    const unitType = units
    const city = cityName;
    const currTemp = data.main.temp;
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;
    const humidity = data.main.humidity;
    const weatherType = data.weather[0].main;
    const weatherDesc = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const windGust = data.wind.gust;
    const sunrise = FormatTime.format(data.sys.sunrise);
    const sunset = FormatTime.format(data.sys.sunset);
    return { unitType, currTemp, maxTemp, minTemp, humidity,
            weatherType, weatherDesc, windSpeed, windGust,
            sunrise, sunset, city };
  }
  searchHandler(e) {
    e.preventDefault();
    const formData = new FormData(this.searchForm);
    // for (let p of formData.values()){
    //   console.log(p);
    // }
    console.log(formData.get('city'), formData.get('temp-unit'));
    this.getWeather(formData.get('city'), formData.get('temp-unit'));
  }
}

export default App;