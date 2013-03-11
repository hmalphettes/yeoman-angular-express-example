'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// use livereload middleware
app.use(require('grunt-contrib-livereload/lib/utils').livereloadSnippet);

app.get('/hello', function(req, res){
  // res.send('hello!');
  res.send('bonjour!');
});

exports = module.exports = server;

exports.use = function() {
  app.use.apply(app, arguments);
};