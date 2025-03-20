# Ecommerce Website

## Overview
E-Commerce Website is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that provides a seamless online shopping experience. The project includes user authentication, cart functionality, and an intuitive user interface.

## Features
- **User Authentication** (Sign Up, Login, Logout, JWT Authentication)
- **Shopping Cart System** (Add, Remove, Update Quantities, Checkout)
- **Responsive Design** (Optimized for all devices)

## Tech Stack
### Frontend:
- React.js
- Redux Toolkit (for state management)
- Tailwind CSS (for styling)
- React Router (for navigation)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT (JSON Web Token) Authentication

## Installation
### Prerequisites
Make sure you have **Node.js**, **MongoDB**, and **npm** installed.

### Steps to Run the Project
#### 1. Clone the Repository
```bash
git clone [https://github.com/Shraddha2421/e-commerce-app-.git]
cd e-commerce-app-
```

#### 2. Install Dependencies
##### Backend
```bash
cd backend
npm install
```
##### Frontend
```bash
cd frontend
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```
DB_URL = "mongodb+srv://shraddha:MySecurePass2421@cluster0.yozs4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
PORT = 3000
JWT_SECRET = "helloiamshraddha"
FRONTEND_URL = "http://localhost:5173"
```

#### 4. Run the Application
##### Start the Backend Server
```bash
cd backend
npm run start:dev
```
##### Start the Frontend Server
```bash
cd frontend
npm start
```

## Contribution
Feel free to fork this repository and contribute to the project. Open an issue or submit a pull request with improvements.

---
