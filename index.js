// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// io.on('connection', function(socket){
//   console.log('a user connected');

//   socket.on('reload-chat', function(data){
//   	socket.emit("reload_chat_"+data.to, data);
//     console.log(JSON.stringify(data));
//   });

//   socket.on('emit_all', function(data){
//   	console.log('all');
//   	socket.emit("all", data);
//   });
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

var http = require('http')
var express = require('express')
var socketio = require('socket.io')
var app = express(server)
var server = http.Server(app)
var io = socketio(server)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

// io.on('connection', function(socket){
//   socket.on('echo', function(data){
//     socket.emit('echo', data);
//   });
// });

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('reload-chat', function(data){
  	socket.broadcast.emit("reload_chat_"+data.to, data);
    console.log(JSON.stringify(data));
  });

});

server.listen(3000); 