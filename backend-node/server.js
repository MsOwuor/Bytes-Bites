const auth = require('./routes/auth');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./utils/db');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const auth = require('./routes/auth');
const blogRoutes = require('./routes/blogRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

app.use('/api/auth', auth);
app.use('/api', blogRoutes);
app.use('/api', recommendationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
