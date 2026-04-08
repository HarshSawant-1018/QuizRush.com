const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const connectDB = require("./Config")

const quizRoutes = require("./routes/quizRoutes")


app.use(cors({
  origin: function(origin, callback) {
    if (!origin || origin.includes("vercel.app")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.options("*", cors());


connectDB();

app.use("/api",quizRoutes);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
})
