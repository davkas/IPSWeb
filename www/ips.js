~function(){
    var stage = $('#stage'),
        Node = window.Node,
        Segment = window.Segment;

    var NODE_DIMENSIONS = {
        w: 50,
        h: 50
    };

    var ProjectName;
    var g_Switches = [];
    var g_Links = [];//links between switches
    var switchIndex=0, devIndex=0;

    var FocusNode;

    function getProject () {
        var prj = {};
        prj.id = 123;
        prj.name = ProjectName;
        prj.switches = g_Switches;
        prj.links = g_Links;
        return prj;
    }

    function addLink (src_sw, dest_sw) {
        if (src_sw==null || dest_sw==null)
            return;
        var segA = new Segment({
            h: 5,
            stage: stage,
            origin: src_sw,
            destination: dest_sw
        }).attach();
        g_Links.push(segA);
    }

    function addSwitch (src_sw, new_sw) {
        var sid = "Switch"+switchIndex++;

        var cx=100,cy=200;
        if(new_sw != null){
            cx = new_sw.translate.x;
            cy = new_sw.translate.y;
        } else if(src_sw != null) {
            cx = src_sw.translate.x;
            cy = src_sw.translate.y + 100;
        }

        var nodeA = new Node({
            title: sid,
            stage: stage,
            w: NODE_DIMENSIONS.w,
            h: NODE_DIMENSIONS.h,
            x: cx,
            y: cy,
            events: {
                click: function() {
                    window.console.log(this);
                    FocusNode = this;
                    $("#add_switch").removeAttr("disabled");
                    $("#add_dev").removeAttr("disabled");
                    $("#pname").text(sid);
                }
            }
        }).attach();
        nodeA.ips_type = "Switch";
        nodeA.Devices = [];

        g_Switches.push(nodeA);

        if (src_sw!=null) {
            addLink(src_sw, nodeA);
        };
    }

    function addDevice (sw, type, dev) {
        if (sw==null) 
            return;

        var devid = type+devIndex++;

        var cx=100, cy=200;
        if (dev!=null) {
            //open from file
            cx = dev.translate.x;
            cy = dev.translate.y;
        } else {
            //new
            cx = sw.translate.x + 100*(sw.Devices.length + 1);
            cy = sw.translate.y + 100;
        };

        var nodeA = new Node({
            title: devid,
            stage: stage,
            w: NODE_DIMENSIONS.w,
            h: NODE_DIMENSIONS.h,
            x: cx,
            y: cy,
            events: {
                click: function() {
                    window.console.log(this);
                    FocusNode = this;
                    $("#add_switch").attr("disabled", "disabled");
                    $("#add_dev").attr("disabled", "disabled");
                    $("#pname").text(devid);
                }
            }
        }).attach();

        nodeA.ips_type=type;
        nodeA.tongdao=12;
        nodeA.rate=1000;
        nodeA.vlan="vlan0";
        nodeA.start=1;
        nodeA.end=10;

        addLink(sw, nodeA);
        sw.Devices.push(nodeA);
    }

    function delNode (node) {
        if(node.ips_type == "Switch"){
            for (var i = 0; i < node.Devices.length; i++) {
                var dev = node.Devices[i];
                for (var j = 0; j < dev.segments.length; j++) {
                    var seg = dev.segments[j];
                    seg.remove();
                };
                dev.remove();
            };
        }

        for (var i = 0; i < node.segments.length; i++) {
            node.segments[i].remove();
        };
        node.remove();
    }

    function init () {
        $("#add_switch").click(function(){
            addSwitch(FocusNode, null);
        });
        $("#add_dev").click(function(){
            addDevice(FocusNode, "MU", null)
        });
        $("#remove").click(function(){
            delNode(FocusNode);
        });
    }

    init();


}();