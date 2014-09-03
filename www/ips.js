
project = {};
devices = [];
switches = [];
cnt_dev = 0;
ips_zoom = 1;

;(function() {
	
	var _initialised = false,		
	listDiv = document.getElementById("list"),

	showConnectionInfo = function(s) {
		list.innerHTML = s;
		list.style.display = "block";
	},	
	hideConnectionInfo = function() {
		list.style.display = "none";
	},
	connections = [],
	updateConnections = function(conn, remove) {
		return;
		if (!remove) connections.push(conn);
		else {
			var idx = -1;
			for (var i = 0; i < connections.length; i++) {
				if (connections[i] == conn) {
					idx = i; break;
				}
			}
			if (idx != -1) connections.splice(idx, 1);
		}
		if (connections.length > 0) {
			var s = "<span><strong>Connections</strong></span><br/><br/><table><tr><th>Scope</th><th>Source</th><th>Target</th></tr>";
			for (var j = 0; j < connections.length; j++) {
				s = s + "<tr><td>" + connections[j].scope + "</td>" + "<td>" + connections[j].sourceId + "</td><td>" + connections[j].targetId + "</td></tr>";
			}
			showConnectionInfo(s);
		} else 
			hideConnectionInfo();
	};
	
	jsPlumb.ready(function() {

		var instance = jsPlumb.getInstance({
			DragOptions : { cursor: 'pointer', zIndex:2000 },
			PaintStyle : { strokeStyle:'#666' },
			EndpointStyle : { width:5, height:5, strokeStyle:'#666' },
			Endpoint : "Rectangle",
			Anchors : ["TopCenter", "TopCenter"],
			Container:"drag-drop-demo"
		});		

		// suspend drawing and initialise.
		instance.doWhileSuspended(function() {										

			// bind to connection/connectionDetached events, and update the list of connections on screen.
			instance.bind("connection", function(info, originalEvent) {
				updateConnections(info.connection);
			});
			instance.bind("connectionDetached", function(info, originalEvent) {
				updateConnections(info.connection, true);
			});
			
			instance.bind("connectionMoved", function(info, originalEvent) {
				updateConnections(info.connection, true);
			});

			// configure some drop options for use by all endpoints.
			var exampleDropOptions = {
				tolerance:"touch",
				hoverClass:"dropHover",
				activeClass:"dragActive"
			};

			var exampleColor = "#00f";
			var exampleEndpoint = {
				endpoint:["Dot", { radius:5 }],
				anchor: "Continuous",
				paintStyle:{ width:15, height:15, fillStyle:exampleColor },
				hoverPaintStyle:{strokeStyle:"#dbe300"},
				isSource:true,
				reattach:true,
				scope:"blue",
				connectorStyle : { lineWidth:3, strokeStyle:exampleColor },
				// connector: ["Bezier", { curviness:63 } ],
				connector: "Straight",
				maxConnections:100,
				isTarget:true,			
				dropOptions : exampleDropOptions
			};

			function connect_dev (src, targ) {
				var src_ep = instance.getEndpoints(src)[0];
				var trg_ep = instance.getEndpoints(targ)[0];
				instance.connect({
					source:src_ep, 
					target:trg_ep
				});
			}

			// setup some DynamicAnchors for use with the blue endpoints			
			// and a function to set as the maxConnections callback.
			// var anchors = [[1, 0.2, 1, 0], [0.8, 1, 0, 1], [0, 0.8, -1, 0], [0.2, 0, 0, -1] ];
			var anchors = [ [0.5, 0, 0,-1], //"TopCenter")
							[0.5, 1, 0, 1], //"BottomCenter")
							[0, 0.5, -1, 0], //"LeftMiddle")
							[1, 0.5, 1, 0], //"RightMiddle")
							// [0.5, 0, 0,-1], //"Top")
							// [0.5, 1, 0, 1], //"Bottom")
							// [0, 0.5, -1, 0], //"Left")
							// [1, 0.5, 1, 0], //"Right")
							// // [0.5, 0.5, 0, 0], //"Center")
							// [1, 0, 0,-1], //"TopRight")
							// [1, 1, 0, 1], //"BottomRight")
							// [0, 0, 0, -1], //"TopLeft")
							// [0, 1, 0, 1] //"BottomLeft")
						  ];
			maxConnectionsCallback = function(info) {
				alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
			};		

			// make .window divs draggable
			instance.draggable(jsPlumb.getSelector(".drag-drop-demo .window"));

			// add endpoint of type 3 using a selector. 
			// instance.addEndpoint(jsPlumb.getSelector(".drag-drop-demo .window"), { anchor:anchors }, exampleEndpoint);
			instance.addEndpoint(jsPlumb.getSelector(".drag-drop-demo .window"), exampleEndpoint);

			var detachLinks = jsPlumb.getSelector(".drag-drop-demo .detach");
			instance.on(detachLinks, "click", function(e) {
				instance.detachAllConnections(this.getAttribute("rel"));
				jsPlumbUtil.consume(e);
			});

			instance.on(document.getElementById("clear"), "click", function(e) { 
				instance.detachEveryConnection();
				showConnectionInfo("");
				jsPlumbUtil.consume(e);
			});

			var socket = io();

			var	getProjectObject = function () {
				var sws = {};
				var links = [];
				var conns = instance.getAllConnections();
				for (var i = 0; i < conns.length; i++) {
					
					var src = document.getElementById(conns[i].source.id);
					var tgt = document.getElementById(conns[i].target.id);
					var srcType = src.getAttribute("type");
					var tgtType = tgt.getAttribute("type");

					var swdiv, devdiv;
					if (srcType == 'Switch' && tgtType == 'Switch') {
						var sw;
						links.push([src.id, tgt.id]);
						if (!sws[src.id]) {
							sw = {};
							sw.id = src.id;
							sw['x'] = src.offsetLeft;
							sw['y'] = src.offsetTop;
							sw['Devices'] = [];
							sw['type'] = 'Switch';
							sws[src.id] = sw;
						};
						if (!sws[tgt.id]) {
							sw = {};
							sw.id = tgt.id;
							sw['x'] = tgt.offsetLeft;
							sw['y'] = tgt.offsetTop;
							sw['Devices'] = [];
							sw['type'] = 'Switch';
							sws[tgt.id] = sw;
						};
						continue;
					} else if (srcType == 'Switch') {
						swdiv = src;
						devdiv = tgt;
					} else if (tgtType == 'Switch') {
						swdiv = tgt;
						devdiv = src;
					} else{
						continue;
					};

					//Switch id
					//Device type id tongdao rate vlan start end
					//Link id id

					if (!sws[swdiv.id]) {
						var sw = {};
						sw.id = swdiv.id;
						sw['x'] = swdiv.offsetLeft;
						sw['y'] = swdiv.offsetTop;
						sw['type'] = 'Switch';
						sw['Devices'] = [];
						sws[sw.id] = sw;
					};

					var dev = {};
					dev.id = devdiv.id;
					dev['tongdao'] = devdiv.getAttribute("tongdao");
					dev['rate'] = devdiv.getAttribute("rate");
					dev['vlan'] = devdiv.getAttribute("vlan");
					dev['start'] = devdiv.getAttribute("start");
					dev['end'] = devdiv.getAttribute("end");
					dev['x'] = devdiv.offsetLeft;
					dev['y'] = devdiv.offsetTop;
					dev.type = devdiv.getAttribute("type");
					
					var dsw = sws[sw.id];
					dsw['Devices'].push(dev);
				}

				var prj = {};
				prj.id = 123;
				prj.name = document.getElementById('pname').value;
				prj.switches = sws;
				prj.links = links;

				return prj;
			}


			if(1){//项目操作按钮
				document.getElementById("btn_open").onclick=function() {
					var pn = document.getElementById('plist').value;
					// pn = 'pname';
					socket.emit('open', pn);
				};
				socket.on('open', function(data){
					// alert(data.name);
					document.getElementById('drag-drop-demo').innerHTML = '';
					instance.detachAllConnections();
					for(var p in data.switches)
					{
						var sw = data.switches[p];
						// add switch
						insert_dev(sw);

						for (var i = 0; i < sw.Devices.length; i++) {
							// add device: sw.Devices[i]
							insert_dev(sw.Devices[i]);
							// add connection
							// instance.connect({ source: sw.id, target:sw.Devices[i].id }, ["Bezier", { curviness:63 } ]);
							connect_dev(sw.id, sw.Devices[i].id);
						};
					}
					for (var i = 0; i < data.links.length; i++) {
						// add connection: data.links[i][0], data.links[i][1]
						// instance.connect({ source: data.links[i][0], target: data.links[i][1] }, 
						// 	["Bezier", { curviness:63 } ]);
						connect_dev(data.links[i][0], data.links[i][1]);
					};
					document.getElementById('pname').value = data.name;
				});

				document.getElementById("btn_refresh").onclick=function() {
					socket.emit('refresh', '');
					
				};
				socket.on('refresh', function(files){
					var plist = document.getElementById('plist');
					
					var s = '';
					for(var i=0; i<files.length; ++i){
						s +='<option value="'+files[i]+'">'+files[i]+'</option>';
					}
					plist.innerHTML = s;
				});

				document.getElementById("btn_new").onclick=function() {
					// no socket, just delete all panel
					// document.getElementById('drag-drop-demo').innerHTML = '';
					location.reload();
				};

				document.getElementById("btn_save").onclick=function() {
					var prj = getProjectObject();
					socket.emit('save', prj);
				};
				socket.on('save', function (data) {
					if (data=='OK') {
						alert('Save OK');
					} else {
						alert('Save Error');
					}
				});

				// document.getElementById("btn_saveas").onclick=function() {
				// 	socket.emit('save', '');
				// };
				document.getElementById("btn_delete").onclick=function() {					
					var pn = document.getElementById('plist').value;
					socket.emit('delete', pn);
				};
				socket.on('delete', function(data){
					if (data=='OK') {
						alert('Delete OK');
						location.reload();
					} else {
						alert('Delete Error');
					}
				});
			}

			var current_dev_div = null;
			function UpdatePanel (dev) {
				if (current_dev_div == null || current_dev_div != dev.getAttribute('id')) {
					current_dev_div = dev;
					document.getElementById("dname").value = dev.getAttribute('id');
					document.getElementById("dtype").value = dev.getAttribute('type');
					document.getElementById("drate").value = dev.getAttribute('rate');
					document.getElementById("dvlan").value = dev.getAttribute('vlan');
					document.getElementById("dnum").value = dev.getAttribute('tongdao');
					document.getElementById("dstart").value = dev.getAttribute('start');
					document.getElementById("dend").value = dev.getAttribute('end');
				};
			}

			function ApplyPanel () {
				// dev.getAttribute('id', document.getElementById("dname").value);
				// dev.getAttribute('type', document.getElementById("dtype").value);
				current_dev_div.setAttribute('rate', document.getElementById("drate").value);
				current_dev_div.setAttribute('vlan', document.getElementById("dvlan").value);
				current_dev_div.setAttribute('tongdao', document.getElementById("dnum").value);
				current_dev_div.setAttribute('start', document.getElementById("dstart").value);
				current_dev_div.setAttribute('end', document.getElementById("dend").value);
			}

			function add_dev (type) {
				var id = type.toString() + cnt_dev;
				while(1){
					var find = document.getElementById(id);
					if (!find) {
						break;
					} else {
						cnt_dev++;
					}
				}
				
				// var s = '<div class="window" id="'+id+'">'+id+'</div>';
				var div=document.createElement("div");
				div.setAttribute("class", "window");
				div.setAttribute("id", id); 
				div.setAttribute("type", type); 
				div.setAttribute('rate', 1000);
				div.setAttribute('vlan', 'vlan0');
				div.setAttribute('tongdao', 12);
				div.setAttribute('start', 1);
				div.setAttribute('end', 10);
				div.innerHTML = '<img style="width:45px;" src="img/'+type+'.png" alt="'+type+'">';
				// div.innerHTML = id+'<div class="div_anchor"></div>';
				document.getElementById("drag-drop-demo").appendChild(div);
				instance.addEndpoint(id, { anchor:anchors }, exampleEndpoint);
				instance.draggable(id);

				div.onclick = function () {
					UpdatePanel(this);
				}

				cnt_dev++;
			}

			function insert_dev (dev) {
				var div=document.createElement("div");
				div.setAttribute("class", "window");
				div.setAttribute("id", dev.id); 
				div.setAttribute("type", dev.type); 
				if(dev.type != 'Switch')
				{
					div.setAttribute('rate', dev.rate);
					div.setAttribute('vlan', dev.vlan);
					div.setAttribute('tongdao', dev.tongdao);
					div.setAttribute('start', dev.start);
					div.setAttribute('end', dev.end);
				}
				div.setAttribute('style', 'top:'+dev.y+'px;left:'+dev.x+'px;');
				// div.offsetLeft = dev['x'];
				// div.offsetTop = dev['y'];

				div.innerHTML = '<img style="width:45px;" src="img/'+dev.type+'.png" alt="'+dev.type+'">';
				// div.innerHTML = id+'<div class="div_anchor"></div>';
				document.getElementById("drag-drop-demo").appendChild(div);
				instance.addEndpoint(dev.id, { anchor:anchors }, exampleEndpoint);
				instance.draggable(dev.id);

				div.onclick = function () {
					UpdatePanel(this);
				}

				cnt_dev++;
			}

			if(1){//面板操作按钮
				document.getElementById("btn_add_switch").onclick=function() {
					// this.innerHTML = 'hello'+cnt_dev;
					add_dev('Switch');
					return false;
				};
				
				document.getElementById("btn_add_mu").onclick=function() {
					add_dev('MU');
					return false;
				};

				document.getElementById("btn_add_it").onclick=function() {
					add_dev('IT');
					return false;
				};
				
				document.getElementById("btn_add_pc").onclick=function() {
					add_dev('PC');
					return false;
				};
				
				document.getElementById("btn_add_fc").onclick=function() {
					add_dev('FC');
					return false;
				};
				
				document.getElementById("btn_add_mn").onclick=function() {
					add_dev('MN');
					return false;
				};
				
				document.getElementById("btn_remove").onclick=function() {
					//ApplyPanel();
					if (current_dev_div != null) {
						instance.remove(current_dev_div.id);
						current_dev_div.parentNode.removeChild(current_dev_div);
						current_dev_div = null;
					}
				};

				document.getElementById("btn_run").onclick=function() {
					var prj = getProjectObject();
					socket.emit('run', prj);
				};
				socket.on('run', function(data){
					if (data=='OK') {
						alert('Run OK');
					} else {
						alert('Run Error');
					}
				});
			}
			
			if(1){//属性操作按钮
				document.getElementById("btn_apply").onclick=function() {
					ApplyPanel();
				};

				document.getElementById("btn_status").onclick=function() {
					//socket.emit('status', {pname: 'pname', devid: current_dev_div.id});
					socket.emit('status', 'pname', current_dev_div.id);
				};

				socket.on('status', function (data) {
					// show the data
					// console.log(data);

					drawLine(current_dev_div.id, data);

				});
				
				document.getElementById("btn_return").onclick=function() {
					document.getElementById('modal').style.display = 'none';
				}

			}
			
			document.getElementById("btn_refresh").click();

			

		});

		jsPlumb.fire("jsPlumbDemoLoaded", instance);
	});	
	
	
})();

function drawLine (label, data) {
	var points = [];
	var last;
	for (var i = 0; i*10 < data.length; i++) {
		var v = data[i*10];
		if(v==0 && i!=0){
			v = last;
		}
		points[i] = [i*0.05, v];
		last = v;
	};
	var ds = [
		{
			label: label,
			data: points
		}
	];


	document.getElementById('modal').style.display = 'block';
	$.plot("#placeholder", ds, {
		yaxis: {
			min: 0
		},
		xaxis: {
			tickDecimals: 0
		},
		series: {
	        lines: { show: true },
	        points: { show: true }
	    }
	});
}

function drawLine_chartjs (label, data) {
	var datalabels = [];
	var dataSet = [];

	var step = Math.ceil(data.length / 50);

	for (var i = 0; i*step < data.length; i++) {
		// datalabels[i] = Math.PI*i/8;
		// dataSet[i] = Math.sin(i)+100;
		datalabels[i] = i;
		dataSet[i] = data[i*step];

	};
	//var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData = {
		labels : datalabels,
		datasets : [
			{
				label: label,
				fillColor : "rgba(151,187,205,0.2)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : dataSet
			}
		]
	}
	document.getElementById('modal').style.display = 'block';
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}