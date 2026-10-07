const express = require("express");

const { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } = require("../controllers/blogController");

const router = express.Router();

// Create Blog
router.post("/", createBlog);

// Get all Blog
router.get("/", getBlogs);

// Get single Blog
router.get("/:id", getBlog);

// Update Blog
router.put("/:id", updateBlog);

// Delete Blog
router.delete("/:id", deleteBlog);


module.exports = router;