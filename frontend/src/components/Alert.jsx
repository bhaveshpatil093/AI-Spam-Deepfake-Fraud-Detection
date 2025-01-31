import React from "react";
import "../styles/Alert.css"; // Import CSS for styling

const Alert = ({ type, message, onClose }) => {
  // Determine the alert class based on the type
  const alertClass = `alert ${type}`;

  return (
    <div className={alertClass}>
      <span className="alert-message">{message}</span>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
