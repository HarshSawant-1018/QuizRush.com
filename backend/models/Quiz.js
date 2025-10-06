const mongoose = require("mongoose"); 

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },      
  description: { type: String },
  category: { type: String },                    
  questions: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Question" }
  ],
  createdAt: { type: Date, default: Date.now },
});

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctOptionIndex: { type: Number, required: true }, 
});

const Question = mongoose.model("Question", questionSchema);
const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = { Question, Quiz }; 
