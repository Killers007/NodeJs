// Dependency
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Render homepage.
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

/*
Socket.io Setting
*/

io.on('connection', function(socket) {

    socket.on('send_location', function(data) {
        console.log('LOCATION SERVER ', data);
        socket.broadcast.emit('driver', data);
    });

    console.log('USER CONNETCED');

});

// Start
server.listen(process.env.PORT);
console.log('Open http://localhost:3000', process.env.PORT);