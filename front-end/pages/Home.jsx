import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  function createquizclickhandler(){
    navigate("/create-quiz")
  }

  function startquizHandler() {
    navigate("/start-quiz")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white flex flex-col items-center justify-between">
      
      {/* ===== HEADER ===== */}
      <header className="w-full py-6 text-center shadow-lg bg-blue-950 bg-opacity-70">
        <h1 className="text-4xl font-extrabold tracking-wide text-blue-200">
          QuizRush<span className="text-blue-400">.com</span>
        </h1>
        <p className="mt-2 text-blue-300 text-lg">
          Create, play, and share exciting quizzes with your friends!
        </p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sharpen your mind with fun challenges 🎯
        </h2>
        <p className="text-blue-200 mb-8 max-w-lg">
          Dive into a world of quizzes covering every topic — from coding to general knowledge.
          Create your own quiz and challenge your friends in real-time.
        </p>

        <div className="flex gap-6">
          <button onClick={createquizclickhandler} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-md text-lg font-semibold transition-all duration-200 hover:scale-105">
            Create Quiz
          </button>
          <button onClick={startquizHandler} className="px-6 py-3 bg-blue-400 hover:bg-blue-500 rounded-full shadow-md text-lg font-semibold transition-all duration-200 hover:scale-105">
            Start a Quiz
          </button>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-blue-950 bg-opacity-80 py-4 text-center text-blue-300 border-t border-blue-800">
        <p className="text-sm">
          © {new Date().getFullYear()} QuizRush.com — All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </div>
      </footer>

    </div>
  );
};

export default Home;
