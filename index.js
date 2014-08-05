var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	//res.send('<h1>Hello world</h1>');
	res.sendfile('index.html');
});

app.use(express.static(__dirname + '/www'));

io.on('connection', function(socket){
	console.log('a user connecting');

	var user = 'none';
	socket.on('login', function(u){
		console.log(u+' connected');
		user = u;
	});
	socket.on('chat message', function(msg){
		console.log(user + ' message: ' + msg);
		io.emit('chat message', user+':'+msg);
	});
	socket.on('disconnect', function(){
		console.log(user + ' disconnected');
	});
	//socket.broadcast.emit('hi');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
