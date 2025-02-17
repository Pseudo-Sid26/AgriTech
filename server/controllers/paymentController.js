// controllers/paymentController.js
const Razorpay = require("razorpay");
const Order = require("../models/Order");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,  // Set Razorpay Key ID from .env
  key_secret: process.env.RAZORPAY_KEY_SECRET,  // Set Razorpay Key Secret from .env
});

// Create Razorpay order
exports.createOrder = async (req, res) => {
  const { productId, price, sellerEmail } = req.body;  // You should also get the seller's Razorpay account from the product schema

  try {
    const options = {
      amount: price * 100, // Convert price to paise
      currency: "INR",
      receipt: `order_rcptid_${Math.floor(Math.random() * 10000)}`,
    };

    // Create the order with Razorpay
    const order = await razorpay.orders.create(options);

    // Store the order in your database for later reference (optional)
    const newOrder = new Order({
      productId,
      sellerEmail,
      orderId: order.id,
      status: "created", // Initial status when the order is created
    });

    await newOrder.save();

    res.status(200).json({ orderId: order.id, currency: options.currency, amount: options.amount });
  } catch (error) {
    console.error("Payment order creation failed", error);
    res.status(500).json({ message: "Payment order creation failed" });
  }
};

// Capture the payment (optional: if you need to handle payment success callback)
exports.capturePayment = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  // Here you can verify the payment signature using Razorpay's library (optional)
  try {
    const signatureIsValid = razorpay.validateWebhookSignature(
      req.body,
      razorpay_signature,
      process.env.RAZORPAY_WEBHOOK_SECRET
    );

    if (!signatureIsValid) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    // Mark the order as paid in your database
    const order = await Order.findOne({ orderId: razorpay_order_id });
    if (order) {
      order.status = "paid";  // Change the order status to paid
      await order.save();
    }

    res.status(200).json({ message: "Payment successfully captured" });
  } catch (error) {
    console.error("Error capturing payment", error);
    res.status(500).json({ message: "Error capturing payment" });
  }
};
