import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherCard from "./WeatherCard";
import fetchWeatherData from "./fetchWeatherData";
import "./HomePage.css"

function HomePage() {
    const navigate = useNavigate();
    const [cityInput, setCityInput] = useState('');
    const [weatherCards, setWeatherCards] = useState([]);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/');
        }

        const handleUnload = () => {
            localStorage.removeItem('isLoggedIn'); // Clear the isLoggedIn flag from local storage
        };

        window.addEventListener('unload', handleUnload);

        return () => {
            window.removeEventListener('unload', handleUnload);
        };
    }, [navigate]);
    const handleCityInputChange = (e) => {
        setCityInput(e.target.value);
    };

    const handleCitySubmit = async () => {
        if (cityInput.trim() !== '') {
            const data = await fetchWeatherData(cityInput);
            const newCard = { city: cityInput, data: data };
            setWeatherCards(prevCards => [...prevCards, newCard]);
            setCityInput('');
        }
    };

    return (
        <div className="homepage-container">
            <div>
                <input
                    id="city-input"
                    type="text"
                    value={cityInput}
                    onChange={handleCityInputChange}
                    placeholder="Zadej název města"
                />
                <button onClick={handleCitySubmit}>Přidej kartu s počasím</button>
            </div>
            {weatherCards.map((card, index) => (
                <WeatherCard
                    key={index}
                    city={card.city}
                    weatherData={card.data}

                />
            ))}
        </div>
    );
}

export default HomePage;
