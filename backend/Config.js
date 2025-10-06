const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL, {});
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error in connecting MongoDB", error);
        process.exit(1);
    }
};

module.exports = connectDB;