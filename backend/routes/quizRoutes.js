const express = require('express');
const router = express.Router();

const {getQuestions, getResult, postQuestions} = require("../controllers/quizController")

router.post("/postQuestions", postQuestions);
router.get("/getQuestions/:id", getQuestions);
router.post("/getResult/:id", getResult);

module.exports = router;
