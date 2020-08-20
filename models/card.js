const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: { type: Number, min: 1, max: 5, default: 3 }
}, {
  timestamps: true
});

const cardSchema = new Schema({
  apiId : String,
  reviews: [reviewSchema]
})

cardsModel = mongoose.model('Cards', cardSchema);

module.exports = {
  cardsModel: cardsModel
};