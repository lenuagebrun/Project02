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

var loginSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String
}, {
  timestamps: true
});

cardsModel = mongoose.model('Cards', cardSchema);
loginModel = mongoose.model('Login', loginSchema);

module.exports = {
  cardsModel: cardsModel,
  loginModel: loginModel
};