const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  recipe: { type: String, required: true }
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);

