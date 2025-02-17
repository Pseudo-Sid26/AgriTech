const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: "Latitude and Longitude required" });

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing API key" });

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const { data } = await axios.get(url);

    res.json({
      city: data.name,
      temperature: data.main.temp,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    });

  } catch (error) {
    console.error("Weather API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching weather data" });
  }
};

const getForecast = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: "Latitude and Longitude required" });

    const apiKey = process.env.OPENWEATHER_API_KEY;  // Fixed API key reference
    if (!apiKey) return res.status(500).json({ error: "Missing API key" });

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const { data } = await axios.get(url);

    const forecast = data.list
      .filter((_, index) => index % 8 === 0) // Extract daily data
      .map((day) => ({
        date: new Date(day.dt * 1000).toLocaleDateString(),
        temp: day.main.temp,
        humidity: day.main.humidity,
        description: day.weather[0].description,
      }));

    res.json(forecast);

  } catch (error) {
    console.error("Forecast API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching forecast data" });
  }
};

module.exports = { getWeather, getForecast };
