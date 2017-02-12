var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var app = express();

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  serveFile('index.html', res);
});

app.get('/index.html', function(req, res) {
  serveFile('index.html', res);
});

app.get('/right-sidebar.html', function(req, res) {
  serveFile('right-sidebar.html', res);
});

app.get('/no-sidebar.html', function(req, res) {
  serveFile('no-sidebar.html', res);
});

app.get('/left-sidebar.html', function(req, res) {
  serveFile('left-sidebar.html', res);
});

function serveFile(path, res) {
  fs.readFile(path, function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    res.write(data);
    res.end();
  });
}

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
