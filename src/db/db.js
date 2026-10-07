const Module = require("module");
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MonoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connecteion Faild: ", error.message);
        process.exit(1)
    }
};

module.exports = connectDB;