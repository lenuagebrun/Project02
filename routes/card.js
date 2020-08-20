var express = require('express');
var router = express.Router();
const cardsController = require('../controllers/reviews');

router.get('/:id', cardsController.show)

module.exports = router;