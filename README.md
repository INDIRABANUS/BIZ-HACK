# 🩸 BIZ HACK PS35 – Blood Donor Management System

## 📌 Project Description

A web-based Blood Donor Management System that helps users find suitable and currently available blood donors. Donors can register, manage their profiles, and update availability, while administrators can manage donor records.

The system displays a donor as available only when:

`status = ACTIVE` **AND** `availability = AVAILABLE`

---

## 🎯 Problem Statement

Finding a suitable and currently available blood donor during emergencies can be difficult when donor information is outdated or manually maintained.

This system provides a centralized platform to:

- Maintain donor information
- Search donors by blood group and location
- Track donor availability
- Prevent inactive/unavailable donors from appearing in search
- Provide secure donor and admin access

---

## ✨ Key Features

- 🔐 User registration and JWT authentication
- 👤 Donor profile management
- 🩸 Blood group-based donor search
- 📍 Location-based search
- 🟢 Donor availability management
- 🛡️ Admin dashboard
- 🔒 Role-based access control
- 🚪 Secure logout
- ✅ Active + Available donor filtering

---

## 🛠️ Technology Stack

**Frontend:** React.js, Vite, Tailwind CSS, Axios, React Router

**Backend:** Node.js, Express.js, REST API, JWT, bcrypt

**Database:** MongoDB Atlas

**Deployment:** Vercel + Render

---

## 📸 Screenshots

### Home Page
![Home Page](docs/screenshots/home.png)

### Login
![Login](docs/screenshots/login.png)

### Donor Registration
![Registration](docs/screenshots/register.png)

### Donor Search
![Donor Search](docs/screenshots/donor-search.png)

### Donor Profile
![Donor Profile](docs/screenshots/donor-profile.png)

### Admin Dashboard
![Admin Dashboard](docs/screenshots/admin-dashboard.png)

---

## 🔄 Application Workflow

```text
Register / Login
      ↓
Authentication
      ↓
Donor / Admin Dashboard
      ↓
Search or Manage Donors
      ↓
ACTIVE + AVAILABLE Filtering
      ↓
Matching Donor Results

Project Structure
BIZ-HACK/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── docs/
│   └── screenshots/
│
└── README.md
🚀 Setup
Backend
cd backend
npm install

Create .env:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173

Run:

npm start
Frontend
cd frontend
npm install

Create .env:

VITE_API_URL=http://localhost:5000/api

Run:

npm run dev
🔑 Demo Credentials
Admin
Email: admin@bizhack.demo
Password: Admin@2026
Donor
Email: rajesh.erode@bizhack.com
Password: Donor@2026
🌐 Live Demo

Frontend:
https://biz-hack-frontend.vercel.app

Backend:
https://biz-hack-j8tf.onrender.com

API Health Check:
https://biz-hack-j8tf.onrender.com/api/health

🧪 Core Test Cases
 Registration works
 Login works
 Admin login works
 Blood group search works
 Location search works
 ACTIVE + AVAILABLE donors are displayed
 UNAVAILABLE donors are hidden
 INACTIVE donors are hidden
 Donor availability can be updated
 Admin dashboard works
 Logout works
🔒 Security
Passwords are hashed using bcrypt.
JWT is used for authentication.
Role-based authorization protects restricted features.
Database credentials and secrets are stored in environment variables.
👥 Team

BIZ HACK'26

Developed for the BIZ HACK hackathon.