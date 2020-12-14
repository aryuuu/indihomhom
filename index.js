const Twit = require('twit');
const fs = require('fs');

const config = require('./configs');
const handler = require('./handlers');

const app = new Twit(config);

app.get('search/tweets', 
  { 
    q: '@indihome', 
    count: 100 
  }, 
  handler.logger
);