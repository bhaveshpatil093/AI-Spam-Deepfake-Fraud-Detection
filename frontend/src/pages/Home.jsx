import React from "react";
import "../styles/Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to AI Fraud Detection System</h1>
        <p>
          Protect your financial transactions from spam calls, deepfake fraud,
          and unauthorized VKYC manipulations with our cutting-edge AI-powered
          solution.
        </p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Spam Call Detection</h3>
            <p>
              Identify and block spam calls using advanced NLP and machine
              learning algorithms.
            </p>
          </div>
          <div className="feature-card">
            <h3>Deepfake Fraud Prevention</h3>
            <p>
              Detect and prevent deepfake-based identity fraud with state-of-the-art
              facial and voice analysis.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Alerts</h3>
            <p>
              Receive instant notifications about suspicious activities and take
              immediate action.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">1</span>
            <h3>Upload Data</h3>
            <p>
              Upload call recordings, VKYC videos, or transaction data for
              analysis.
            </p>
          </div>
          <div className="step-card">
            <span className="step-number">2</span>
            <h3>AI Analysis</h3>
            <p>
              Our AI system processes the data to detect spam, deepfakes, and
              fraudulent transactions.
            </p>
          </div>
          <div className="step-card">
            <span className="step-number">3</span>
            <h3>Get Results</h3>
            <p>
              View real-time results and alerts on your dashboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
