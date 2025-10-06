🧠 **QuizRush.com — MERN Stack Quiz App**

A modern, full-stack Quiz Web Application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
This app allows users to create quizzes, attempt them interactively, and view their final scores with personalized feedback.

🚀 Tech Stack
Layer	Technology
Frontend	React.js, Axios, React Router DOM, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
HTTP Client	Axios
Styling	Tailwind CSS with custom dark theme
Hosting (Planned)	Vercel / Render (Frontend), MongoDB Atlas / Railway (Backend)


🧩 Features
🎯 Quiz Creation

Create a new quiz with custom questions and options.

Each question supports multiple-choice answers.

Data is securely stored in MongoDB using a unique quiz ID.

🧑‍🏫 Quiz Attempt
Start the quiz directly using the quiz ID.
Interactive question navigation with radio button selection.
Real-time tracking of selected answers.

📈 Result Calculation
Results are calculated via a backend API endpoint (/api/getResult/:quizId).
Displays score, total questions, and percentage.
Personalized feedback (e.g., “Excellent!”, “Keep practicing!”).

💬User Feedback Page 
Shows motivational messages based on performance.
Option to retake the quiz or go back to the home screen.
Clean, dark UI with responsive design.

⚙️ API Endpoints
Method	Endpoint	Description
POST	/api/createQuiz	Create a new quiz with questions
GET	/api/getQuiz/:quizId	Retrieve a quiz by ID
POST	/api/getResult/:quizId	Submit answers and calculate score

🧠 How It Works
User creates a quiz → questions and correct options are stored in MongoDB.
User starts a quiz → frontend fetches questions using quiz ID.
User answers questions → responses are sent as JSON to backend.
Backend calculates score → compares with correct answers and returns result.
Frontend displays feedback → shows score, total, and motivational message.



🌱 Upcoming Features
🔐 User Authentication — Sign up & log in to save quiz progress.
💾 Quiz History — View previously attempted quizzes and scores.
🖼️ Leaderboard — Compare scores with other users.
🎨 Animated Progress Bar — Display quiz progress visually.
📊 Analytics Dashboard — Track quiz difficulty and performance trends.
🌍 Deployment — Host app on Vercel / Render with MongoDB Atlas backend.



🪄 How to Run Locally

1️⃣ Clone the repository
git clone https://github.com/your-username/quiz-app.git
cd quiz-app

2️⃣ Install dependencies
Frontend
cd frontend
npm install

Backend
cd ../backend
npm install

3️⃣ Run backend server
npm start

4️⃣ Run frontend
npm run dev
