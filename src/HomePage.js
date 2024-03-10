import React, { useState, useEffect } from 'react';
import WeatherCard from "./WeatherCard";
import fetchWeatherData from "./fetchWeatherData";
function HomePage(){
    const cities = ['Praha', 'Brno', 'Ostrava', 'Plzeň', 'Liberec'];
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        cities.forEach(async (city) => {
            const data = await fetchWeatherData(city);
            setWeatherData(prev => ({ ...prev, [city]: data }));
        });
    }, []);

    return (
        <div className="homepage-container">
            {cities.map((city) => (
                weatherData[city] && <WeatherCard key={city} city={city} weatherData={weatherData[city]} cityImage={`URL_FOR_${city.toUpperCase()}_IMAGE`} />
            ))}
        </div>
    );
}
export default HomePage;