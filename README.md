# fullstack-docker-app


This project is a **full-stack application** using React (frontend), Express (backend), and PostgreSQL (database), prepared for Dockerization in upcoming steps. This README provides setup instructions, folder structure, and running guidelines.

---

## **Project Structure**

fullstack-docker-app/
├── backend/
│ ├── app.js
│ └── package.json
├── frontend/
│ ├── package.json
│ └── src/
│ └── App.js
├── db-data/ # Database volume (empty folder)
├── docker-compose.yml # Docker Compose configuration (empty for now)
├── .env # Environment variables (empty for now)
└── README.md


---

## **Backend**

- **Framework:** Node.js + Express  
- **Database:** PostgreSQL  
- **Files:** `backend/app.js`, `backend/package.json`  

**Start Backend (locally):**
```bash
cd backend
npm install
npm start


Frontend Setup

Framework: React

Dependencies: react, react-dom, react-scripts

Steps to run frontend locally:

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend server:

npm start


Opens at http://localhost:3000

React frontend fetches data from backend /api.

Git & Version Control

Git initialized in the root folder:

git init


First commit:

git add .
git commit -m "Initial project setup for fullstack-docker-app"


Repository linked to GitHub for submission:

git remote add origin <GitHub Repo URL>
git branch -M main
git push -u origin main

Docker & Environment

db-data/: Empty folder used for PostgreSQL volume.

.env: Environment file for sensitive variables (currently empty).

docker-compose.yml: Will be configured in the next steps for container orchestration.

Ensure Docker Desktop is running before starting Docker containers.

Future Steps (Mini Project II & III)

Dockerize backend, frontend, and PostgreSQL database.

Configure docker-compose.yml for multi-container setup.

Use .env for managing database credentials.

Debug and validate container logs and services.
