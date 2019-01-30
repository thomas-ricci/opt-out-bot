const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const moment = require('moment-timezone');

let Bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

let phrase = '';
let url = "https://bit.ly/2KXekd9";
let now = moment().tz("Australia/Sydney");
let deadline = moment('20190131').tz("Australia/Sydney");
let remainingInt = deadline.diff(now, "days");
let remainingFloat = deadline.diff(now, "days", true);

if (remainingFloat > 0) {
  switch (remainingInt) {
    case 1:
      phrase = `${remainingInt} day left to #OptOut of #MyHealthRecord http://bit.ly/mhroptout`;
      break;
    default:
      phrase = `${remainingInt} days left to #OptOut of #MyHealthRecord http://bit.ly/mhroptout`;
      break;
  }
} else if (remainingFloat < 0 && remainingFloat > -1) { // deadline day
  phrase = "Last day to #OptOut of #MyHealthRecord http://bit.ly/mhroptout";
} else if (remainingFloat < -1) {
  phrase = "The opt-out period has ended! If you didn't opt-out, A #MyHealthRecord will be created for you. To cancel your record: http://bit.ly/2Pu0JMA. This bot will now self-destruct. Cheers.";
}

if (remainingFloat > -2) {
  Bot.tweet(phrase);
  console.log('Tweet sent:', phrase);
}
