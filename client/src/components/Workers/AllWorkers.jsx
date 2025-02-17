import { useState, useEffect } from "react";
import '../../styles/allworkers.css'

const AllWorkers = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      const response = await fetch("http://localhost:5000/api/workers");
      const data = await response.json();
      setWorkers(data);
    };
    fetchWorkers();
  }, []);

  return (
    <div className="all-workers-container">
      <h2>All Workers</h2>
      <ul>
        {workers.map((worker) => (
          <li key={worker._id} className="worker-card">
            <img
              src={worker.photo ? `http://localhost:5000/${worker.photo}` : 'default-image.jpg'}
              alt={worker.name}
              className="worker-photo"
            />
            <div className="worker-info">
              <p>Name: {worker.name}</p>
              <p>Phone: {worker.phone}</p>
              <p>Village: {worker.village}</p>
              <p>Status: {worker.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllWorkers;
