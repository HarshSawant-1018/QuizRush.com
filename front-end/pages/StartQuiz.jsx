import React, { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { useNavigate } from "react-router-dom";

const StartQuiz = ({ resultData, setResultData }) => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (qid, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qid]: optionIdx }));
  };

  const getQuestions = async () => {
    console.log("first");
    try {
      const response = await fetch(
        "http://localhost:3000/api/getQuestions/68e2ac8ffa225ed904d3bd9a"
      );
      if (!response.ok) throw new Error("Failed to fetch quiz data");

      const data = await response.json();
      setQuiz(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      console.log(quiz);
    }
  };

  const calculateResult = async (selectedAnswers) => {
    try {
      const formattedAnswers = Object.entries(selectedAnswers).map(
        ([questionId, selectedIndex]) => ({
          questionId,
          selectedIndex,
        })
      );

      const response = await fetch(
        "http://localhost:3000/api/getResult/68e2ac8ffa225ed904d3bd9a",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: formattedAnswers }),
        }
      );

      if (!response.ok) throw new Error("Failed to calculate result");
      const resultData = await response.json();
      setResultData(resultData);
      navigate("/result-page", { state: { result: resultData } });
    } catch (error) {
      console.error(error);
    }
  };

  const nextHandler = () => {
    if (quiz && currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    }
  };

  const prevHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (quiz == null) {
      getQuestions();
    }
  }, [quiz]);

  if (loading)
    return (
      <p className="text-blue-400 text-center mt-10 text-lg">Loading quiz...</p>
    );
  if (!quiz)
    return (
      <p className="text-red-500 text-center mt-10 text-lg">
        Failed to load quiz.
      </p>
    );

  const currentQuestion = quiz.questions[currentIndex];
  console.log(currentQuestion)

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-400">{quiz.title}</h1>
        <p className="text-gray-400 mt-2">{quiz.description}</p>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-xl bg-[#161C22] rounded-2xl shadow-lg p-6 border border-gray-700">
        <QuestionCard
          qid={currentQuestion.id}
          questionText={currentQuestion.questionText}
          options={currentQuestion.options}
          selected={selectedAnswers[currentQuestion.id]}
          onSelect={(optionIdx) =>
            handleSelectAnswer(currentQuestion.id, optionIdx)
          }
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={prevHandler}
          disabled={currentIndex === 0}
          className={`px-5 py-2 rounded-xl border border-gray-600 transition-all duration-200 ${
            currentIndex === 0
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-800 hover:border-blue-400"
          }`}
        >
          Previous
        </button>

        {currentIndex === quiz.questions.length - 1 ? (
          <button
            onClick={() => calculateResult(selectedAnswers)}
            className="px-5 py-2 rounded-xl border border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={nextHandler}
            className="px-5 py-2 rounded-xl border border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            Next
          </button>
        )}
      </div>

      {/* Progress */}
      <p className="text-gray-400 mt-4">
        Question {currentIndex + 1} of {quiz.questions.length}
      </p>
    </div>
  );
};

export default StartQuiz;
