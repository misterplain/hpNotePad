# HP Store Post-Sales Notepad

A productivity tool built for HP Store post-sales teams featuring a dynamic productivity tracker, dashboard data visualization, template management, and email reply generation.

## Overview

This is a full-stack MERN application that helps post-sales teams manage their daily workflow. The application includes:

- **Productivity Tracker**: Track your daily productivity with keyboard shortcuts (Shift + Up/Down arrows)
- **Dashboard Data**: Daily API-driven dashboard showing horoscopes, weather forecasts, news, jokes, and moon phases
- **Templates**: Pre-built templates for common customer service scenarios (DOA, returns, order status, etc.)
- **Dynamic Email Generator**: Create customized email responses on the fly with variable substitution

The deployed site can be found [HERE](https://hpnotepad.onrender.com/)

The backend code for this project can be found [HERE](https://github.com/misterplain/node-server/tree/main/hpnotepad)

## Tech Stack

- **Frontend**: React, Redux, Material-UI, CKEditor
- **Backend**: Node.js, Express, MongoDB
- **APIs**: Various third-party APIs for weather, horoscopes, news, and jokes
- **Deployment**: Render.com

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud database)

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd hpNotepad
   ```

2. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd ../client
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the `/server` directory (see `/server/.env.example`)
   - Add your MongoDB connection string, API keys, and other configuration

## Running the Project

### Development Mode

1. Start the backend server:

   ```bash
   cd server
   npm run server
   ```

2. In a separate terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```

The client will run on `http://localhost:3000` and proxy API requests to the server on port 5000.

### Production Build

1. Build the React client:

   ```bash
   cd client
   npm run build
   ```

2. Copy the build folder to the server directory:

   ```bash
   cp -r build ../server/
   ```

3. Start the server:
   ```bash
   cd ../server
   node server.js
   ```

The server will serve the static React build and API endpoints on port 5000.

## Deployment

This application is deployed on Render.com:

1. **Backend**: Deploy the `/server` directory as a Web Service

   - Build command: `npm install`
   - Start command: `node server.js`
   - Add environment variables in Render dashboard

2. **Frontend**: Build the React app and include it in the server's `/build` directory

   - The server serves static files from this directory

3. **Database**: Use MongoDB Atlas for the production database
   - Add the connection string to environment variables

## Key Files / Structure

### Client (`/client`)

- `/src/screens/` - Main application screens (Dashboard, Templates, etc.)
- `/src/components/` - Reusable React components
- `/src/actions/` - Redux action creators
- `/src/reducers/` - Redux reducers
- `/src/data/` - Template data and configuration

### Server (`/server`)

- `server.js` - Main Express application
- `/routes/` - API route handlers
- `/controllers/` - Business logic for routes
- `/models/` - MongoDB schemas
- `/api/` - Third-party API integration functions
- `/middleware/` - Custom middleware (logging, etc.)

## Features

### Productivity Tracker

- Keyboard shortcuts: Shift + Arrow Up (increment), Shift + Arrow Down (decrement), Shift + Backspace (reset)
- Visual counter in the toolbar

### Dashboard

- Displays daily data fetched from multiple APIs
- Data is cached in MongoDB to minimize API calls
- Automatic refresh for current day data

### Templates

- Multiple template categories for common customer service scenarios
- Dynamic variable replacement (customer name, order number, dates, etc.)
- Copy to clipboard functionality
- Rich text editor for customization

## Notes

- The productivity tracker count resets on page refresh
- Dashboard data is fetched once per day and cached in the database
- Templates support dynamic variables that can be set before generating responses
- The application uses HashRouter for client-side routing

## Feedback

Any and all feedback on this project is welcome! You may contact me [HERE](https://www.linkedin.com/in/patrick-o-brien-6743b044/).
