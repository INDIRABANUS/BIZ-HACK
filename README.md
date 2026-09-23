# 🩸 BloodBridge

### Blood Donor Management System — BIZ HACK'26

> **Problem Statement PS35**
> A full-stack platform for discovering active and available blood donors quickly and managing donor availability reliably.

[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react\&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/API-Express.js-000000?logo=express\&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/UI-Tailwind_CSS-06B6D4?logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)

---

## 🚨 The Problem

During urgent blood requirements, finding a suitable and **currently available** donor can be difficult.

Traditional donor lists can contain:

* Outdated donor information
* Unavailable donors
* Inactive donor records
* No location-based filtering
* Time-consuming manual searching

BloodBridge addresses this by providing a centralized platform where users can quickly search for suitable donors while donor availability is continuously manageable.

---

## 💡 Our Solution

**BloodBridge** is a MERN-stack web application that connects blood seekers with suitable active and available donors.

Users can search by:

* 🩸 Blood group
* 📍 Location
* 🟢 Availability

Donors can maintain their profiles and availability, while administrators can moderate donor records and control account status.

---

## ⭐ Core Feature

### Strict Active + Available Filtering

A donor is displayed in public search **only when both conditions are satisfied**:

```javascript
status === "ACTIVE" &&
availability === "AVAILABLE"
```

This rule is enforced at the **backend/database query level**, not just in the frontend.

### Example

```text
Donor A
Blood Group: O+
Status: ACTIVE
Availability: AVAILABLE
        ↓
      SHOW ✅


Donor B
Blood Group: O+
Status: ACTIVE
Availability: UNAVAILABLE
        ↓
      HIDE ❌


Donor C
Blood Group: O+
Status: INACTIVE
Availability: AVAILABLE
        ↓
      HIDE ❌
```

This ensures that users do not receive outdated or unavailable donor records.

---

# 🚀 Key Features

## 🔎 Donor Discovery

* Search by blood group
* Filter by location
* Display only active and available donors
* Clear availability indicators
* Empty-state guidance
* Direct call functionality
* Copy donor contact number

## 👤 Donor Dashboard

* Secure donor login
* View donor profile
* Update contact information
* Update blood group
* Update location
* Update last donation date
* One-click availability toggle
* Account status indicator

## 🛡️ Admin Console

* Dashboard statistics
* Total donor count
* Active donor count
* Available donor count
* Inactive donor count
* Blood-group distribution
* Search and filter donor records
* Activate/deactivate donor accounts
* Override donor availability

## 🔐 Security

* JWT authentication
* bcrypt password hashing
* Protected routes
* Role-based authorization
* Admin-only operations
* Environment-based configuration

---

# 👥 User Roles

| Role                | Capabilities                                  |
| ------------------- | --------------------------------------------- |
| 🩸 **Donor**        | Register, manage profile, update availability |
| 🔎 **Blood Seeker** | Search active and available donors            |
| 🛡️ **Admin**       | Manage donor records, status and availability |

---

# 🔄 Application Workflow

```text
                    ┌──────────────┐
                    │   HOME PAGE  │
                    └──────┬───────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       ┌──────────────┐          ┌──────────────┐
       │  FIND DONOR  │          │ REGISTER /   │
       │              │          │    LOGIN     │
       └──────┬───────┘          └──────┬───────┘
              │                         │
              ▼                         ▼
     Blood Group + Location       Donor Dashboard
              │                         │
              ▼                         ▼
      Search Database            Update Availability
              │
              ▼
     ACTIVE + AVAILABLE
              │
              ▼
       Matching Donors
              │
              ▼
       Contact Donor
```

### Admin Workflow

```text
Admin Login
     ↓
Admin Dashboard
     ↓
View Donor Records
     ↓
Search / Filter
     ↓
Activate / Deactivate
     ↓
Update Availability
```

---

# 🏗️ System Architecture

```text
┌───────────────────────────────────────────┐
│              React Frontend               │
│        React Router + Tailwind CSS        │
└───────────────────┬───────────────────────┘
                    │
                    │ REST API / Axios
                    ▼
┌───────────────────────────────────────────┐
│          Node.js + Express Backend        │
│                                           │
│  Authentication │ Donor APIs │ Admin APIs │
└───────────────────┬───────────────────────┘
                    │
                    │ Mongoose
                    ▼
┌───────────────────────────────────────────┐
│              MongoDB Atlas                │
│                                           │
│        Users + Donor Records              │
└───────────────────────────────────────────┘
```

---

# 🧰 Technology Stack

| Layer                 | Technology                      |
| --------------------- | ------------------------------- |
| **Frontend**          | React.js 18 + Vite              |
| **Styling**           | Tailwind CSS                    |
| **Icons**             | Lucide React                    |
| **Routing**           | React Router DOM v6             |
| **HTTP Client**       | Axios                           |
| **Backend**           | Node.js + Express.js            |
| **Database**          | MongoDB / MongoDB Atlas         |
| **ODM**               | Mongoose                        |
| **Authentication**    | JWT                             |
| **Password Security** | bcryptjs                        |
| **API Architecture**  | REST                            |
| **Version Control**   | Git + GitHub                    |
| **Deployment**        | Vercel + Render + MongoDB Atlas |

---

# 📁 Project Structure

```text
BIZ-HACK/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seeds/
│   │   └── server.js
│   │
│   ├── .env.example
│   ├── package.json
│   └── test_api.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# 🗄️ Database Model

## User

```text
User
├── name
├── email
├── passwordHash
├── role
├── status
└── createdAt
```

## Donor

```text
Donor
├── userId
├── name
├── bloodGroup
├── phone
├── email
├── location
├── availability
├── status
├── lastDonationDate
├── createdAt
└── updatedAt
```

### Donor States

```text
Availability
├── AVAILABLE
└── UNAVAILABLE

Account Status
├── ACTIVE
└── INACTIVE
```

---

# 🔌 API Reference

## Authentication

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/auth/register` | Register donor/user            |
| POST   | `/api/auth/login`    | Login and receive JWT          |
| GET    | `/api/auth/me`       | Get current authenticated user |

## Donors

| Method | Endpoint                       | Description                      |
| ------ | ------------------------------ | -------------------------------- |
| GET    | `/api/donors`                  | Search active + available donors |
| GET    | `/api/donors/:id`              | Get donor details                |
| PUT    | `/api/donors/:id`              | Update donor profile             |
| PATCH  | `/api/donors/:id/availability` | Update availability              |

### Search Example

```text
GET /api/donors?bloodGroup=O+&location=Erode
```

The backend automatically applies:

```text
status = ACTIVE
availability = AVAILABLE
```

## Admin

| Method | Endpoint                             | Description               |
| ------ | ------------------------------------ | ------------------------- |
| GET    | `/api/admin/stats`                   | Dashboard statistics      |
| GET    | `/api/admin/donors`                  | View all donor records    |
| PATCH  | `/api/admin/donors/:id/status`       | Activate/deactivate donor |
| PATCH  | `/api/admin/donors/:id/availability` | Update donor availability |

---

# 🧪 Demo Accounts

> **For hackathon demonstration only.**

| Role      | Email                         | Password    |
| --------- | ----------------------------- | ----------- |
| 🛡️ Admin | `admin@bizhack.com`           | `Admin@123` |
| 🩸 Donor  | `rajesh.erode@bizhack.com`    | `Donor@123` |
| 🩸 Donor  | `priya.cbe@bizhack.com`       | `Donor@123` |
| 🩸 Donor  | `karthik.chennai@bizhack.com` | `Donor@123` |
| 🩸 Donor  | `ananya.salem@bizhack.com`    | `Donor@123` |

### Test Cases

| Donor   | Blood Group | Location   | Status   | Availability |
| ------- | ----------- | ---------- | -------- | ------------ |
| Rajesh  | O+          | Erode      | ACTIVE   | AVAILABLE    |
| Priya   | A+          | Coimbatore | ACTIVE   | AVAILABLE    |
| Karthik | B+          | Chennai    | ACTIVE   | AVAILABLE    |
| Ananya  | AB+         | Salem      | ACTIVE   | AVAILABLE    |
| Rahul   | —           | Chennai    | ACTIVE   | UNAVAILABLE  |
| Arvind  | —           | Erode      | INACTIVE | AVAILABLE    |

The unavailable and inactive donors should **not** appear in public search.

---

# ⚙️ Getting Started

## Prerequisites

* Node.js 18+
* MongoDB local installation **or** MongoDB Atlas
* Git
* Modern web browser

---

## 1. Clone Repository

```bash
git clone https://github.com/INDIRABANUS/BIZ-HACK.git
cd BIZ-HACK
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create:

```text
backend/.env
```

Example:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/bizhack_blood_donor
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=development
```

Seed demo data:

```bash
npm run seed
```

Start backend:

```bash
npm start
```

Backend:

```text
http://localhost:5000
```

---

## 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
```

Create:

```text
frontend/.env
```

Development configuration:

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Open the URL shown by Vite, typically:

```text
http://localhost:5173
```

---

# 🧪 Testing

Backend automated tests:

```bash
cd backend
npm test
```

Build frontend:

```bash
cd frontend
npm run build
```

Before the final demo, verify:

* [ ] Registration works
* [ ] Login works
* [ ] Donor profile loads
* [ ] Availability toggle works
* [ ] Blood group search works
* [ ] Location filtering works
* [ ] Unavailable donors are hidden
* [ ] Inactive donors are hidden
* [ ] Admin login works
* [ ] Admin can activate/deactivate donors
* [ ] Admin can update availability
* [ ] Logout works
* [ ] Mobile UI works

---

# ☁️ Deployment

### Frontend

Recommended:

**Vercel**

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

### Backend

Recommended:

**Render**

Start command:

```bash
npm start
```

### Database

Recommended:

**MongoDB Atlas**

Production environment variables should be configured through the hosting platform rather than committed to Git.

---

# 🔐 Environment Variables

### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_secret
NODE_ENV=production
CLIENT_URL=your_frontend_url
```

### Frontend

```env
VITE_API_URL=your_backend_api_url
```

> **Never commit `.env` files, database credentials, JWT secrets, or other sensitive configuration to GitHub.**

---

# 🎯 Hackathon MVP

The primary demonstration focuses on:

```text
REGISTER
   ↓
LOGIN
   ↓
SEARCH BLOOD GROUP
   ↓
FILTER LOCATION
   ↓
SHOW ACTIVE + AVAILABLE DONORS
   ↓
CONTACT DONOR
   ↓
DONOR CHANGES AVAILABILITY
   ↓
DONOR DISAPPEARS FROM SEARCH
   ↓
ADMIN MODERATES RECORD
```

This demonstrates the core requirement of **PS35** end-to-end.

---

# 🔮 Future Enhancements

* 📍 GPS-based nearby donor discovery
* 📱 SMS / WhatsApp notifications
* 🚨 Emergency blood requests
* 🏥 Hospital and blood-bank integration
* 🔔 Donation reminders
* 🗺️ Map-based donor discovery
* 📊 Advanced analytics
* 🔐 OTP-based authentication
* 🩸 Extended blood-component compatibility

---

# 👨‍💻 Team

### BIZ HACK'26 — PS35

| Member           | Role                                 |
| ---------------- | ------------------------------------ |
| **Indirabanu S** | Team Leader · Full Stack Development |
| **Hemapriya**    | Frontend · UI/UX · Testing           |

---

## 📌 Project Status

**BIZ HACK'26 Prototype — PS35**

> Built as a one-day full-stack software development hackathon prototype.

---

### ⭐ BloodBridge

**Find the right donor. When it matters.**
