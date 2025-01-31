import React from "react";
import "../styles/Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} AI Spam Deepfake Fraud Detection. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
