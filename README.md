# 🌾 AgriTech Community Platform

A comprehensive agricultural technology platform designed to empower farmers with modern tools and community support. This full-stack application combines React frontend, Node.js backend, and machine learning capabilities to provide a complete agricultural ecosystem.

## 🚀 Features

### 🌱 **Core Agricultural Features**
- **Crop Prediction System**: ML-powered crop recommendation based on soil conditions and environmental factors
- **Weather Integration**: Real-time weather data and forecasts for farming decisions
- **Equipment Management**: Track and manage agricultural equipment and tools

### 🛒 **Marketplace**
- **Product Listing**: Farmers can list and sell their products
- **Secure Payments**: Integrated payment system using Razorpay
- **Product Discovery**: Browse and search agricultural products

### 👥 **Community Features**
- **Worker Hiring**: Connect farmers with agricultural workers
- **Video Calling**: Real-time video communication using Twilio
- **AI Chatbot**: Intelligent farming assistant powered by OpenAI
- **User Authentication**: Secure login and registration system

### 📱 **Technical Features**
- **Real-time Communication**: Socket.io for instant messaging
- **File Upload**: Image upload for products and profiles
- **Responsive Design**: Mobile-friendly interface
- **RESTful API**: Well-structured backend API

## 🛠️ Technology Stack

### **Frontend**
- **React 19** - Modern React with latest features
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Socket.io Client** - Real-time communication
- **Simple Peer** - WebRTC peer-to-peer connections

### **Backend**
- **Node.js & Express** - Server framework
- **MongoDB & Mongoose** - Database and ODM
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Razorpay** - Payment gateway integration
- **Twilio** - Video calling and SMS services
- **Nodemailer** - Email services

### **Machine Learning**
- **Python Flask** - ML model serving
- **Scikit-learn** - Machine learning algorithms
- **NumPy** - Numerical computations
- **Joblib** - Model serialization

## 📁 Project Structure

```
AgriTech/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/               # React components and logic
│   │   ├── components/    # Reusable components
│   │   ├── store/         # State management
│   │   ├── styles/        # CSS styles
│   │   └── utils/         # Utility functions
│   └── package.json       # Frontend dependencies
│
├── server/                # Node.js backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── uploads/          # File uploads storage
│   └── package.json      # Backend dependencies
│
├── ml_model/             # Machine Learning model
│   ├── app.py           # Flask application
│   └── train_model.py   # Model training script
│
└── .gitignore           # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (local or Atlas)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pseudo-Sid26/AgriTech.git
   cd AgriTech
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Setup Python Environment**
   ```bash
   cd ../ml_model
   pip install flask flask-cors joblib numpy scikit-learn
   ```

### Environment Configuration

Create `.env` files in both `client` and `server` directories:

**Server `.env`:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agritech
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

**Client `.env`:**
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ML_API_URL=http://localhost:5000
```

### Running the Application

1. **Start MongoDB** (if running locally)

2. **Start the Backend Server**
   ```bash
   cd server
   npm start
   ```

3. **Start the ML Model Server**
   ```bash
   cd ml_model
   python app.py
   ```

4. **Start the Frontend**
   ```bash
   cd client
   npm start
   ```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **ML Model API**: http://localhost:5000 (Flask)

## 📖 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Marketplace Endpoints
- `GET /api/marketplace/products` - Get all products
- `POST /api/marketplace/products` - Add new product
- `GET /api/marketplace/products/:id` - Get product details

### ML Prediction Endpoint
- `POST /predict` - Predict suitable crop based on soil/weather conditions

### Other Features
- Weather API integration
- Equipment management
- Worker hiring system
- Video calling capabilities
- Real-time chat system

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for AI-powered chatbot capabilities
- **Twilio** for video calling services
- **Razorpay** for payment processing
- **MongoDB Atlas** for cloud database services
- **React Community** for excellent documentation and support

## 📞 Support

For support, email support@agritech.com or join our Slack channel.

## 🔮 Future Enhancements

- [ ] Mobile app development (React Native)
- [ ] Advanced crop disease detection using computer vision
- [ ] IoT sensor integration for real-time field monitoring
- [ ] Blockchain integration for supply chain transparency
- [ ] Multi-language support
- [ ] Advanced analytics and reporting dashboard
- [ ] Integration with government agricultural schemes

---

**Made with ❤️ for the farming community**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/Node.js-v16+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v19-blue.svg)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-v3.8+-blue.svg)](https://python.org/)
