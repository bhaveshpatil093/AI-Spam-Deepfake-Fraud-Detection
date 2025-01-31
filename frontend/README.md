# AI Spam Deepfake Fraud Detection - Frontend

## Overview
This is the frontend for the AI-powered fraud detection system. It provides an intuitive user interface for monitoring fraud alerts, analyzing deepfake threats, and managing reports. Built with **React.js**, it integrates seamlessly with the backend API.

## Features
- **Upload & Analyze:** Users can upload call recordings and videos for deepfake/spam analysis.
- **Real-Time Alerts:** Displays fraud detection alerts using AI models.
- **User Dashboard:** View fraud reports and system insights.
- **Report Fraud:** Users can report false positives or suspicious activity.
- **Responsive Design:** Works across devices.

## Tech Stack
- **Frontend:** React.js, React Router
- **UI Components:** Tailwind CSS, ShadCN UI
- **Animations:** Framer Motion
- **State Management:** React Query (for API calls)
- **API Calls:** Axios
- **Build Tool:** Vite

## Installation & Setup
### Prerequisites
- Node.js (v18+ recommended)
- NPM or Yarn

### Steps to Run Locally

1. Clone the repository
  ```sh
  git clone https://github.com/bhaveshpatil093/AI-Spam-Deepfake-Fraud-Detection.git
  cd AI-Spam-Deepfake-Fraud-Detection/frontend

2. Install dependencies
  ```sh
  npm install  # or yarn install

3. Start the development server
  ```sh
  npm run dev  # or yarn dev

```
The app will be available at `http://localhost:5173/` (default Vite port).
```

## Folder Structure
```sh
frontend/
│── public/              # Static assets (favicon, images)
│── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # App pages (Home, Dashboard, Report)
│   ├── styles/          # CSS files
│   ├── api.js           # API integration file
│   ├── App.jsx          # Main React component
│   ├── index.js         # Entry point
│── package.json         # Dependencies and scripts
│── vite.config.js       # Vite configuration
│── README.md           # This file
```

## API Integration
Modify `src/api.js` to match the backend API URL.
```js
import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api.com';

export const fetchAlerts = async () => {
  const response = await axios.get(`${API_BASE_URL}/alerts`);
  return response.data;
};
```

## Deployment
To build for production:
```sh
npm run build
```
This generates a `dist/` folder for deployment.

## Contributing
```sh
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Added new feature'`)
4. Push to branch (`git push origin feature-name`)
5. Open a pull request
```

## License
MIT License. See `LICENSE` file for details.
