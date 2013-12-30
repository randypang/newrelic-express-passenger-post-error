var newrelic = require('newrelic');
var express = require('express');
var http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function(req, res) { res.send(200); });
app.post('/post', function(req, res) { res.send(200); });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
