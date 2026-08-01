# Architecture & Project Structure

This document provides an overview of the system architecture and the role of each component in this MERN stack application.

## Overview
This project is structured as a monorepo containing two main parts:
1. **Client**: The frontend application built with React.
2. **Server**: The backend REST API built with Node.js and Express.

## Tech Stack
- **Database**: MongoDB (Mongoose for ODM)
- **Backend**: Node.js, Express.js
- **Frontend**: React (Vite/Create React App)
- **State Management**: (e.g., Redux Toolkit, Context API)
- **Styling**: (e.g., Tailwind CSS, Styled Components)

## Directory Structure

```text
├── client/                 # Frontend React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page level components
│   │   ├── services/       # API call functions
│   │   ├── context/        # React Context providers
│   │   └── App.js          # Root component
│   └── package.json
│
├── server/                 # Backend Node/Express application
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes definitions
│   ├── middleware/         # Custom Express middleware
│   ├── config/             # Configuration files (e.g., DB connection)
│   ├── server.js           # Entry point for the backend
│   └── package.json
│
├── docs/                   # Project documentation
├── package.json            # Root configuration for concurrently running client/server
└── README.md               # Quick start guide
```
