'use strict';

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');

var socket = require('./routes/socket.js');

var app = express();
var server = http.createServer(app);

/* Configuration */
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('port', 9000);

// if (process.env.NODE_ENV === 'You are in test development') {
// 	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// }

/* Socket.io Communication */
var io = require('socket.io').listen(server);
io.sockets.on('connection', socket);

/* Start server */
server.listen(app.get('port'), function (){
  console.log('Listening on Port 9000!', app.get('port'));
});

module.exports = app;
