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
let deadline = moment(moment("20190131").tz("Australia/Sydney").format());
let now = moment(moment().tz("Australia/Sydney").format());
let remaining = deadline.diff(now, "days");

if (remaining >= 0) {
  switch(remaining) {
    case 0:
    phrase = "The opt-out period has ended! If you didn't opt-out, A My Health Record will be created for you. To cancel your record: http://bit.ly/2Pu0JMA. This bot will now self-destruct. Cheers.";
    break;
    case 1:
    phrase = `${remaining} day left to #OptOut of #MyHealthRecord http://bit.ly/mhroptout`;
    break;
    default:
    phrase = `${remaining} days left to #OptOut of #MyHealthRecord http://bit.ly/mhroptout`;
    break;
  }

  Bot.tweet(phrase);
  console.log('Tweet sent:', phrase);
}
