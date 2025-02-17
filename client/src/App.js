

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./store/auth"; 
// import ProtectedRoute from "./components/ProtectedRoute";
// import Navbar from "./components/Navbar";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import Home from "./components/Home";
// import Workers from "./components/Workers/AllWorkers";
// import RentEquipment from "./components/Equipment/RentEquipment";
// import CropPrediction from "./components/CropPrediction/CropPrediction";
// import Marketplace from "./components/Marketplace/Marketplace";
// import WeatherForecast from "./components/Weather/Weather";
// import ChatRoom from "./components/Chat/ChatRoom";
// import AddWorker from "./components/Workers/AddWorker";
// import AllWorkers from "./components/Workers/AllWorkers";
// import Connect from "./components/Workers/Worker";

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/allworkers" element={<ProtectedRoute element={<AllWorkers />} />} />
//           <Route path="/equipment" element={<ProtectedRoute element={<RentEquipment />} />} />
//           <Route path="/crop-prediction" element={<ProtectedRoute element={<CropPrediction />} />} />
//           <Route path="/marketplace" element={<ProtectedRoute element={<Marketplace />} />} />
//           <Route path="/weather" element={<ProtectedRoute element={<WeatherForecast />} />} />
//           <Route path="/chat" element={<ProtectedRoute element={<ChatRoom />} />} />
//           <Route path="/addworkers" element={<ProtectedRoute element={<AddWorker />} />} />
//           <Route path="/connect" element={<ProtectedRoute element={<Connect />} />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./store/auth"; 
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import RentEquipment from "./components/Equipment/RentEquipment";
import CropPrediction from "./components/CropPrediction/CropPrediction";
import Marketplace from "./components/Marketplace/Marketplace";
import WeatherForecast from "./components/Weather/Weather";
import Chatbot from "./components/Chat/ChatRoom";
import AddWorker from "./components/Workers/AddWorker";
import AllWorkers from "./components/Workers/AllWorkers";
import Connect from "./components/Workers/Worker";
import { useState, useEffect } from "react";
import { translateText } from "./utils/translate"; // Import translation function

function App() {
  const [language, setLanguage] = useState("en");
  const [translatedTexts, setTranslatedTexts] = useState({});

  useEffect(() => {
    const translatePage = async () => {
      const texts = {
        home: "Home",
        connect: "Connect",
        equipment: "Rent Equipment",
        cropPrediction: "Crop Prediction",
        marketplace: "Marketplace",
        weather: "Weather",
        chat: "Chat",
        login: "Login",
        logout: "Logout",
        krishimitra: "KrishiMitra",
        marketplacedescription:"Welcome to MarketPlace",

      };

      const translated = {};
      for (let key in texts) {
        translated[key] = await translateText(texts[key], language);
      }
      setTranslatedTexts(translated);
    };

    translatePage();
  }, [language]);

  return (
    <Router>
      <AuthProvider>
        <Navbar setLanguage={setLanguage} translatedTexts={translatedTexts} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/allworkers" element={<ProtectedRoute element={<AllWorkers />} />} />
          <Route path="/equipment" element={<ProtectedRoute element={<RentEquipment />} />} />
          <Route path="/crop-prediction" element={<ProtectedRoute element={<CropPrediction />} />} />
          <Route path="/marketplace" element={<ProtectedRoute element={<Marketplace />} />} />
          <Route path="/weather" element={<ProtectedRoute element={<WeatherForecast />} />} />
          <Route path="/chat" element={<ProtectedRoute element={<Chatbot />} />} />
          <Route path="/addworkers" element={<ProtectedRoute element={<AddWorker />} />} />
          <Route path="/connect" element={<ProtectedRoute element={<Connect />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;


