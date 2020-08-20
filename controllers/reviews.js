const card = require('../models/card');

module.exports = {
  create
};

function create(req, res) {
  card.cardsModel.findOne({ apiId: req.params.id }, async function (err, dbCard) {
    if (dbCard) {
      let reviewObject = {
        content: req.body.reviewContent,
        rating: req.body.rating
      };
      dbCard.reviews.push(reviewObject);
      let saveResults =  await dbCard.save();
      console.log('card found');
      console.log(dbCard);
    } else {
      let reviewObject = {
        content: req.body.reviewContent,
        rating: req.body.rating
      };
      let reviewArray = []
      reviewArray.push(reviewObject)
      let results = await card.cardsModel.create({ apiId: req.params.id, reviews: reviewArray  })
      console.log(results)
    }
  });
  console.log(req.body.reviewContent, req.body.rating, req.params.id);
  res.send('big thank');
}