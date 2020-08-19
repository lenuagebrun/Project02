var express = require('express');
var router = express.Router();
const rootURL = 'https://api.scryfall.com/cards/search?q=set&q=b%3Amma';

router.get('/:id', function(req,res){
    
    res.render('show')
})

module.exports = router;