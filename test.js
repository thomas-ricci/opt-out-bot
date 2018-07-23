const moment = require('moment-timezone');

var deadline = moment("20181015").tz("Australia/Sydney").format();
var now = moment().tz("Australia/Sydney").format();

var deadlineMoment = moment(deadline);
var nowMoment = moment(now);

console.log(deadlineMoment.diff(nowMoment, "days"));
