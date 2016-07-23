ScrapperX (scrapper-x) NPM module
=================================

scrapper-x is a node JS module which helps in gathering data from many websites.
The module can gather data from websites having list like data formats.. (example : search results , User profile lists ,etc )
The output is a JSON containing all the required information specified in the configuration file .

#Installation
npm install scrapper-x

#Usage
``` 
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
    },
    customtext: 'haha'
  }
};


  request('https://in.search.yahoo.com/search?p=yo', function(error, response, body) {
    var scrappedResult = {};
    if (!error && response.statusCode == 200) {
      
      scrappedResult = sX.scrape(body, config);  //Simple scrape method that scrapes based on the config passed

    }
    console.log(scrappedResult);
  });
```

#Output
```
[
   {
      "header":"Yo - YouTube",
      "link":"http://www.youtube.com/user/Yo",
      "description":"Yo added to Favorites and liked 4 years ago 3:57. Play next; Play now;",
      "customtext": "haha"
   },
   {
      "header":"YO! Share and Connect without the Internet",
      "link":"https://www.yo.com/",
      "description":"YO! is the world's first 'Off-Grid' messaging, sharing and content discovery app.",
      "customtext": "haha"
   },
   {
      "header":"Yo | Define Yo at Dictionary.com",
      "link":"http://dictionary.reference.com/browse/yo",
      "description":"interjection 1. (used as an exclamation to get someone's attention, express excitement ",
      "customtext": "haha"
   },
   {
      "header":"Yo - Wikipedia, the free encyclopedia",
      "link":"http://en.wikipedia.org/wiki/Yo",
      "description":"Yo is an English slang interjection commonly associated with American English. ",
      "customtext": "haha"
   },
   {
      "header":"YouTube",
      "link":"http://www.youtube.com/",
      "description":"Share your videos with friends, family, and the world ",
      "customtext": "haha"
   },
   {
      "header":" Yo | Definition of yo by Merriam-Webster",
      "link":"http://www.merriam-webster.com/dictionary/yo",
      "description":"Full Definition of YO —used especially to call attention, to indicate attentiveness ",
      "customtext": "haha"
   },
   {
      "header":" Yo - definition of yo by The Free Dictionary",
      "link":"http://www.thefreedictionary.com/yo",
      "description":"yo (yō) interj. Slang. 1. Used as a greeting or to attract someone's attention. ",
      "customtext": "haha"
   },
   {
      "header":"Urban Dictionary: yo",
      "link":"http://www.urbandictionary.com/define.php?term=yo",
      "description":"1) How's yo momma? 2) Hey, yo! What's up, yo? 3) Yo! What the hell do you think",
      "customtext": "haha"
   },
   {
      "header":" Yo- yo - Wikipedia, the free encyclopedia",
      "link":"http://en.wikipedia.org/wiki/Yo-yo",
      "description":"A yo-yo competition normally consists of two parts, a set of ",
      "customtext": "haha"
   },
   {
      "header":" YO!Company - Simon Woodroffe's Innovation Hub",
      "link":"http://yo.co.uk/",
      "description":"The latest YO! Project: YO! Home.",
      "customtext": "haha"
   }
]
```
