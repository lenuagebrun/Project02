const Card = require('../models/card');

module.exports = {
  create
};

function create(req, res) {
  Card.findById(req.params.id, function(err, movie) {
    //The moviesCtrl.show action is using Movie.findById method to retrieve the movie doc with an id of req.params.id.
    card.reviews.push(req.body);
    card.save(function(err) {
      res.redirect(`/cards/${card._id}`);
    });
  });
}