import React, { useState, useEffect } from "react";
import "../../styles/weather.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
          fetchForecast(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Please enable location access.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation not supported in your browser.");
      setLoading(false);
    }
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`);
      if (!response.ok) throw new Error("Weather API error");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error("Weather fetch error:", err);
      setError("Failed to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (lat, lon) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/weather/forecast?lat=${lat}&lon=${lon}`);
      if (!response.ok) throw new Error("Forecast API error");
      const data = await response.json();
      setForecast(data);
    } catch (err) {
      console.error("Forecast fetch error:", err);
      setError("Failed to fetch forecast.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      {loading && <p>Loading data...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>Weather in {weather.city}</h2>
          <p>🌡️ {weather.temperature}°C</p>
          <p>💧 {weather.humidity}%</p>
          <p>🌬️ {weather.windSpeed} m/s</p>
          <p>🌦️ {weather.description}</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast-section">
          <h3>5-Day Forecast</h3>
          <div className="forecast-cards">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-card">
                <p>{day.date}</p>
                <p>🌡️ {day.temp}°C</p>
                <p>🌦️ {day.description}</p>
                <p>💧 {day.humidity}%</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
