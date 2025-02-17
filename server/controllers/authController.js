// authController.js
const Farmer = require('../models/Farmer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Ensure JWT_SECRET is available
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("❌ ERROR: JWT_SECRET is missing in environment variables!");
  throw new Error("JWT_SECRET is missing in environment variables");
}

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });
};

// Farmer Registration
const registerFarmer = async (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log("📢 Received registration request:", req.body);

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const farmerExists = await Farmer.findOne({ email });
    if (farmerExists) {
      console.error("❌ Email already registered:", email);
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    // console.log('📢 Hashed password:', hashedPassword); // Log the hashed password

    // Create farmer
    const newFarmer = await Farmer.create({
      name,
      email,
      phone,
      password, // Store the hashed password
    });

    console.log("✅ Farmer registered successfully:", newFarmer.email);

    res.status(201).json({
      _id: newFarmer.id,
      name: newFarmer.name,
      email: newFarmer.email,
      token: generateToken(newFarmer.id),
    });
  } catch (error) {
    console.error('❌ Error during registration:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// Farmer Login
// const loginFarmer = async (req, res) => {
//   const { email, password } = req.body;

//   console.log('📢 Login attempt with email:', email); // Log the email for debugging

//   try {
//     // Check if the farmer exists
//     const farmer = await Farmer.findOne({ email });
//     if (!farmer) {
//       console.error("❌ No farmer found with email:", email);
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Compare the password with the hashed one
//     const isMatch = await bcrypt.compare(password, farmer.password);
//     console.log("📢 Password match result:", isMatch); // Log the comparison result

//     if (!isMatch) {
//       console.error("❌ Incorrect password for:", email);
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     console.log("✅ Farmer logged in successfully:", email);
//     res.json({
//       _id: farmer.id, 
//       name: farmer.name,
//       email: farmer.email,
//       token: generateToken(farmer.id),
//     });
//   } catch (error) {
//     console.error('❌ Error during login:', error);
//     res.status(500).json({ message: 'Server error: ' + error.message });
//   }
// };
const loginFarmer = async (req, res) => {
  const { email, password } = req.body;
  console.log('📢 Login attempt with email:', email);

  try {
    const farmer = await Farmer.findOne({ email });
    if (!farmer) {
      console.error("❌ No farmer found with email:", email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Log the stored password hash and the password being entered for debugging
    console.log('📢 Stored hashed password:', farmer.password);
    console.log('📢 Entered password:', password);

    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
      console.error("❌ Incorrect password for:", email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log("✅ Farmer logged in successfully:", email);
    res.json({
      _id: farmer.id,
      name: farmer.name,
      email: farmer.email,
      token: generateToken(farmer.id),
    });
  } catch (error) {
    console.error('❌ Error during login:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// Get Farmer Profile (Protected)
const getFarmerProfile = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.user.id);
    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    res.json({
      _id: farmer.id,
      name: farmer.name,
      email: farmer.email,
      phone: farmer.phone,
    });
  } catch (error) {
    console.error('❌ Error fetching profile:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// Export controllers properly
module.exports = {
  registerFarmer,
  loginFarmer,
  getFarmerProfile
};
