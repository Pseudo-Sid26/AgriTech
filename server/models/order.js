// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  buyerName: {
    type: String,
    required: true,
  },
  buyerEmail: {
    type: String,
    required: true,
  },
  buyerContact: {
    type: String,
    required: true,
  },
  sellerEmail: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true, // Razorpay Order ID
  },
  paymentId: {
    type: String,  // Razorpay Payment ID after success
  },
  paymentStatus: {
    type: String,
    enum: ['created', 'paid', 'failed'],
    default: 'created',
  },
  amount: {
    type: Number,
    required: true,  // Amount of the product purchased
  },
  currency: {
    type: String,
    default: 'INR',
  },
  paymentMethod: {
    type: String,
    enum: ['razorpay', 'other'],
    default: 'razorpay',
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
