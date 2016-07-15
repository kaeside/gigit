// var socket_io = require('socket.io');
// var http = require('http');
// var express = require('express');
//
// var app = express();
// app.use(express.static('public'));
//
// var server = http.Server(app);
// var io = socket_io(server);
//
// io.on('connection', function (socket) {
//     console.log('Client connected');
//
//     // socket.on('send:message', function (data) {
//     //     socket.broadcast.emit('send:message', {
//     //         text: data.text
//     //     });
//     // });
// });
//
// server.listen(8080);
//
// var io = require('socket.io')('http://localhost:8080');
//


var socket_io = require('socket.io');
var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));

var server = http.Server(app);
var io = socket_io(server);

io.on('connection', function (socket) {
    console.log('Client connected');
});

server.listen(8080);

// module.exports = io;
