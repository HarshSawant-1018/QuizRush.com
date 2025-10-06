import React, { useState } from "react";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDesc, setQuizDesc] = useState("");
  const [questions, setQuestions] = useState([
    { questionText: "", options: ["", "", "", ""], correctOptionIndex: 0 },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: "", options: ["", "", "", ""], correctOptionIndex: 0 },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ quizTitle, quizDesc, questions });

    // Example API call:
    /*
    const res = await fetch("http://localhost:5000/api/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: quizTitle, description: quizDesc, questions })
    });
    */
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full py-6 text-center shadow-md bg-blue-950 bg-opacity-80">
        <h1 className="text-3xl font-bold text-blue-300">Create a New Quiz</h1>
      </header>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-blue-950 bg-opacity-50 mt-8 p-6 rounded-2xl w-full max-w-3xl shadow-lg"
      >
        <div className="mb-6">
          <label className="block text-blue-200 mb-2 font-semibold">Quiz Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            placeholder="Enter quiz name"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block text-blue-200 mb-2 font-semibold">Description</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={quizDesc}
            onChange={(e) => setQuizDesc(e.target.value)}
            placeholder="Describe your quiz"
          />
        </div>

        {/* QUESTIONS SECTION */}
        <div className="space-y-8">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-blue-900 bg-opacity-40 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Question {qIndex + 1}
              </h3>
              <input
                type="text"
                value={q.questionText}
                onChange={(e) =>
                  handleQuestionChange(qIndex, "questionText", e.target.value)
                }
                placeholder="Enter your question"
                className="w-full px-3 py-2 rounded-md bg-blue-800 border border-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none mb-4"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                {q.options.map((opt, optIndex) => (
                  <div key={optIndex}>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) =>
                        handleOptionChange(qIndex, optIndex, e.target.value)
                      }
                      placeholder={`Option ${optIndex + 1}`}
                      className="w-full px-3 py-2 rounded-md bg-blue-800 border border-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <label className="text-blue-200 font-medium">
                  Correct Option:
                </label>
                <select
                  value={q.correctOptionIndex}
                  onChange={(e) =>
                    handleQuestionChange(
                      qIndex,
                      "correctOptionIndex",
                      Number(e.target.value)
                    )
                  }
                  className="ml-3 px-3 py-1 bg-blue-700 rounded-md focus:ring-2 focus:ring-blue-400"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <option key={i} value={i}>
                      Option {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={addQuestion}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full shadow-md transition-all"
          >
            + Add Question
          </button>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-8 py-2 rounded-full shadow-md transition-all font-semibold"
          >
            Submit Quiz
          </button>
        </div>
      </form>

      {/* FOOTER */}
      <footer className="w-full bg-blue-950 bg-opacity-90 py-4 text-center text-blue-300 border-t border-blue-800 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} QuizRush.com — Create & Play Together
        </p>
      </footer>
    </div>
  );
};

export default CreateQuiz;
