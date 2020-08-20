var express = require('express');
var router = express.Router();
const request = require('request');
const cardsController = require('../controllers/reviews');
const { connection } = require('mongoose');
const { cardsModel } = require('../models/card');
const token = process.env.token;
const rootURL = 'https://api.scryfall.com/cards/search?q=set&q=b%3Amma';
const cardURL = 'https://api.scryfall.com/cards';
//https://thehedronarchive.herokuapp.com/

router.get('/', function (req, res, next) {
  const options = {
    url: `${rootURL}`,
    headers: {
      Authorization: `token ${token}`
    }
  };
  request(options, function (err, response, body) {
    let cardData = JSON.parse(body);
    res.render('index', { userData: cardData })
  });
});

router.get('/cards/:id', function (req, res) {
  const options = {
    url: `${cardURL}/${req.params.id}`,
    headers: {
      Authorization: `token ${token}`
    }
  };
  request(options, async function (err, response, body) {
    let cardData = JSON.parse(body);
    let cardDatabase = await cardsModel.findOne({ apiId: req.params.id });
    res.render('show', { userData: cardData, cardDatabase: cardDatabase })
  });  
});

router.post('/cards/:id/reviews', cardsController.create);

module.exports = router;
