const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const connectDB = require("./Config")

const quizRoutes = require("./routes/quizRoutes")

app.use(cors({
  origin: "https://quiz-rush-pxdwaw895-harsh-s-projects-c290d6c2.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
connectDB();

app.use("/api",quizRoutes);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
})
