const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const moment = require('moment-timezone');

var Bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var deadline = moment("20181015").tz("Australia/Sydney").format();
var now = moment().tz("Australia/Sydney").format();
var deadlineMoment = moment(deadline);
var nowMoment = moment(now);
var remaining = deadlineMoment.diff(nowMoment, "days");

var phrase = remaining + " days left to opt out."

Bot.tweet(phrase);
console.log('Tweeted!', phrase);
