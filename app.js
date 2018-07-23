const Twitter = require('twitter');
const config = require('./config.js');


var client = new Twitter(config);
client.post('statuses/update', {
  status: 'I am a tweet'
}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});
