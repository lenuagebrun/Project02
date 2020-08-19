const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*const cardSchema = new Schema({
  name: String,
  type: String,
  rarity: String,
  color: String
})*/

const reviewSchema = new Schema ({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 3}
}, {
  timestamps: true
});



CardsModel = mongoose.model('Cards', reviewSchema);