import React, { useState } from "react";
import "../styles/Report.css"; // Import CSS for styling

const Report = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    incidentType: "spam",
    description: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reporting! We will review your submission.");
    console.log("Form Data Submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      incidentType: "spam",
      description: "",
    });
  };

  return (
    <div className="report-container">
      {/* Report Header */}
      <div className="report-header">
        <h1>Report Fraud or False Positives</h1>
        <p>
          If you've encountered a fraud incident or believe a detection was a
          false positive, please let us know.
        </p>
      </div>

      {/* Report Form */}
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="incidentType">Incident Type</label>
          <select
            id="incidentType"
            name="incidentType"
            value={formData.incidentType}
            onChange={handleInputChange}
            required
          >
            <option value="spam">Spam Call</option>
            <option value="deepfake">Deepfake Fraud</option>
            <option value="transaction">Transaction Fraud</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default Report;
