

const fetchWeatherData = async (city) => {
    const apiKey = '3bed3a0f8de23261bb2b5629d0bc10d6';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}&lang=cz`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Přenos dat selhal');
        const data = await response.json();

        const forecasts = {};
        data.list.forEach(item => {
            const date = new Date(item.dt_txt).toISOString().split('T')[0];
            if (!forecasts[date]) {
                forecasts[date] = {
                    temp: [],
                    humidity: [],
                    windSpeed: [],
                    description: item.weather[0].description,
                    pressure: [],
                    icon: item.weather[0].icon,
                };
            }
            forecasts[date].temp.push(item.main.temp);
            forecasts[date].humidity.push(item.main.humidity);
            forecasts[date].windSpeed.push(item.wind.speed);
            forecasts[date].pressure.push(item.main.pressure);
        });

        Object.keys(forecasts).forEach(date => {
            const dayData = forecasts[date];
            forecasts[date] = {
                minTemp: Math.min(...dayData.temp),
                maxTemp: Math.max(...dayData.temp),
                avgHumidity: Math.round(dayData.humidity.reduce((a, b) => a + b, 0) / dayData.humidity.length),
                maxWindSpeed: Math.max(...dayData.windSpeed),
                description: dayData.description,
                avgPressure: Math.round(dayData.pressure.reduce((a, b) => a + b, 0) / dayData.pressure.length),
                icon: `http://openweathermap.org/img/wn/${dayData.icon}@2x.png`,
            };
        });

        return forecasts;
    } catch (error) {
        console.error("Přenos dat selhal: ", error);
        return null;
    }
};
export default fetchWeatherData;
