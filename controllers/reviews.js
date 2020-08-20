const card = require('../models/card');

module.exports = {
  create,
  show
};

function create(req, res) {
  card.cardsModel.findOne({ apiId: req.params.id }, async function (err, dbCard) {
    if (dbCard) {
      let reviewObject = {
        content: req.body.reviewContent,
        rating: req.body.rating
      };
      dbCard.reviews.push(reviewObject);
      let saveResults = await dbCard.save();
    } else {
      let reviewObject = {
        content: req.body.reviewContent,
        rating: req.body.rating
      };
      let reviewArray = []
      reviewArray.push(reviewObject)
      let results = await card.cardsModel.create({ apiId: req.params.id, reviews: reviewArray })
      console.log(results)
    }
  });
  res.redirect(`/cards/${req.params.id}`)
}

function show(req, res) {
  card.findById(req.params.id, function(err, cardReview){
    res.render('show', {cardReview})
  })
}