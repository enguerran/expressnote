var express = require('express');
var app = express();
var marked = require('marked');
var jade = require('jade');

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// simple logger
app.use(express.logger('dev'));
app.use(function(req, res, next) {
    console.log('receive request to %s with method %s', req.url, req.method);
  next();
});

// route
app.get('/hello', function(req, res) {
    res.send('Hello, World!');
});

app.get('/', function(req, res) {
    var data = { title: 'Home' };
    res.render('index', data);
});

app.get('/notes', function(req, res) {
    var data = {
        title: 'New note'
    };
    res.render('note', data);
});

app.post('/notes', function(req, res) {
    req.body.markedPreview = marked(req.body.edit) + '<br />';
    res.send(req.body);
});

var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
    console.log('expressnote is listening on port %d', server.address().port);
});