import React, { useEffect, useState } from 'react';

const RentEquipment = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch('/api/equipment/available')
      .then(response => response.json())
      .then(data => setEquipment(data));
  }, []);

  return (
    <div className="equipment-list">
      {equipment.map(item => (
        <div key={item._id} className="equipment-card">
          <h3>{item.name}</h3>
          <p>Type: {item.type}</p>
          <p>Owner: {item.owner}</p>
          <p>Price per day: {item.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
};

export default RentEquipment;
