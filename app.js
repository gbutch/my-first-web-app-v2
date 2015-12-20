var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render("pages/homepage");
});

app.get('/sign-in', function (req, res) {
  res.render("pages/sign-in");
});

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Node app listening at http://%s:%s', host, port);
});
