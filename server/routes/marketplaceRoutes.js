const express = require('express');
const multer = require('multer');
const path = require('path');  // Importing the 'path' module
const { addProduct, getProducts } = require('../controllers/marketplaceController');

const router = express.Router();

// Set up storage engine for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');  // Store images in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Ensure unique file names by appending timestamp
  },
});

const upload = multer({ storage: storage });

// Add product route with file upload handling
router.post('/add', upload.single('photo'), addProduct);  // Handle single file upload
router.get('/', getProducts);

module.exports = router;
