# Project Name: Full-Stack Authentication System

## Overview
This project is a **full-stack authentication system** built using **Next.js (frontend)** and **Node.js with Express (backend)**. It allows users to sign up, log in, and manage authentication securely. The frontend is built with **TypeScript** for type safety, and **Formik with Yup** is used for form validation. The backend is powered by **PostgreSQL** for data storage.

## Features
### **Frontend (Next.js + TypeScript)**
- Built with **Next.js** for a modern React-based UI.
- **Formik + Yup** for form handling and validation.
- **ShadCN UI** components for a beautiful and responsive design.
- **Tailwind CSS** for utility-first styling.
- **LocalStorage** used to store authentication tokens.
- **Environment variables** managed via .env.
- **Axios** for API requests to the backend.

### **Backend (Node.js + Express + PostgreSQL)**
- Built with **Express.js** for handling authentication requests.
- Uses **PostgreSQL** as the database.
- **JWT Authentication** for secure user sessions.
- **bcrypt.js** for password hashing.
- **Sequelize** as the ORM to interact with PostgreSQL.
- **dotenv** for managing environment variables.

## Installation & Setup
### **1️⃣ Clone the Repository**
bash
git clone https://github.com/shahanaabdulla/task-management-app
cd task-management-app


### **2️⃣ Set Up the Backend**
bash
cd backend
npm install

Create a .env file in the backend directory and add:
DB_USER=your-database-username
DB_PASS=your-database-password
DB_NAME=your-database-name
DB_HOST=localhost
DB_DIALECT=postgres
PORT=5000
JWT_SECRET=your-secret-key

Run the backend server:
bash
npm start


### **3️⃣ Set Up the Frontend**
bash
cd ../frontend
npm install

Create a .env file in the frontend directory and add:
NEXT_PUBLIC_API_URL=http://localhost:5000

Run the frontend server:
bash
npm run dev


## **Usage**
1. Open the browser and go to http://localhost:3000
2. Sign up for a new account.
3. Log in with your credentials.
4. Upon successful login, the token is stored in **localStorage**.
5. User is redirected to the homepage after login.
6. Log out to clear authentication.

## **Technologies Used**
### **Frontend:**
- Next.js (React framework)
- TypeScript
- Formik (Form handling)
- Yup (Validation)
- ShadCN UI (UI components)
- Axios (API requests)

### **Backend:**
- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Token for authentication)
- bcrypt.js (Password hashing)

## **Folder Structure**
project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── .env
│   ├── package.json
│   ├── next.config.js


## **API Documentation**
https://documenter.getpostman.com/view/33447268/2sAYkDN1PE

## **Contributing**
Feel free to contribute! Fork the repo, make changes, and submit a pull request.

## **License**
This project is open-source and available under the MIT License.