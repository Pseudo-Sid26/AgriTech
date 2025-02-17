import { useState } from "react";
import '../../styles/crop.css'

const CropPrediction = () => {
  const [formData, setFormData] = useState({
    N: "", P: "", K: "", temperature: "", humidity: "", ph: "", rainfall: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setPrediction(data.predicted_crop || "Prediction failed");
  };

  return (
    <div className="crop-container">
      <h2>Crop Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="N" placeholder="Nitrogen" onChange={handleChange} required />
        <input type="number" name="P" placeholder="Phosphorus" onChange={handleChange} required />
        <input type="number" name="K" placeholder="Potassium" onChange={handleChange} required />
        <input type="number" name="temperature" placeholder="Temperature" onChange={handleChange} required />
        <input type="number" name="humidity" placeholder="Humidity" onChange={handleChange} required />
        <input type="number" name="ph" placeholder="pH Level" onChange={handleChange} required />
        <input type="number" name="rainfall" placeholder="Rainfall" onChange={handleChange} required />
        <button type="submit">Predict</button>
      </form>
      {prediction && <h3>Recommended Crop: {prediction}</h3>}
    </div>
  );
};

export default CropPrediction;
