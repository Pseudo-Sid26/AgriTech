import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/worker.css'

const AddWorker = () => {
  const [worker, setWorker] = useState({
    name: "",
    phone: "",
    village: "",
    status: "Available", // Default status
    photo: null,  // Initially no photo
  });
  const [error, setError] = useState(null); // For storing error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorker((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setWorker((prev) => ({
      ...prev,
      photo: e.target.files[0],  // Store the selected file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!worker.name || !worker.phone || !worker.village || !worker.status) {
      setError("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", worker.name);
    formData.append("phone", worker.phone);
    formData.append("village", worker.village);
    formData.append("status", worker.status);
    if (worker.photo) formData.append("photo", worker.photo); // Attach the photo file

    try {
      const response = await fetch("http://localhost:5000/api/workers/addworkers", {
        method: "POST",
        body: formData,  // Send formData with the image
      });

      if (response.ok) {
        navigate("/allworkers");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to add worker");
      }
    } catch (error) {
      setError("An error occurred while adding the worker");
    }
  };

  return (
    <div className="add-worker-container">
      <h2>Add Worker</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={worker.name}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={worker.phone}
          required
        />
        <input
          type="text"
          name="village"
          placeholder="Village"
          onChange={handleChange}
          value={worker.village}
          required
        />
        <select
          name="status"
          onChange={handleChange}
          value={worker.status}
          required
        >
          <option value="Available">Available</option>
          <option value="Busy">Busy</option>
          <option value="Inactive">Inactive</option>
        </select>
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
        />
        <button type="submit">Add Worker</button>
      </form>
    </div>
  );
};

export default AddWorker;
