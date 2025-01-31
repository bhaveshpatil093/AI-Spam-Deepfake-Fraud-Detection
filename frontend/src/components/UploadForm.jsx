import React, { useState } from "react";
import "../styles/UploadForm.css"; // Import CSS for styling

const UploadForm = () => {
  // State for file and upload status
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
      setSuccess("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);
    setError("");
    setSuccess("");

    // Simulate file upload (replace with actual API call)
    setTimeout(() => {
      setUploading(false);
      setSuccess("File uploaded successfully!");
      setFile(null); // Clear the file input
    }, 2000);
  };

  return (
    <div className="upload-form-container">
      <h2>Upload Data for Analysis</h2>
      <form onSubmit={handleSubmit}>
        {/* File Input */}
        <div className="form-group">
          <label htmlFor="file">Choose a file</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".mp3, .wav, .mp4, .csv, .txt" // Allowed file types
            required
          />
        </div>

        {/* Upload Button */}
        <button type="submit" className="upload-button" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {/* Feedback Messages */}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default UploadForm;
