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
		fs.readFile('data/'+name+'/topology.txt', 'utf-8', function(err, data){
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
		var dir = 'data/'+proj.name+'/';

		try{
			fs.mkdirSync(dir);
		} catch(err) {
			console.log('no need to mkdir: '+err);
		};
		
		fs.writeFile( dir +'topology.txt', str, 'utf-8', function(err){
			if (err) {
				console.log('write error:'+err);
				socket.emit('save', 'ERROR');
			} else {
				socket.emit('save', 'OK');
			}
			
		});
	});
	socket.on('delete', function(name){
		console.log('delete '+name);
		var dir = 'data/'+name+'/';
		fs.readdir(dir, function(err, files){
			if (err) {
				console.log('read dir error:'+err);
				socket.emit('delete', 'ERROR');
			} else {
				for (var i = 0; i < files.length; i++) {
					fs.unlinkSync(dir+files[i]);
				};
				fs.rmdirSync( dir);
				socket.emit('delete', 'OK');
			}
		});
		
	});
	socket.on('run', function(proj){
		console.log('run:'+proj.name);
		// proj:obj{
		// 	switches:obj{
		// 		Devices:array(obj)
		// 	}
		// 	links:array(string)
		// }

		//Switch id
		//Device type id tongdao rate vlan start end
		//Link id id
		var str = '';//JSON.stringify(proj);
		// for (var i = 0; i < proj.switches.length; i++) {
		for (var swid in proj.switches) {
			var sw = proj.switches[swid];
			str += 'Switch\t'+sw.id+'\n';
			for (var j = 0; j < sw.Devices.length; j++) {
				var dev = sw.Devices[j];
				str += 'Device\t'+dev.type+'\t'+dev.id+'\t'+dev.tongdao+'\t'
					+dev.rate+'\t'+dev.vlan+'\t'+dev.start+'\t'+dev.end+'\n';
			};
		};
		for (var i = 0; i < proj.links.length; i++) {
			var link = proj.links[i];
			str += 'Link\t'+link[0]+'\t'+link[1]+'\n';
		};
		console.log('ns3 topology: '+str);

		var dir = 'data/'+proj.name+'/';
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		};
		
		fs.writeFile(dir+'ns3config.txt', str, 'utf-8', function(err){
			if (err) {
				console.log('run error:'+err);
				socket.emit('run', 'ERROR');
			} else {
				var ns3dir = '/home/davidxn/ips/ns/';
				var appdir = '/home/davidxn/ips/';
				var datadir= appdir + dir;
				var config = datadir + 'ns3config.txt';

				var cmd = 'cd '+ns3dir+' && ';
				cmd += './waf --cwd='+datadir+' --run "scratch/ips/ips '+config+'" && ';
				cmd += 'cd '+appdir;
				console.log(cmd);
				exec(cmd, function(err, stdout, stderr) {
					if (err) {
						console.log('run error:'+err);
						socket.emit('run', 'ERROR');
					}else {
						console.log(stdout);
						//socket.emit('run', 'OK');
						var file = dir + 'IPS_REPORT.txt';
						fs.readFile(file, function(err, data){
							if(err){
								console.log('get report error: '+err);
								socket.emit('run', 'get report error:'+err);
							} else {
								socket.emit('run', {status:'OK',data:data.toString().split('\n')});
							}
						});
					}
				});
			}
			
		});
	});

	socket.on('status', function(pname, dev){
		var file = 'data/'+pname+'/IPS_'+dev+'.txt';
		fs.readFile(file, function(err, data){
			if(err){
				console.log('get status error: '+err);
			} else {
				//console.log(data.toString());
				socket.emit('status', data.toString().split('\n'));
			}
		});
	});
	socket.on('disconnect', function() {
		console.log('user left');
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
