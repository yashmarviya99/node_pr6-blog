const express = require("express")
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/db/db")
const blogRoutes = require("./src/routes/blogRoute");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Blog Route
app.use("/api/blogs", blogRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({ message: "Blog api is running" });
});

const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});