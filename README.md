-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


EduReach AI Chatbot

EduReach AI Chatbot is a full-stack AI-powered college information assistant designed to help prospective students quickly access important information about courses, fees, mentors, campus life, and placements.

The system uses Retrieval-Augmented Generation (RAG) with AI to provide accurate answers based on a predefined knowledge base.



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Live Demo

Frontend (Website)
https://edureach-ai-chatbot.vercel.app

Backend API
https://edureach-backend.onrender.com

GitHub Repository
https://github.com/harishgudagur/edureach-ai-chatbot


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Features

AI Chatbot
Students can ask questions about courses, fees, admissions, mentors, and campus information.

Authentication System
Secure user signup and login using JWT authentication.

Knowledge-Based Responses
Uses a RAG pipeline to retrieve relevant information from a knowledge base before generating responses.

Course Information
Provides details about programs, fees, and specializations.

Mentor Information
Displays mentor profiles and expertise areas.

Modern UI
Responsive and clean interface built using React and TailwindCSS.

Cloud Deployment
Frontend and backend deployed using modern cloud platforms.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Tech Stack

Frontend
React
Vite
TypeScript
TailwindCSS
Axios

Backend
Node.js
Express.js
TypeScript

Database
MongoDB Atlas

AI & RAG
LangChain
Google Gemini AI
MongoDB Vector Search

Deployment
Frontend: Vercel
Backend: Render
Version Control: GitHub



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Project Architecture

Frontend (React)
Handles UI, authentication, and chatbot interaction.

Backend (Node.js + Express)
Manages APIs, authentication, AI processing, and knowledge retrieval.

Database (MongoDB Atlas)
Stores users and vector embeddings for AI search.

AI Pipeline
User Query → Vector Search → Retrieve Relevant Content → Gemini AI → Response


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Folder Structure
edureach-ai-chatbot
│
├── client                 # React frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── context
│
├── server                 # Node.js backend
│   ├── src
│   │   ├── routes
│   │   ├── controllers
│   │   ├── services
│   │   └── middleware
│
└── README.md



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Installation (Run Locally)

Clone the repository

git clone https://github.com/harishgudagur/edureach-ai-chatbot.git

Navigate into the project

cd edureach-ai-chatbot


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Install backend dependencies

cd server
npm install

Run backend server

npm run dev


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Install frontend dependencies

cd ../client
npm install

Run frontend

npm run dev

Frontend will run on

http://localhost:5173

Backend will run on

http://localhost:5000


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Environment Variables

Create a .env file inside the server folder.

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GOOGLE_API_KEY=your_gemini_api_key


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


API Endpoints

Authentication

POST
/api/auth/register

POST
/api/auth/login

GET
/api/auth/me


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Chatbot

POST
/api/chat/message

Example request

{
  "message": "What is the fee for B.Tech AI?"
}



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Future Improvements

Voice-based chatbot interaction

Admin dashboard for managing knowledge base

Real-time student counseling chat

Multi-language chatbot support




------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Author

Harish Gudagur

GitHub
https://github.com/harishgudagur

LinkedIn
https://www.linkedin.com/in/harish-gudagur-7a8b0a244/


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

License

This project is licensed under the MIT License.



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
