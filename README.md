
# TavPe

This project is a full-stack web application with a React frontend (Vite + Tailwind CSS) and a Node.js/Express backend. It provides features such as authentication, loan applications, admin management, and more.

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- (Optional) [Vercel CLI](https://vercel.com/docs/cli) for deployment

---

## Project Structure

```
TavPe/
├── client/   # Frontend (React + Vite + Tailwind CSS)
└── server/   # Backend (Node.js + Express + MongoDB)
```

---

## 1. Setup Instructions

### 1.1. Clone the Repository
```sh
git clone https://github.com/ManpreetSingh18/TavPe.git
cd TavPe
```

### 1.2. Install Dependencies

#### Frontend
```sh
cd client
npm install
```

#### Backend
```sh
cd ../server
npm install
```

---

## 2. Environment Variables

### Frontend (`client/.env`)
- Copy `.env` or `.env.production` and update API URLs as needed.

### Backend (`server/.env`)
- Set up your MongoDB URI and any secret keys required.
- Example:
	```env
	MONGODB_URI=your_mongodb_connection_string
	JWT_SECRET=your_jwt_secret
	PORT=5000
	```

---

## 3. Running the Application

### 3.1. Start the Backend
```sh
cd server
npm start
```
- The backend will run on `http://localhost:5000` by default.

### 3.2. Start the Frontend
```sh
cd client
npm run dev
```
- The frontend will run on `http://localhost:5173` by default (Vite).

---

## 4. Features
- User authentication (login/register/phone sign-in)
- Loan application forms (Personal, Home, Car, Business, Credit Card, Health Insurance)
- Admin dashboard (manage users, contacts, services)
- FAQ, testimonials, analytics, and more
- Responsive design with Tailwind CSS

---

## 5. Deployment

### Vercel (Frontend)
- The frontend is ready for deployment on Vercel. Use the Vercel dashboard or CLI.
- Example:
	```sh
	cd client
	vercel
	```

### Backend
- Deploy the backend to any Node.js hosting (e.g., Render, Heroku, Vercel Serverless, etc.)

---

## 6. Useful Scripts

### Frontend
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

### Backend
- `npm start` – Start server

---

## 7. Folder Overview

### client/
- `src/components/` – Reusable UI components
- `src/pages/` – Main pages/routes
- `src/store/` – State management (auth)
- `src/utils/` – Utility functions
- `public/` – Static assets

### server/
- `controllers/` – Route controllers
- `middleware/` – Express middleware
- `models/` – Mongoose models
- `router/` – Express routers
- `utils/` – Utility functions (e.g., DB connection)
- `validators/` – Input validation

---

## 8. License

This project is licensed under the MIT License.

---

## 9. Contact

For questions or support, please open an issue or contact the maintainer.
