const moment = require('moment-timezone');

var deadline = moment(moment("20181015").tz("Australia/Sydney").format());
var now = moment(moment().tz("Australia/Sydney").format());

console.log(deadline.diff(now, "days"));
