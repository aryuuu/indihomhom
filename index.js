const Twit = require('twit');
const fs = require('fs');
const readline = require('readline');

const config = require('./configs');
const handler = require('./handlers');

const settings = {};
handler.questioner(settings);
fs.writeFileSync(`./outputs/${settings.outputFileName}`, '');

const app = new Twit(config);

app.get('search/tweets', 
  { 
    q: '@indihome', 
    count: 100 
  }, 
  handler.logger
);