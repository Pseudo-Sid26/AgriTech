const Equipment = require("../models/Equipment");

// Add new equipment for rent
exports.addEquipment = async (req, res) => {
  const { name, type, owner, pricePerDay } = req.body;
  try {
    const newEquipment = new Equipment({ name, type, owner, pricePerDay });
    await newEquipment.save();
    res.status(201).json(newEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all available equipment
exports.getAvailableEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find({ available: true });
    res.status(200).json(equipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
