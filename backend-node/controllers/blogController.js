const BlogPost = require('../models/BlogPost');

const getBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new BlogPost({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBlogPosts, createBlogPost };

