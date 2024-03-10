// src/components/WeatherCard.js

import React from 'react';
import ForecastDay from './ForecastDay';
import './WeatherCard.css';

const WeatherCard = ({ city, weatherData }) => {
    if (!weatherData) return <div>Loading...</div>;

    const forecastDays = Object.keys(weatherData).slice(1, 4);
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            {forecastDays.map((day) => (
                <ForecastDay key={day} forecast={{ date: day, ...weatherData[day] }} />
            ))}
        </div>
    );
};
export default WeatherCard;