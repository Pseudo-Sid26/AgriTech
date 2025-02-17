const Worker = require('../models/Worker');

// Register a worker
const registerWorker = async (req, res) => {
  const { name, phone, village, status } = req.body;
  const photo = req.file ? req.file.path : '';  // Get the photo file path from multer

  try {
    const newWorker = new Worker({
      name,
      phone,
      village,
      status,
      photo,  // Store the photo file path
    });
    await newWorker.save();
    res.status(201).json(newWorker);  // Send the created worker as response
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// List all workers
const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);  // Send the list of workers as response
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports={registerWorker,getWorkers};
