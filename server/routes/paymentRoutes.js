const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

// Initialize Razorpay instance with your credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Handle payment request
router.post('/payment', async (req, res) => {
  const { productId, price, sellerEmail } = req.body;

  try {
    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: price * 100,  // Price in paise (1 INR = 100 paise)
      currency: 'INR',
      receipt: `order_${Date.now()}`,
      notes: {
        productId,
        sellerEmail,
      },
    });

    res.status(200).json({
      id: order.id, // Send Razorpay order ID to frontend
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
