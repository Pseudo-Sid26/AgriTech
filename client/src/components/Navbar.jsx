// // import { Link, useNavigate } from "react-router-dom";
// // import '../styles/navbar.css';

// // const Navbar = () => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="navbar">
// //       <ul>
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/connect">Connect</Link></li>
// //         <li><Link to="/equipment">Rent Equipment</Link></li>
// //         <li><Link to="/crop-prediction">Crop Prediction</Link></li>
// //         <li><Link to="/marketplace">Marketplace</Link></li>
// //         <li><Link to="/weather">Weather</Link></li>
// //         <li><Link to="/chat">Chat</Link></li>
       
// //         <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { Link } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import "../styles/navbar.css";

// const Navbar = () => {
//   const { user, logout, isAuthenticated } = useAuth();

//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         {isAuthenticated ? (
//           <>
//             <li><Link to="/connect">Connect</Link></li>
//             <li><Link to="/equipment">Rent Equipment</Link></li>
//             <li><Link to="/crop-prediction">Crop Prediction</Link></li>
//             <li><Link to="/marketplace">Marketplace</Link></li>
//             <li><Link to="/weather">Weather</Link></li>
//             <li><Link to="/chat">Chat</Link></li>
//             <li><button onClick={logout} className="logout-btn">Logout</button></li>
//           </>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import "../styles/navbar.css";

// const Navbar = ({ setLanguage, translatedTexts }) => {
//   const { user, logout, isAuthenticated } = useAuth();

//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/">{translatedTexts.home || "Home"}</Link></li>
//         {isAuthenticated ? (
//           <>
//             <li><Link to="/connect">{translatedTexts.connect || "Connect"}</Link></li>
//             <li><Link to="/equipment">{translatedTexts.equipment || "Rent Equipment"}</Link></li>
//             <li><Link to="/crop-prediction">{translatedTexts.cropPrediction || "Crop Prediction"}</Link></li>
//             <li><Link to="/marketplace">{translatedTexts.marketplace || "Marketplace"}</Link></li>
//             <li><Link to="/weather">{translatedTexts.weather || "Weather"}</Link></li>
//             <li><Link to="/chat">{translatedTexts.chat || "Chat"}</Link></li>
//             <li><button onClick={logout} className="logout-btn">{translatedTexts.logout || "Logout"}</button></li>
//           </>
//         ) : (
//           <li><Link to="/login">{translatedTexts.login || "Login"}</Link></li>
//         )}
//       </ul>
//       {/* Language Selection Dropdown */}
//       <select onChange={(e) => setLanguage(e.target.value)}>
//         <option value="en">English</option>
//         <option value="mr">मराठी (Marathi)</option>
//         <option value="hi">हिंदी (Hindi)</option>
//       </select>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = ({ setLanguage, translatedTexts }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">{translatedTexts.krishimitra || "Krushi-Mitra"}</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
        <li><Link to="/">{translatedTexts.home || "Home"}</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/connect">{translatedTexts.connect || "Connect"}</Link></li>
            <li><Link to="/equipment">{translatedTexts.equipment || "Rent Equipment"}</Link></li>
            <li><Link to="/crop-prediction">{translatedTexts.cropPrediction || "Crop Prediction"}</Link></li>
            <li><Link to="/marketplace">{translatedTexts.marketplace || "Marketplace"}</Link></li>
            <li><Link to="/weather">{translatedTexts.weather || "Weather"}</Link></li>
            <li><Link to="/chat">{translatedTexts.chat || "Chat"}</Link></li>
          </>
        ) : (
          <li><Link to="/login">{translatedTexts.login || "Login"}</Link></li>
        )}
      </ul>

      {/* Right-side Buttons (Logout + Language Selector) */}
      <div className="navbar-actions">
        {isAuthenticated && (
          <button onClick={logout} className="logout-btn">
            {translatedTexts.logout || "Logout"}
          </button>
        )}
        <select className="language-selector" onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="mr">मराठी (Marathi)</option>
          <option value="hi">हिंदी (Hindi)</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;

