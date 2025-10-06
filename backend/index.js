const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const cors = require('cors')
const port = 3000;
const connectDB = require("./Config")

const quizRoutes = require("./routes/quizRoutes")

app.use(cors())

app.use(express.json());
connectDB();

app.use("/api",quizRoutes);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
})
