import React from 'react'

const QuestionCard = ({ qid, questionText, options, selected, onSelect }) => {
  return (
    <div className="bg-[#161C22] border border-gray-700 rounded-2xl shadow-lg p-6 text-gray-200">
      
      {/* Question */}
      <h2 className="text-xl font-semibold text-blue-400 mb-6 text-center">
        {questionText}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {options.map((option, idx) => (
          <label
            key={idx}
            htmlFor={`Q-${qid}-opt${idx}`}
            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200
              ${
                selected === idx
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                  : 'bg-[#1D2228] border-gray-700 hover:bg-[#2A313A]'
              }`}
          >
            <input
              type="radio"
              id={`Q-${qid}-opt${idx}`}
              name={`Q-${qid}`}
              value={idx}
              checked={selected === idx}
              onChange={() => onSelect(idx)}
              className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-base">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
