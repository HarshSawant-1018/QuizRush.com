import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResultPage = ({ score, total }) => {
  const navigate = useNavigate()
  const percentage = Math.round((score / total) * 100)

  // Simple feedback logic
  let feedback = ''
  if (percentage === 100) feedback = '🌟 Outstanding! You nailed every question!'
  else if (percentage >= 80) feedback = '🔥 Great job! You have excellent knowledge.'
  else if (percentage >= 50) feedback = '👍 Good effort! A little more practice and you’ll ace it.'
  else feedback = '💪 Keep practicing — you’re getting there!'

  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col justify-center items-center text-gray-200 p-6">
      <div className="bg-[#161C22] p-10 rounded-2xl shadow-lg text-center border border-gray-700 max-w-md w-full">
        
        <h1 className="text-3xl font-bold text-blue-400 mb-4">
          🎉 Congratulations !!!
        </h1>

        <p className="text-lg text-gray-300 mb-2">
          You’ve completed the quiz successfully.
        </p>

        <div className="text-2xl font-semibold text-white mt-4 mb-6">
          You scored <span className="text-blue-400">{score}</span> out of <span className="text-blue-400">{total}</span>
        </div>

        <div className="text-md text-gray-400 italic mb-6">
          ({percentage}% correct answers)
        </div>

        <p className="text-lg text-gray-200 mb-8">{feedback}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/start-quiz')}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all"
          >
            🔁 Retake Quiz
          </button>

          <button
            onClick={() => navigate('/')}
            className="px-5 py-2 rounded-xl border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all"
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultPage
