var express = require('express');
var router = express.Router();
var sX = require('scrapper-x');
var request = require('request');

var config = {
  repeatItemGroup: '.searchCenterMiddle > li',
  dataFormat: {
    header: {
      selector: '.title',
      type: 'text'
    },
    link: {
      selector: '.title > a',
      type: 'attr:href'
    },
    description: {
      selector: '.compText',
      type: 'text'
    }
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://in.search.yahoo.com/search?p=yo', function(error, response, body) {
    var scrappedResult = {};
    if (!error && response.statusCode == 200) {
      scrappedResult = sX.scrape(body, config);
    }
    res.status(200).json(scrappedResult);
  });

});

module.exports = router;
