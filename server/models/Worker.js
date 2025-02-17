const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  village: { type: String },
  status: { type: String, enum: ['Available', 'Busy', 'Inactive'], default: 'Available' },
  photo: { type: String }, // This will store the file path to the photo image
});

module.exports = mongoose.model('Worker', WorkerSchema);
