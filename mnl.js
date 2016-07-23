var express = require('express');
var app = express();
var sX = require('scrapper-x');
var request = require('request');

// app.get('/',function( req, res){
//   console.log('done scraping');
var option1 = {
  repeatItemGroup: 'tr.match ',
  dataFormat: {
    date: {
      selector: 'td.date',
      type: 'text'
    },
    home: {
      selector: '.team.team-a > a',
      type: 'text'
    },
    away: {
      selector: '.team-b',
      type: 'text'
    },
    goals: {
      selector: '.score',
      type: 'text'
    }
  }
};

/* GET home page. */
app.get('/match', function(req, res, next) {
  request('http://int.soccerway.com/national/myanmar/national-league/2016/regular-season/r33992/matches/',
    function(error, response, body) {
    var scrappedResult = {};
    if (!error && response.statusCode == 200) {
      scrappedResult = sX.scrape(body, option1);
    }
    //  scrappedResult.push({
    //   "date" : date,
    //   "home" : home,
    //   "away" : away,
    //   "goals" : goals
    // });
     scrappedResult.push({date:'', home: ''})

    res.status(200).json(scrappedResult);
  });

});


var option2 = {
  repeatItemGroup: 'tr.team_rank',
  dataFormat: {
    rank: {
      selector: '.rank',
      type: 'text'
    },
    team: {
      selector: '.text.team.large-link > a',
      type: 'text'
    },
    played: {
      selector: '.number.total.mp',
      type: 'text'
    },
    wins: {
      selector: '.number.total.won.total_won',
      type: 'text'
    },
    loses: {
      selector: '.number.lost',
      type: 'text'
    },
    draws: {
      selector: '.number.drawn',
      type: 'text'
    },
    gd: {
      selector: 'td.number.gd',
      type: 'text'
    },
    ga: {
      selector: 'td.number.total.ga',
      type: 'text'
    },
    goaltotal: {
      selector: 'td.number.total.gf',
      type: 'text'
    },
    point: {
      selector: '.number.points',
      type: 'text'
    }
  }
};

/* GET home page. */
app.get('/standing', function(req, res, next) {
  request('http://int.soccerway.com/national/myanmar/national-league/2016/regular-season/r33992/tables/',
    function(error, response, body) {
    var ranking = {};
    if (!error && response.statusCode == 200) {
      rankingResult = sX.scrape(body, option2);
    }
    //  scrappedResult.push({
    //   "date" : date,
    //   "home" : home,
    //   "away" : away,
    //   "goals" : goals
    // });
    //  scrappedResult.push({date:'', home: ''})

    res.status(200).json(rankingResult);
  });

});
var port = process.env.PORT || 3000;
// app.listen('port')
// console.log('Magic happens on port 8081');
// exports = module.exports = app;
app.listen('port')
  console.log('The party is on at port ' + port);
  exports = module.exports = app;
// http://int.soccerway.com/a/block_home_matches?block_id=block_home_matches_26&callback_params=%7B%22bookmaker_urls%22%3A%7B%2213%22%3A%5B%7B%22link%22%3A%22http%3A%2F%2Fwww.bet365.com%2Fhome%2F%3Faffiliate%3D365_179024%22%2C%22name%22%3A%22Bet%20365%22%7D%5D%7D%2C%22block_service_id%22%3A%22home_index_block_homematches%22%2C%22date%22%3A%222016-07-23%22%2C%22display%22%3A%22now_playing%22%7D&action=updateContent&params=%7B%7D
