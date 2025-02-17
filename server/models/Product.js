// // models/Product.js
// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String },
//   seller: { type: String, required: true },
//   photo: { type: String },
//   razorpayAccount: { type: String, required: true },  // Seller's Razorpay account ID
// });

// module.exports = mongoose.model('Product', ProductSchema);



const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  seller: { type: String, required: true },
  phone: { type: String, required: true },  // New field for seller phone number
  photo: { type: String },
  razorpayAccount: { type: String, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);

