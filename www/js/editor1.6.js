///global setting
Q.DefaultStyles[Q.Styles.SHAPE_FILL_COLOR] = Q.toColor(0xCCCCCCCC);
Q.Defaults.GROUP_MIN_SIZE = {width: 100, height: 60};
//扩展连线UI
function FlexEdgeUI(edge, graph) {
    Q.doSuperConstructor(this, FlexEdgeUI, arguments);
}
FlexEdgeUI.prototype = {
    drawEdge: function (path, fromUI, toUI, edgeType, fromBounds, toBounds) {
        var from = fromBounds.center;
        var to = toBounds.center;
        var cx = (from.x + to.x) / 2;
        var cy = (from.y + to.y) / 2;
        path.curveTo(from.x, cy, to.x, cy);
    }
}
Q.extend(FlexEdgeUI, Q.EdgeUI);
FlexEdgeUI.drawReferenceLine = function (g, start, end, type) {
    g.moveTo(start.x, start.y);
    var cx = (start.x + end.x) / 2;
    var cy = (start.y + end.y) / 2;
    g.bezierCurveTo(start.x, cy, end.x, cy, end.x, end.y);
}

//初始化
var graph;
$(function(){
    graph = new Q.Graph("canvas");
    graph.editable = true;
    graph.removeSelectionByInteraction = function(evt){
        var selection = this.selectionModel.datas;
        if(!selection || selection.length == 0){
            return false;
        }
        Q.confirm("确认删除图元 - " + selection.length, function(){
            var selection = this.removeSelection();
        }, this);
    }

    var gradient = new Q.Gradient(Q.Consts.GRADIENT_TYPE_LINEAR, ['#00d4f9', '#1ea6e6'], null, Math.PI/2);
    graph.onElementCreated = function (element, evt, dragInfo) {
        if (element instanceof Q.Text) {
            element.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, "#2898E0");
            element.setStyle(Q.Styles.LABEL_COLOR, "#FFF");
            element.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(3, 5));
            return;
        }
        if(dragInfo && dragInfo.size){
            element.size = dragInfo.size;
        }
        if (element instanceof Q.Edge) {
            element.setStyle(Q.Styles.ARROW_TO, false);
            return;
        } else if (element instanceof Q.ShapeNode) {
            if(dragInfo && dragInfo.shapeType){
                element.path = Q.Shapes.getShape(dragInfo.shapeType, -20, -20, 40, 40);
                element.setStyle(Q.Styles.LAYOUT_BY_PATH, false);
                element.setStyle(Q.Styles.SHAPE_STROKE, 4);
                element.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#e9e9e9");
                element.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, gradient);
            }

        } else if (element instanceof Q.Group) {
            element.padding = 10;
        }
    }
    initToolbar(document.getElementById("toolbar"), graph);
    initToolbox();
    initContextMenu(graph);
    <!--注释的内容initDatas();-->
});

//初始化数据
function initDatas() {
    Q.loadJSON("./data/topo.json", function(json){
        graph.parseJSON(json);
        graph.zoomToOverview();
    })
}

//初始化拖拽节点列表
function initToolbox() {
    var toolbox = document.getElementById("toolbox");
    createDNDImage(toolbox, "style/images/node_icon.png", "终端", {type: "Node", image: "Q.Graphs.node"});
    createDNDImage(toolbox, "style/images/exchanger_icon.png", "交换机", {type: "Node", image: "Q.Graphs.exchanger2"});
    createDNDImage(toolbox, "style/images/server_icon.png", "服务器", {type: "Node", image: "Q.Graphs.server"});
    createDNDImage(toolbox, "style/images/text_icon.png", "文本", {type: "Text", image: ""});
    createDNDImage(toolbox, "style/images/group_cloud.png", "云组", {type: "Group", groupImage: "graphs.group_cloud"});
    createDNDImage(toolbox, "style/images/roundRect.png", "矩形", {type: "ShapeNode", label: "Rect", shapeType: Q.Consts.SHAPE_ROUNDRECT});
    createDNDImage(toolbox, "style/images/circle.png", "圆形", {type: "ShapeNode", label: "Round", shapeType: Q.Consts.SHAPE_CIRCLE});
    createDNDImage(toolbox, "./network/images2/exchange.png", "交换机", {size: {width: 40}});
    createDNDImage(toolbox, "./network/images2/exchange2.png", "交换机2", {size: {width: 40}});
    createDNDImage(toolbox, "./network/images2/firewall.png", "防火墙", {size: {width: 40}});
    createDNDImage(toolbox, "./network/images2/pc.png", "PC", {size: {width: 40}});
    createDNDImage(toolbox, "./network/images2/router.png", "路由", {size: {width: 40}});
    createDNDImage(toolbox, "./network/images2/server.png", "服务器", {size: {width: 40}});
    createDNDImage(toolbox, "./network/images2/server2.png", "服务器", {size: {width: 40}});
}

//初始化工具栏
function initToolbar(toolbar, graph) {
    function setInteractionMode(evt, info, interactionProperties) {
        graph.interactionMode = info.value;
        graph.interactionProperties = interactionProperties || info;
    }

    toolbar.innerHTML = "";
    var buttons = {
        interactionModes: [
            {name: "默认模式", value: Q.Consts.INTERACTION_MODE_DEFAULT, selected: true, icon: 'style/images/default_icon.png', action: setInteractionMode},
            {name: '框选模式', value: Q.Consts.INTERACTION_MODE_SELECTION, icon: 'style/images/rectangle_selection_icon.png', action: setInteractionMode},
            {name: '浏览模式', value: Q.Consts.INTERACTION_MODE_VIEW, icon: 'style/images/pan_icon.png', action: setInteractionMode}
        ],
        zoom: [
            {name: "放大", icon: "style/images/zoomin_icon.png", action: function () {
                this.zoomIn()
            }},
            {name: "缩小", icon: "style/images/zoomout_icon.png", action: function () {
                this.zoomOut()
            }},
            {name: "1:1", action: function () {
                this.scale = 1;
            }},
            {name: '纵览', icon: 'style/images/overview_icon.png', action: function () {
                this.zoomToOverview()
            }}
        ],
        editor: [
            {name: '简单连线', value: Q.Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE, icon: 'style/images/edge_icon.png', action: setInteractionMode},
            {name: '多点连线', value: Q.Consts.INTERACTION_MODE_CREATE_EDGE, icon: 'style/images/shape_edge_icon.png', action: setInteractionMode},
            {name: '创建曲线', value: Q.Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE, icon: 'style/images/edge_flex_icon.png', action: setInteractionMode, uiClass: FlexEdgeUI},
            {name: '创建L型连线', value: Q.Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE, icon: 'style/images/edge_VH_icon.png', action: setInteractionMode, edgeType: Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL},
            {name: '创建多边形', value: Q.Consts.INTERACTION_MODE_CREATE_SHAPE, icon: 'style/images/polygon.png', action: setInteractionMode},
            {name: '创建线条', value: Q.Consts.INTERACTION_MODE_CREATE_LINE, icon: 'style/images/line.png', action: setInteractionMode}
        ],
        search: {name: 'Find', icon: "style/images/search.png", placeholder: "Name", type: "search", id: "search_input",
            search: function (name, info) {
                var result = [];
                var reg = new RegExp(name, "i");
                graph.forEach(function (e) {
                    if (e.name && reg.test(e.name)) {
                        result.push(e.id);
                    }
                }, graph);
                return result;
            }, select: function (item) {
                item = graph.graphModel.getById(item);
                if (!item) {
                    return false;
                }
                graph.setSelection(item);
                graph.sendToTop(item);
                var bounds = graph.getUIBounds(item);
                if (bounds) {
                    graph.centerTo(bounds.cx, bounds.cy, Math.max(2, graph.scale), true);
                }
            }
        },
        export: {
            name: "导出图片", action: function (evt) {
                showExportPanel(this);
            }
        },
        save: {
            name: "导出 JSON", action: function(){
                showJSONPanel();
            }
        }
    };
    createToolBar(buttons, toolbar, graph, false, false);
}

//初始化右键菜单
function initContextMenu(graph){
    var menu = new PopupMenu();
    function getPageXY(evt){
        if (evt.touches && evt.touches.length) {
            evt = evt.touches[0];
        }
        return {x: evt.pageX, y: evt.pageY};
    }
    function showMenu(evt, graph){
        var xy = getPageXY(evt);
        var x = xy.x, y = xy.y;
        var data = graph.getElementByMouseEvent(evt);

        var items = [];
        if (data) {
            var isShapeNode = data instanceof Q.ShapeNode;
            var isGroup = data instanceof Q.Group;
            var isNode = !isShapeNode && data instanceof Q.Node;
            var isEdge = data instanceof Q.Edge;

            items.push({text: "编辑名称", action: function(evt, item){
                Q.prompt("输入图元名称", data.name || "", function(name){
                    if(name === null){
                        return;
                    }
                    data.name = name;
                })
            }});
            if(isEdge){
                var isDashLine = data.getStyle(Q.Styles.EDGE_LINE_DASH) || Q.DefaultStyles[Q.Styles.EDGE_LINE_DASH];
                items.push({text: isDashLine ? "实线样式" : "虚线样式", action: function(evt, item){
                    data.setStyle(Q.Styles.EDGE_LINE_DASH, isDashLine ? null : [5, 3]);
                }});
                items.push({text: "连线线宽", action: function(evt, item){
                    Q.prompt("输入连线线宽", data.getStyle(Q.Styles.EDGE_WIDTH) || Q.DefaultStyles[Q.Styles.EDGE_WIDTH], function(lineWidth){
                        if(lineWidth === null){
                            return;
                        }
                        lineWidth = parseFloat(lineWidth);
                        data.setStyle(Q.Styles.EDGE_WIDTH, lineWidth);
                    })
                }});
                items.push({text: "连线颜色", action: function(evt, item){
                    Q.prompt("输入连线颜色", data.getStyle(Q.Styles.EDGE_COLOR) || Q.DefaultStyles[Q.Styles.EDGE_COLOR], function(color){
                        if(color === null){
                            return;
                        }
                        data.setStyle(Q.Styles.EDGE_COLOR, color);
                    })
                }});
            }else if(data.parent instanceof Q.Group){
                items.push({text: "脱离分组", action: function(){
                    data.parent = null;
                }})
            }
            items.push(PopupMenu.Separator);
            items.push({text: "置顶显示", action: function(evt, item){
                data.zIndex = 1;
                graph.sendToTop(data);
                graph.invalidate();
            }});
            items.push({text: "置底显示", action: function(evt, item){
                data.zIndex = -1;
                graph.sendToBottom(data);
                graph.invalidate();
            }});
            items.push({text: "恢复默认层", action: function(evt, item){
                data.zIndex = 0;
                graph.invalidate();
            }});
            items.push(PopupMenu.Separator);
        }
        items.push({text: "清空画布", action: function(){
            graph.clear();
        }})
        items.push(PopupMenu.Separator);

        items.push({text: "放大", action: function(evt, item){
            var localXY = graph.globalToLocal(evt);
            graph.zoomIn(localXY.x, localXY.y, true);
        }});
        items.push({text: "缩小", action: function(evt, item){
            var localXY = graph.globalToLocal(evt);
            graph.zoomOut(localXY.x, localXY.y, true);
        }});
        items.push({text: "1:1", action: function(evt, item){
            var localXY = graph.globalToLocal(evt);
            graph.scale = 1;
        }});
        items.push(PopupMenu.Separator);
        var currentMode = graph.interactionMode;
        var interactons = [
            {text: "平移模式", value: Q.Consts.INTERACTION_MODE_DEFAULT},
            {text: "框选模式", value: Q.Consts.INTERACTION_MODE_SELECTION}
        ];
        for (var i = 0, l = interactons.length; i < l; i++) {
            var mode = interactons[i];
            if (mode.value == currentMode) {
                mode.selected = true;
            }
            mode.action = function (evt, item) {
                graph.interactionMode = item.value;
            };
            items.push(mode)
        }
        items.push(PopupMenu.Separator);
        items.push({html: "<a href='http://qunee.com' target='_blank'>" + Q.name + ' - ' + Q.version + "</a>"});
        menu.items = items;
        menu.showAt(x, y);
    }
    if(Q.isTouchSupport){
        graph.addCustomInteraction({
            onlongpress: function (evt, graph) {
                showMenu(evt, graph)
            },
            onstart: function (evt) {
                menu.hide();
            }
        });
    }else{
        graph.html.oncontextmenu = function(evt){
            Q.stopEvent(evt);
            showMenu(evt, graph);
        }
        graph.addCustomInteraction({
            onstart: function (evt) {
                menu.hide();
            }
        });
    }
}