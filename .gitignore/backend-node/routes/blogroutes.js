const express = require('express');
const { getBlogPosts, createBlogPost } = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/blog', getBlogPosts);
router.post('/blog', auth, createBlogPost);

module.exports = router;

