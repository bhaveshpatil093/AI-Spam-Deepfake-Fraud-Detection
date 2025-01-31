import React from "react";
import { Link } from "react-router-dom"; // For navigation between pages
import "./styles/Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo or App Name */}
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          AI Fraud Detection
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/report" className="nav-link">
            Report Fraud
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
