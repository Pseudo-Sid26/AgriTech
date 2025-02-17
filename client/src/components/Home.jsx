import React from "react";
import "../styles/home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="home-header">
        <h1>Welcome to Krishi-Mitra 🌿</h1>
        <p>Empowering Farmers with AI-Driven Solutions & Smart Agriculture</p>
      </header>

      {/* About Section */}
      <section className="home-about">
        <h2>🚜 About Krishi-Mitra</h2>
        <p>
          Krishi-Mitra is a next-generation platform designed to revolutionize farming with AI and technology. From hiring workers to renting equipment, predicting crops, and even connecting with sellers via video calls, we provide an all-in-one ecosystem for modern farmers.
        </p>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <h2>🌾 Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>👨‍🌾 Connect & Hire Workers</h3>
            <p>Find skilled laborers in your area, manage worker availability, and hire based on location and expertise.</p>
          </div>

          <div className="feature-card">
            <h3>📊 AI-Powered Crop Prediction</h3>
            <p>Use cutting-edge machine learning models to forecast the best crops for your soil and climate conditions.</p>
          </div>

          <div className="feature-card">
            <h3>🛒 Smart Marketplace with Video Calling</h3>
            <p>Buy and sell farm products online with integrated video calling to connect directly with sellers.</p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Chat Support</h3>
            <p>Get instant answers to farming-related queries with our AI-powered chatbot, available 24/7.</p>
          </div>

          <div className="feature-card">
            <h3>🚜 Rent Farming Equipment</h3>
            <p>Access affordable rental options for modern farming tools and machines, reducing costs for small-scale farmers.</p>
          </div>

          <div className="feature-card">
            <h3>🌦️ Weather Forecasting</h3>
            <p>Plan your farming activities with real-time weather updates and climate insights.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta">
        <h2>🌱 Ready to Transform Your Farming Experience?</h2>
        <p>Join Krishi-Mitra today and take your agricultural practices to the next level with AI and smart technology.</p>
        <button className="cta-button"><a href="/login">Get Started</a></button>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <p>Krishi-Mitra: Empowering Farmers, One Step at a Time.</p>
      </footer>
    </div>
  );
};

export default Home;
