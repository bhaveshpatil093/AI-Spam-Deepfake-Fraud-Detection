// Base URL for your API (replace with your backend URL)
const BASE_URL = "https://your-backend-api.com";

/**
 * Helper function to handle HTTP responses
 * @param {Response} response - The response from the fetch request
 * @returns {Promise} - Resolves with the parsed JSON data or rejects with an error
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

/**
 * Make a GET request to the API
 * @param {string} endpoint - The API endpoint (e.g., "/alerts")
 * @returns {Promise} - Resolves with the data from the API
 */
export const get = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return handleResponse(response);
};

/**
 * Make a POST request to the API
 * @param {string} endpoint - The API endpoint (e.g., "/upload")
 * @param {Object} data - The data to send in the request body
 * @returns {Promise} - Resolves with the data from the API
 */
export const post = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

/**
 * Make a PUT request to the API
 * @param {string} endpoint - The API endpoint (e.g., "/update")
 * @param {Object} data - The data to send in the request body
 * @returns {Promise} - Resolves with the data from the API
 */
export const put = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

/**
 * Make a DELETE request to the API
 * @param {string} endpoint - The API endpoint (e.g., "/delete")
 * @returns {Promise} - Resolves with the data from the API
 */
export const remove = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "DELETE",
  });
  return handleResponse(response);
};

/**
 * Upload a file to the API
 * @param {string} endpoint - The API endpoint (e.g., "/upload-file")
 * @param {File} file - The file to upload
 * @returns {Promise} - Resolves with the data from the API
 */
export const uploadFile = async (endpoint, file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    body: formData,
  });
  return handleResponse(response);
};
