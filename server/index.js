// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const http = require("http");
// const connectDB = require("./config/db");
// const { Server } = require("socket.io");
// const path = require("path");
// const multer = require("multer");
// const Razorpay = require("razorpay");
// const paymentRoutes = require("./routes/paymentRoutes");

// const app = express();
// const server = http.createServer(app);
// connectDB();

// // ✅ Set up storage engine for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads/"); // ✅ Store images in the "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // ✅ Unique file names
//   },
// });

// const upload = multer({ storage });

// // ✅ Allow form data parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Serve static files (images) from the "uploads" directory
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ✅ Enable CORS for frontend
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3002","http://localhost:3001"], // Allow multiple frontend URLs
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// // ✅ Import Routes
// const authRoutes = require("./routes/authRoutes");
// const workerRoutes = require("./routes/workerRoutes");
// const equipmentRoutes = require("./routes/equipmentRoutes");
// const weatherRoutes = require("./routes/weatherRoutes");
// const marketplaceRoutes = require("./routes/marketplaceRoutes");

// // ✅ Use Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/workers", workerRoutes);
// app.use("/api/equipment", equipmentRoutes);
// app.use("/api/weather", weatherRoutes);
// app.use("/api/marketplace", marketplaceRoutes);
// app.use('/api/payment', paymentRoutes); 

// // ✅ Socket.io setup
// const io = new Server(server, {
//   cors: { origin: "*" },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("send_message", (data) => {
//     io.emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected");
//   });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const http = require("http");
// const path = require("path");
// const multer = require("multer");
// const Razorpay = require("razorpay");
// const { Server } = require("socket.io");
// const connectDB = require("./config/db");

// const paymentRoutes = require("./routes/paymentRoutes");
// const authRoutes = require("./routes/authRoutes");
// const workerRoutes = require("./routes/workerRoutes");
// const equipmentRoutes = require("./routes/equipmentRoutes");
// const weatherRoutes = require("./routes/weatherRoutes");
// const marketplaceRoutes = require("./routes/marketplaceRoutes");
// const videoCallRoutes = require("./routes/videoCallRoutes");



// const app = express();
// const server = http.createServer(app);
// connectDB();

// // ✅ Set up storage engine for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads/"); // ✅ Store images in the "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // ✅ Unique file names
//   },
// });
// const upload = multer({ storage });

// // ✅ Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ✅ Enable CORS for frontend
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"], // Allow frontend ports
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// // ✅ Use Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/workers", workerRoutes);
// app.use("/api/equipment", equipmentRoutes);
// app.use("/api", weatherRoutes);
// app.use("/api/marketplace", marketplaceRoutes);
// app.use("/api/payment", paymentRoutes);
// app.use("/api/video-call", videoCallRoutes);

// // ✅ Socket.io setup
// const io = new Server(server, {
//   cors: { origin: ["http://localhost:3000", "http://localhost:3001"] },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("send_message", (data) => {
//     io.emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected");
//   });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const http = require("http");
// const path = require("path");
// const multer = require("multer");
// const { Server } = require("socket.io");
// const connectDB = require("./config/db");

// // Import Routes
// const paymentRoutes = require("./routes/paymentRoutes");
// const authRoutes = require("./routes/authRoutes");
// const workerRoutes = require("./routes/workerRoutes");
// const equipmentRoutes = require("./routes/equipmentRoutes");
// const weatherRoutes = require("./routes/weatherRoutes");
// const marketplaceRoutes = require("./routes/marketplaceRoutes");
// const videoCallRoutes = require("./routes/videoCallRoutes");

// const app = express();
// const server = http.createServer(app);
// connectDB();

// // ✅ Set up storage engine for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads/"); // Store images in the "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique file names
//   },
// });
// const upload = multer({ storage });

// // ✅ Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

// // ✅ Enable CORS
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"], // Allow frontend ports
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// // ✅ Image Upload Route
// app.post("/api/upload", upload.single("photo"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   // Convert Windows-style "\" to web-friendly "/"
//   const imagePath = req.file.path.replace(/\\/g, "/");

//   res.json({
//     message: "Upload successful",
//     imagePath: `http://localhost:5000/${imagePath}`, // Full URL for frontend use
//   });
// });

// // ✅ Use Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/workers", workerRoutes);
// app.use("/api/equipment", equipmentRoutes);
// app.use("/api/weather", weatherRoutes);
// app.use("/api/marketplace", marketplaceRoutes);
// app.use("/api/payment", paymentRoutes);
// app.use("/api/video-call", videoCallRoutes);

// // ✅ Socket.io Setup
// const io = new Server(server, {
//   cors: { origin: ["http://localhost:3000", "http://localhost:3001"] },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("send_message", (data) => {
//     io.emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected");
//   });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");
const multer = require("multer");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

// Import Routes
const paymentRoutes = require("./routes/paymentRoutes");
const authRoutes = require("./routes/authRoutes");
const workerRoutes = require("./routes/workerRoutes");
const equipmentRoutes = require("./routes/equipmentRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const marketplaceRoutes = require("./routes/marketplaceRoutes");
const videoCallRoutes = require("./routes/videoCallRoutes");

const app = express();
const server = http.createServer(app);
connectDB();

// ✅ Set up storage engine for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads")); // Store images in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique file names
  },
});
const upload = multer({ storage });

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

// ✅ Enable CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Allow frontend ports
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// ✅ Image Upload Route
app.post("/api/upload", upload.single("photo"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Convert Windows-style "\" to web-friendly "/"
  const imagePath = req.file.path.replace(/\\/g, "/").replace(__dirname, "");

  res.json({
    message: "Upload successful",
    imagePath: `http://localhost:5000/uploads/${path.basename(imagePath)}`, // Proper URL format
  });
});

// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/marketplace", marketplaceRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/video-call", videoCallRoutes);

// ✅ Socket.io Setup
const io = new Server(server, {
  cors: { origin: ["http://localhost:3000", "http://localhost:3001"] },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

