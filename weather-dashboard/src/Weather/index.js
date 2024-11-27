import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const API_KEY = "4f06400efe6134a3436ea15b30a3dc5a";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Search Weather</button>
      </form>
      <br />
      <br />

      <div>
        <img src="/images/weather.jpg" className="image" alt="Weather" />
      </div>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Sunrise: {formatTime(weatherData.sys.sunrise)}</p>
          <p>Sunset: {formatTime(weatherData.sys.sunset)}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;