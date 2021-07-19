import App from './js/App.js';
import WeatherDisplay from './js/WeatherDisplay.js';
import './css/style.scss';

console.log('im in...');
const display = new WeatherDisplay();
const app = new App(display);