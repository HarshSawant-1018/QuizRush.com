const { Quiz, Question } = require("../models/Quiz")

const postQuestions = async (req, res) => {
    try {
        const { title, description, category, questions } = req.body;


        const questionDocs = await Question.insertMany(questions);


        const quiz = await Quiz.create({
            title,
            description,
            category,
            questions: questionDocs.map(q => q._id),
        });

        res.status(201).json({ message: "Quiz created successfully", quiz });
    } catch (error) {
        res.status(500).json({ message: "failed to post questions", error: error.message })
    }
}

const getQuestions = async (req, res) => {
    try {

        const quiz = await Quiz.findById(req.params.id).populate("questions");

        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        const safeQuiz = {
            title: quiz.title,
            description: quiz.description,
            category: quiz.category,
            questions: quiz.questions.map(q => ({
                id: q._id,
                questionText: q.questionText,
                options: q.options
            }))
        };

        res.status(200).json(safeQuiz);
    } catch (error) {
        res.status(500).json({ message: "failed to fetch questions", error: error.message })
    }
}

const getResult = async (req, res) => {
    try {
        
        const { answers } = req.body; // [{questionId, selectedIndex}, ...]
        
        console.log(answers);

        const quiz = await Quiz.findById(req.params.id).populate("questions");

        console.log('check-2')
        console.log(quiz.questions);
        let score = 0;

        quiz.questions.forEach((q) => {
            const userAnswer = answers.find(a => q._id == a.questionId);
            if (userAnswer && userAnswer.selectedIndex === q.correctOptionIndex) {
                score++;
            }
        });

        console.log("check-3")

        res.json({
            message: "Quiz submitted successfully",
            score,
            total: quiz.questions.length,
            answers: answers
        });
    } catch (error) {
        res.status(500).json({ message: "failed to fetch questions", error: error.message })
    }
}

module.exports = { getQuestions, getResult, postQuestions };