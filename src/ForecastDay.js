

import React from 'react';
import './ForecastDay.css';

const ForecastDay = ({ forecast }) => (
    <div className="forecast-day">
        <img src={forecast.icon} alt="Weather icon" className="weather-icon" />
        <div className="date">{forecast.date}</div>
        <div className="description">{forecast.description}</div>
        <div className="temperature">Min: {forecast.minTemp}°C / Max: {forecast.maxTemp}°C</div>
        <div className="humidity">Vlhkost: {forecast.avgHumidity}%</div>
        <div className="wind">Vítr: Až {forecast.maxWindSpeed} m/s</div>
        <div className="pressure">Tlak: {forecast.avgPressure} hPa</div>
    </div>
);
export default ForecastDay;