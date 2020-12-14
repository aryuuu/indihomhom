const Twit = require('twit');

const config = require('./configs');

const app = new Twit(config);

app.get('search/tweets', { q: '@indihome' }, (err, res) => {
  res.statuses.forEach(status => {
    console.log(`${status.user.name}: ${status.text}`)
  })
})