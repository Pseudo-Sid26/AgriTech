const express = require('express');
const { registerWorker, getWorkers } = require('../controllers/workerController');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');  // Store images in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Ensure unique file names
  }
});

const upload = multer({ storage: storage });

const router = express.Router();

// POST route to add a new worker, including photo upload
router.post('/addworkers', upload.single('photo'), registerWorker);

// GET route to fetch all workers
router.get('/', getWorkers);

module.exports = router;
