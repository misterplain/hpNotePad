# HP Notepad - Backend Server

This is the backend server for the HP Store Post-Sales Notepad application. It provides API endpoints for dashboard data, contact forms, and scheduled data fetching from third-party APIs.

## Overview

The server is built with Node.js and Express, featuring:

- RESTful API endpoints for dashboard data and contact forms
- MongoDB integration for data persistence
- Third-party API integrations (weather, horoscopes, news, jokes, moon phases)
- Automated daily data fetching with cron jobs
- Request logging middleware
- CORS configuration for multiple frontend origins

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js (with Google, Facebook, GitHub strategies)
- **Scheduling**: node-cron, node-schedule
- **Email**: Nodemailer
- **Security**: CORS, express-rate-limit, bcrypt

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- API keys for third-party services (RapidAPI)

### Setup

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:
   - `MONGO_URI`: Your MongoDB connection string
   - `RAPID_API_KEY`: Your RapidAPI key for external data sources
   - `PORT`: Server port (default: 5000)
   - Email and OAuth credentials as needed

## Running the Server

### Development Mode (with nodemon)

```bash
npm run server
```

This will start the server with auto-restart on file changes.

### Production Mode

```bash
node server.js
```

The server will listen on the port specified in your `.env` file (default: 5000).

## API Endpoints

### Dashboard Data

- `GET /data/:date` - Fetch dashboard data for a specific date (format: YYYY-MM-DD)
- `POST /data` - Trigger manual data fetch and save to database
- `DELETE /data` - Delete old data (admin function)

### Contact

- `POST /contact?source=<source>` - Send contact form email
  - Body: `{ name, email, message, phoneNum }`

### Scheduled Tasks

- `POST /nodeCron` - Manually trigger the cron job for data fetching

## Third-Party API Integrations

The server fetches data from the following sources:

1. **Weather Forecast**: forecast9.p.rapidapi.com (10-day forecast for Barcelona)
2. **Horoscopes**: horoscope-app-api.vercel.app (daily horoscopes for all zodiac signs)
3. **News**: cnbc.p.rapidapi.com (trending business news)
4. **Jokes**: dad-jokes.p.rapidapi.com (daily dad joke)
5. **Moon Phase**: moon-phase.p.rapidapi.com (current moon phase data)

All API integrations are located in the `/api` directory.

## Project Structure

```
server/
├── api/              # Third-party API integration functions
├── config/           # Database connection and configuration
├── controllers/      # Business logic for routes
├── logs/             # Request and error logs
├── middleware/       # Custom middleware (logger, etc.)
├── models/           # Mongoose schemas and models
├── routes/           # Express route definitions
├── utils/            # Utility functions (email, etc.)
├── .env              # Environment variables (not in git)
├── .env.example      # Example environment variables
├── server.js         # Main application entry point
└── package.json      # Dependencies and scripts
```

## Deployment

This server is designed to be deployed on platforms like Render.com, Heroku, or similar PaaS providers.

### Render.com Deployment

1. Connect your GitHub repository
2. Create a new Web Service
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables in the Render dashboard
6. Deploy!

### Environment Variables (Production)

Make sure to set all required environment variables in your deployment platform:

- `MONGO_URI`
- `RAPID_API_KEY`
- `SESSION_SECRET`
- Email configuration (if using contact forms)

## CORS Configuration

The server is configured to accept requests from:

- `http://localhost:3000` (local development)
- `http://localhost:5000` (local development)
- `https://hpnotepad.onrender.com` (production frontend)
- Additional origins can be added to the whitelist in `server.js`

## Scheduled Tasks

The server uses node-cron to schedule daily data fetching. The cron job runs automatically to fetch fresh dashboard data each day.

## Logging

Request logging is handled by custom middleware in `/middleware/logger.js`. Logs are stored in the `/logs` directory:

- `reqLog.log` - Request logs
- `mongoErrLog.log` - MongoDB error logs

## Notes

- The server serves the React build from the `/build` directory in production
- Session management uses express-session with configurable secrets
- Rate limiting is available via express-rate-limit (can be configured per route)

## Related Projects

The frontend code for this project can be found in the `/client` directory of the main repository.

Deployed application: [https://hpnotepad.onrender.com](https://hpnotepad.onrender.com)
