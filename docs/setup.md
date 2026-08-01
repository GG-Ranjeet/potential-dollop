# Project Setup Guide

Follow these instructions to get the project up and running on your local machine for development and testing.

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (Local installation or a MongoDB Atlas URI)

## Environment Variables

### Server
Create a `.env` file in the `server` directory and add the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Client
Create a `.env` file in the `client` directory (if you are using Create React App, prefix with `REACT_APP_`, for Vite use `VITE_`):
```env
VITE_API_URL=http://localhost:5000/api
```

## Installation
1. Clone the repository to your local machine.
2. Install all dependencies across the project by running this command in the root directory:
```bash
npm run install:all
```

## Running the Application
To start both the client and server concurrently in development mode, run:
```bash
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:3000` or `http://localhost:5173` (depending on the tool)
- Backend API: `http://localhost:5000`
