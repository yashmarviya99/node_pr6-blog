const Blog = require("../models/blogModel");


// Creat Blog {post}
const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            message: "Blog Created Successfully",
            data: blog
        });
    } catch (error) {
        res.status(500).json({
            message: "Faild to Create Blog",
            error: error.message
        });
    }
};

// Get all BLog {get}
const getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json({
            message: "Bloges fetched successfully",
            data: blog
        });
    } catch (error) {
        res.status(500).json({
            message: "Faild to fatched blogs"
        });
    }
};

// Get single Blog {get}
const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            })
        }

        res.status(200).json({
            message: "Bloge fetched successfully",
            data: blog
        });
    } catch (error) {
        res.status(500).json({
            message: "Faild to fatched blog",
            error: error.messae
        });
    }
};

// Update Blog {put}
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!blog) {
            return res.status(404).json({
                messae: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog Updated successfully",
            data: blog
        });

    } catch (error) {
        res.status(500).json({
            message: "Faild to updated Blog",
            error: error.message
        });
    }
};

// Delete Blog {delete}
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog deleted successfully",
            data: blog
        });

    } catch (error) {
        res.status(500).json({
            message: "Faild to delete Blog",
            error: error.message
        });
    }
};



module.exports = { createBlog, getBlogs, getBlog, updateBlog, deleteBlog }