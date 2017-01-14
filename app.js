var express = require('express')
var app = express()
var router = express.Router();
var moment = require('moment');

app.set('port', (process.env.PORT || 5000));

app.get('/:infoData', function (req, res) {
  var natural;
  var unix;
  var toChangeTimeStamp=req.params.infoData;
  if(isNaN(toChangeTimeStamp.charAt(0))){
  unix = moment(toChangeTimeStamp,"MMMM D, YYYY").unix();
  natural = toChangeTimeStamp
  }
  if(!isNaN(toChangeTimeStamp.charAt(0))){
  natural = moment(toChangeTimeStamp, "X");
  unix = toChangeTimeStamp;
  }
  var dateObj = { "unix": unix, "natural": natural };
  res.send(dateObj);
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
})