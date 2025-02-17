// // controllers/marketplaceController.js
// const Product = require('../models/Product');

// // Add a new product to the marketplace
// exports.addProduct = async (req, res) => {
//   const { name, price, description, seller, razorpayAccount } = req.body;
//   const photo = req.file ? req.file.path : null;  // Handle photo upload via multer

//   try {
//     const newProduct = new Product({
//       name,
//       price,
//       description,
//       seller,
//       razorpayAccount,
//       photo,
//     });

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // Get all products
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };


// const Product = require('../models/Product');

// // ✅ Add Product
// exports.addProduct = async (req, res) => {
//   const { name, price, description, seller, sellerContact, razorpayAccount } = req.body;
//   const photo = req.file ? req.file.path : null;  // Handle image upload

//   try {
//     const newProduct = new Product({
//       name,
//       price,
//       description,
//       seller,
//       sellerContact,
//       razorpayAccount,
//       photo,
//     });

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // ✅ Get All Products
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // ✅ Update Seller's Socket ID for Video Call
// exports.updateSellerSocket = async (req, res) => {
//   const { sellerContact, socketId } = req.body;

//   try {
//     const product = await Product.findOneAndUpdate(
//       { sellerContact },
//       { sellerSocketId: socketId },
//       { new: true }
//     );

//     if (!product) {
//       return res.status(404).json({ message: 'Seller not found' });
//     }

//     res.status(200).json({ message: 'Socket ID updated', product });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };


const Product = require('../models/Product');

// ✅ Add Product
exports.addProduct = async (req, res) => {
  const { name, price, description, seller, phone, razorpayAccount } = req.body;
  const photo = req.file ? req.file.path : null;  // Handle image upload

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      seller,
      phone,  // Updated field for seller's phone number
      razorpayAccount,
      photo,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update Seller's Socket ID for Video Call
exports.updateSellerSocket = async (req, res) => {
  const { phone, socketId } = req.body;

  try {
    const product = await Product.findOneAndUpdate(
      { phone },  // Updated to use 'phone' instead of 'sellerContact'
      { sellerSocketId: socketId },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    res.status(200).json({ message: 'Socket ID updated', product });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
