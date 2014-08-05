var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var exec = require('child_process').exec;

app.get('/', function(req, res){
	//res.send('<h1>Hello world</h1>');
	res.sendfile('www/ips.html');
});

app.use(express.static(__dirname + '/www'));

io.on('connection', function(socket){
	console.log('user connected');

	//socket.broadcast.emit('hi');
	socket.on('open', function(name){
		console.log('open');
		fs.readFile('data/'+name, 'utf-8', function(err, data){
			if (err) {
				console.log('open error:'+err);
			} else {
				var json = JSON.parse(data);
				console.log(json);
				socket.emit('open', json);
			}
			
		});
	});

	socket.on('refresh', function(){
		fs.readdir('data/', function(err, files){
			if (err) {
				console.log('read dir error:'+err);
			} else {
				console.log(files);
				socket.emit('refresh', files);
			}
			
		});
		
	});
	socket.on('save', function(proj){
		console.log(proj);
		var str = JSON.stringify(proj);
		fs.writeFile('data/'+proj.name, str, 'utf-8', function(err){
			if (err) {
				console.log('write error:'+err);
				socket.emit('save', 'ERROR');
			} else {
				socket.emit('save', 'OK');
			}
			
		});
	});
	socket.on('delete', function(name){
		console.log('delete'+name);
		fs.unlink('data/'+name, function(err){
			if (err) {
				console.log('delete error:'+err);
				socket.emit('delete', 'ERROR');
			} else {
				socket.emit('delete', 'OK');
			}
		});
	});
	socket.on('run', function(proj){
		console.log('run:'+proj.name);
		var str = JSON.stringify(proj);
		fs.writeFile('data/'+proj.name, str, 'utf-8', function(err){
			if (err) {
				console.log('run error:'+err);
				socket.emit('run', 'ERROR');
			} else {
				exec('ls -lh /usr', function(err, stdout, stderr) {
					if (err) {
						console.log('run error:'+err);
						socket.emit('run', 'ERROR');
					}else {
						console.log(stdout);
						socket.emit('run', 'OK');
					}
				});
			}
			
		});
	});

	socket.on('status', function(){
		//
	});
	socket.on('disconnect', function() {
		console.log('user left');
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
