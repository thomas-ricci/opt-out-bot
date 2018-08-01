const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const moment = require('moment-timezone');

let Bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
// test

let phrase = '';
let url = "https://bit.ly/2KXekd9";
let deadline = moment(moment("20181015").tz("Australia/Sydney").format());
let now = moment(moment().tz("Australia/Sydney").format());
let remaining = deadline.diff(now, "days");
if (remaining === 1) {
  phrase = remaining + " day left to #OptOut of #MyHealthRecord.";
} else {
  phrase = remaining + " days left to #OptOut of #MyHealthRecord.";
}

Bot.tweet(phrase);
console.log('Tweet sent:', phrase);
