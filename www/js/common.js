//dialog
function showError(error) {
    if(Q.isString(error)){
        showDialog("Error", error);
        return;
    }
    if(error.stack){
        showDialog(error.message, error.stack);
    }
}

function showDialog(title, content){
    if(content === undefined){
        content = title;
        title = null;
    }
    $("#q-message .modal-title").html(title || "消息");
    $("#q-message .modal-body").html(content);
    $('#q-message').modal("show");
}

function hideDialog(){
    $('#q-message').modal("hide");
}

//PopupMenu
function showDivAt(div, x, y){
    var body = document.documentElement;
    var bounds = new Q.Rect(window.pageXOffset, window.pageYOffset, body.clientWidth - 2, body.clientHeight - 2);
    var width = div.offsetWidth;
    var height = div.offsetHeight;

    if (x + width > bounds.x + bounds.width) {
        x = bounds.x + bounds.width - width;
    }
    if (y + height > bounds.y + bounds.height) {
        y = bounds.y + bounds.height - height;
    }
    if (x < bounds.x) {
        x = bounds.x;
    }
    if (y < bounds.y) {
        y = bounds.y;
    }
    div.style.left = x + 'px';
    div.style.top = y + 'px';
}
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
var PopupMenu = function(items){
    this.items = items || [];
}
var menuClassName = 'dropdown-menu';
PopupMenu.Separator = 'divider';

PopupMenu.prototype = {
    dom : null,
    _invalidateFlag: true,
    add : function(item){
        this.items.push(item);
        this._invalidateFlag = true;
    },
    addSeparator : function() {
        this.add(PopupMenu.Separator);
    },
    showAt: function(x, y){
        if(!this.items || !this.items.length){
            return false;
        }
        if(this._invalidateFlag){
            this.render();
        }
        this.dom.style.display = "block";
        document.body.appendChild(this.dom);
        showDivAt(this.dom, x, y);
    },
    hide : function(){
        if(this.dom && this.dom.parentNode){
            this.dom.parentNode.removeChild(this.dom);
        }
    },

    render : function(){
        this._invalidateFlag = false;
        if(!this.dom){
            this.dom = document.createElement('ul');
            this.dom.setAttribute("role", "menu");
            this.dom.className = menuClassName;
            var startEventName = Q.isTouchSupport ? "touchstart" : "mousedown";

            if(!this.stopEditWhenClickOnWindow){
                var _this = this;
                this.stopEditWhenClickOnWindow = function(evt){
                    if(isDescendant(_this.html, evt.target)){
                        _this.hide();
                    }
                }
            }
            window.addEventListener("mousedown", this.stopEditWhenClickOnWindow, true);
            this.dom.addEventListener(startEventName, function(evt){
                Q.stopEvent(evt);
            }, false);
        }else{
            this.dom.innerHTML = "";
        }
        for (var i = 0,l = this.items.length; i < l; i++) {
            var item = this.renderItem(this.items[i]);
            this.dom.appendChild(item);
        }
    },
    html2Escape: function(sHtml) {
        return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
    },
    renderItem : function(menuItem, zIndex){
        var dom = document.createElement('li');
        dom.setAttribute("role", "presentation");
        if(menuItem == PopupMenu.Separator){
            dom.className = PopupMenu.Separator;
            dom.innerHTML = " ";
            return dom;
        }
        if(Q.isString(menuItem)){
            dom.innerHTML = '<a role="menuitem" tabindex="-1" href="#">' + this.html2Escape(menuItem) + '</a>';
            return dom;
        }
        if(menuItem.selected){
            dom.style.backgroundPosition = '3px 5px';
            dom.style.backgroundRepeat = 'no-repeat';
            dom.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVQ4y2P4//8/AyWYYdQA7AYAAZuamlo7ED+H4naQGNEGQDX/R8PtpBjwHIsBz+lqAGVeoDgQR1MiaRgAnxW7Q0QEK0cAAAAASUVORK5CYII=')";
        }
        var a = document.createElement("a");
        a.setAttribute("role", "menuitem");
        a.setAttribute("tabindex", "-1");
        a.setAttribute("href", "javascript:void(0)");
        dom.appendChild(a);

        if(menuItem.html){
            a.innerHTML = menuItem.html;
        }else{
            var text = menuItem.text || menuItem.name;
            if(text){
                a.innerHTML = this.html2Escape(text);
            }
        }
        var className = menuItem.className;
        if(className){
            dom.className = className;
        }
        var call = menuItem.action;
        var self = this;

        var onclick = function(evt){
            if (call) {
                call.call(menuItem.scope, evt, menuItem);
            }
            if(!Q.isIOS){
                evt.target.focus();
            }
            setTimeout(function(){
                self.hide();
            }, 100);
        };
        if(Q.isTouchSupport){
//            dom.ontouchstart = onclick;
            a.ontouchstart = onclick;
        }else{
            dom.onclick = onclick;
        }
        return dom;
    }
}
Object.defineProperties(PopupMenu.prototype, {
    items: {
        get:function(){
            return this._items;
        },
        set: function(v){
            this._items = v;
            this._invalidateFlag = true;
        }
    }
});

///ExportPanel
function ResizeBox(parent, onBoundsChange){
    this.onBoundsChange = onBoundsChange;
    this.parent = parent;
    this.handleSize = Q.isTouchSupport ? 20 : 8;

    this.boundsDiv = this._createDiv(this.parent);
    this.boundsDiv.type = "border";
    this.boundsDiv.style.position = "absolute";
    this.boundsDiv.style.border = "dashed 1px #888";
    var handles = "lt,t,rt,l,r,lb,b,rb";
    handles = handles.split(",");
    for(var i= 0,l=handles.length;i<l;i++){
        var name = handles[i];
        var handle = this._createDiv(this.parent);
        handle.type = "handle";
        handle.name = name;
        handle.style.position = "absolute";
        handle.style.backgroundColor = "#FFF";
        handle.style.border = "solid 1px #555";
        handle.style.width = handle.style.height = this.handleSize + "px";
        var cursor;
        if(name == 'lt' || name == 'rb'){
            cursor = "nwse-resize";
        }else if(name == 'rt' || name == 'lb'){
            cursor = "nesw-resize";
        }else if(name == 't' || name == 'b'){
            cursor = "ns-resize";
        }else{
            cursor = "ew-resize";
        }
        handle.style.cursor = cursor;
        this[handles[i]] = handle;
    }
    this.interaction = new Q.DragSupport(this.parent, this);
}
ResizeBox.prototype = {
    destroy: function(){
        this.interaction.destroy();
    },
    update: function(width, height){
        this.wholeBounds = new Q.Rect(0, 0, width, height);
        this._setBounds(this.wholeBounds.clone());
    },
    ondblclick: function(evt){
        if(this._bounds.equals(this.wholeBounds)){
            if(!this.oldBounds){
                this.oldBounds = this.wholeBounds.clone(). grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5);
            }
            this._setBounds(this.oldBounds, true);
            return;
        }
        this._setBounds(this.wholeBounds.clone(), true);
    },
    startdrag: function(evt){
        if(evt.target.type){
            this.dragItem= evt.target;
        }
    },
    ondrag: function(evt){
        if(!this.dragItem){
            return;
        }
        Q.stopEvent(evt);
        var dx = evt.dx;
        var dy = evt.dy;
        if(this.dragItem.type == "border"){
            this._bounds.offset(dx, dy);
            this._setBounds(this._bounds, true);
        }else if(this.dragItem.type == "handle"){
            var name = this.dragItem.name;
            if(name[0] == 'l'){
                this._bounds.x += dx;
                this._bounds.width -= dx;
            }else if(name[0] == 'r'){
                this._bounds.width += dx;
            }
            if(name[name.length - 1] == 't'){
                this._bounds.y += dy;
                this._bounds.height -= dy;
            }else if(name[name.length - 1] == 'b'){
                this._bounds.height += dy;
            }
            this._setBounds(this._bounds, true);
        }

    },
    enddrag: function(evt){
        if(!this.dragItem){
            return;
        }
        this.dragItem = false;
        if(this._bounds.width < 0){
            this._bounds.x += this._bounds.width;
            this._bounds.width = -this._bounds.width;
        }else if(this._bounds.width == 0){
            this._bounds.width = 1;
        }
        if(this._bounds.height < 0){
            this._bounds.y += this._bounds.height;
            this._bounds.height = -this._bounds.height;
        }else if(this._bounds.height == 0){
            this._bounds.height = 1;
        }
        if(this._bounds.width > this.wholeBounds.width){
            this._bounds.width = this.wholeBounds.width;
        }
        if(this._bounds.height > this.wholeBounds.height){
            this._bounds.height = this.wholeBounds.height;
        }
        if(this._bounds.x < 0){
            this._bounds.x = 0;
        }
        if(this._bounds.y < 0){
            this._bounds.y = 0;
        }
        if(this._bounds.right > this.wholeBounds.width){
            this._bounds.x -= this._bounds.right - this.wholeBounds.width;
        }
        if(this._bounds.bottom > this.wholeBounds.height){
            this._bounds.y -= this._bounds.bottom - this.wholeBounds.height;
        }

        this._setBounds(this._bounds, true);
    },
    _createDiv: function(parent){
        var div = document.createElement("div");
        parent.appendChild(div);
        return div;
    },
    _setHandleLocation: function(handle, x, y){
        handle.style.left = (x - this.handleSize / 2) + "px";
        handle.style.top = (y - this.handleSize / 2) + "px";
    },
    _setBounds: function(bounds){
        if(!bounds.equals(this.wholeBounds)){
            this.oldBounds = bounds;
        }
        this._bounds = bounds;
        bounds = bounds.clone();
        bounds.width += 1;
        bounds.height += 1;
        this.boundsDiv.style.left = bounds.x + "px";
        this.boundsDiv.style.top = bounds.y + "px";
        this.boundsDiv.style.width = bounds.width + "px";
        this.boundsDiv.style.height = bounds.height + "px";

        this._setHandleLocation(this.lt, bounds.x, bounds.y);
        this._setHandleLocation(this.t, bounds.cx, bounds.y);
        this._setHandleLocation(this.rt, bounds.right, bounds.y);
        this._setHandleLocation(this.l, bounds.x, bounds.cy);
        this._setHandleLocation(this.r, bounds.right, bounds.cy);
        this._setHandleLocation(this.lb, bounds.x, bounds.bottom);
        this._setHandleLocation(this.b, bounds.cx, bounds.bottom);
        this._setHandleLocation(this.rb, bounds.right, bounds.bottom);
        if(this.onBoundsChange){
            this.onBoundsChange(this._bounds);
        }
    }
}
Object.defineProperties(ResizeBox.prototype, {
    bounds: {
        get: function(){
            return this._bounds;
        },
        set: function(v){
            this._setBounds(v);
        }
    }
});

function ExportPanel(){
    var scope = this;
    var export_panel = document.getElementById("export_panel");
    export_panel.addEventListener("mousedown", function(evt){
        if(evt.target == export_panel){
            scope.destroy();
        }
    }, false);
    var export_scale = document.getElementById("export_scale");
    var export_scale_label = document.getElementById("export_scale_label");
    export_scale.onchange = function(evt){
        export_scale_label.textContent = scope.scale = export_scale.value;
        scope.updateOutputSize();
    }
    var exportImage = function(print){
        var graph = scope.graph;
        if(!graph){
            return;
        }
        var scale = export_scale.value;
        var s = scope.imageInfo.scale;
        var clipBounds = new Q.Rect(scope.clipBounds.x / s, scope.clipBounds.y / s, scope.clipBounds.width / s, scope.clipBounds.height / s);
        clipBounds.offset(scope.bounds.x, scope.bounds.y);
        var imageInfo = graph.exportImage(scale, clipBounds);

        if (!imageInfo || !imageInfo.data) {
            return false;
        }
        var win = window.open();
        var doc = win.document;
        doc.title = graph.name || "";
//        doc.title = "export image - " + imageInfo.width + " x " + imageInfo.height;
        var img = doc.createElement("img");
        img.src = imageInfo.data;
        doc.body.style.textAlign = "center";
        doc.body.style.margin = "0px";
        doc.body.appendChild(img);

        if(print){
            var style = doc.createElement("style");
            style.setAttribute("type", "text/css");
            style.setAttribute("media", "print");
            var printCSS = "img {max-width: 100%; max-height: 100%;}";
            if(clipBounds.width / clipBounds.height > 1.2){
                printCSS += "\n @page { size: landscape; }";
            }
            style.appendChild(document.createTextNode(printCSS));
            doc.head.appendChild(style);

            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";

            setTimeout(function(){
                win.print();
                win.onfocus=function(){ win.close();}
            }, 100);
        }
    }
    var export_submit = document.getElementById("export_submit");
    export_submit.onclick = function(){
        exportImage();
    }
    var print_submit = document.getElementById("print_submit");
    print_submit.onclick = function(){
        exportImage(true);
    }
}
ExportPanel.prototype = {
    canvas: null,
    initCanvas: function(){
        var export_canvas = document.getElementById('export_canvas');
        export_canvas.innerHTML = "";

        var canvas = document.createElement("canvas");
        export_canvas.appendChild(canvas);
        this.canvas = canvas;

        var export_bounds = document.getElementById("export_bounds");
        var export_size = document.getElementById("export_size");
        var scope = this;
        var clipBounds;
        var drawPreview = function(){
            var canvas = scope.canvas;
            var g = canvas.getContext("2d");
            g.clearRect(0, 0, canvas.width, canvas.height);
            g.drawImage(scope.imageInfo.canvas, 0, 0);
            g.beginPath();
            g.moveTo(0, 0);
            g.lineTo(canvas.width, 0);
            g.lineTo(canvas.width, canvas.height);
            g.lineTo(0, canvas.height);
            g.lineTo(0, 0);

            var x = clipBounds.x, y = clipBounds.y, width = clipBounds.width, height = clipBounds.height;
            g.moveTo(x, y);
            g.lineTo(x, y + height);
            g.lineTo(x + width, y + height);
            g.lineTo(x + width, y);
            g.closePath();
            g.fillStyle = "rgba(0, 0, 0, 0.3)";
            g.fill();
        }
        var onBoundsChange = function(bounds){
            clipBounds = bounds;
            scope.clipBounds = clipBounds;
            drawPreview();
            var w = clipBounds.width / scope.imageInfo.scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale | 0;
            export_bounds.textContent = (clipBounds.x / scope.imageInfo.scale | 0) + ", "
                + (clipBounds.y / scope.imageInfo.scale | 0) + ", " + w + ", " + h;
            scope.updateOutputSize();
        }
        this.updateOutputSize = function(){
            var export_scale = document.getElementById("export_scale");
            var scale = export_scale.value;
            var w = clipBounds.width / scope.imageInfo.scale * scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale  * scale | 0;
            var info = w + " X " + h;
            if(w * h > 3000 * 4000){
                info += "<span style='color: #F66;'>图幅太大，导出时可能出现内存不足</span>";
            }
            export_size.innerHTML = info;
        }
        var resizeHandler = new ResizeBox(canvas.parentNode, onBoundsChange);
        this.update = function(){
            this.canvas.width = this.imageInfo.width;
            this.canvas.height = this.imageInfo.height;
            resizeHandler.update(this.canvas.width, this.canvas.height);
        }
    },
    destroy: function(){
        this.graph = null;
        this.imageInfo = null
        this.clipBounds = null;
        this.bounds = null;
    },
    show: function(graph){
        $('#export_panel').modal("show");

        this.graph = graph;
        var bounds = graph.bounds;
        this.bounds = bounds;

        var canvas_size = document.getElementById("canvas_size");
        canvas_size.textContent = (bounds.width | 0) + " X " + (bounds.height | 0);

        var size = Math.min(500, screen.width / 1.3);
        var imageScale;
        if(bounds.width > bounds.height){
            imageScale = Math.min(1, size / bounds.width);
        }else{
            imageScale = Math.min(1, size / bounds.height);
        }
        this.imageInfo = graph.exportImage(imageScale);
        this.imageInfo.scale = imageScale;

        if(!this.canvas){
            this.initCanvas();
        }
        this.update();
    }
}
var exportPanel;
function showExportPanel(graph){
    if(!exportPanel){
        exportPanel = new ExportPanel();
    }
    exportPanel.show(graph);
}

///drag and drop
!function(){
    var DRAGINFO_PREFIX = "draginfo";
    function ondrag(evt) {
        var dataTransfer = evt.dataTransfer;
        var img = evt.target;
        dataTransfer.setData("text", img.getAttribute(DRAGINFO_PREFIX));
    }
    function createDNDImage(parent, src, title, info){
        var img = document.createElement("img");
        img.src = src;
        img.setAttribute("draggable", "true");
        img.setAttribute("title", title);
        info = info || {};
        if(!info.image && (!info.type || info.type == "Node")){
            info.image = src;
        }
        info.label = info.label || title;
        img.setAttribute(DRAGINFO_PREFIX, JSON.stringify(info));
        img.ondragstart = ondrag;
        parent.appendChild(img);
        return img;
    }
    window.createDNDImage = createDNDImage;
}(window, document);


function createToolBar(buttons, toolbar, scope, vertical, togglable){
    for(var n in buttons){
        var info = buttons[n];
        if(Q.isArray(info)){
            var buttonGroup = document.createElement("div");
            buttonGroup.className = vertical ? "btn-group-vertical" : "btn-group";
            if(togglable !== false){
                buttonGroup.setAttribute("data-toggle", "buttons");
            }
            for(var i= 0,l=info.length;i<l;i++){
                if(!info[i].type && togglable !== false){
                    info[i].type = 'radio';
                }
                buttonGroup.appendChild(createGraphButton(info[i], scope));
            }
            toolbar.appendChild(buttonGroup);
            continue;
        }
        toolbar.appendChild(createGraphButton(info, scope));
    }
}
function createGraphButton(info, scope){
    if(info.type == "search"){
        var div = document.createElement("div");
        div.style.display = "inline-block";
        div.style.verticalAlign = "middle";
        div.innerHTML = '<div class="input-group input-group-sm" style="width: 150px;">\
            <input type="text" class="form-control" placeholder="' + (info.placeholder || '') + '">\
                <span class="input-group-btn">\
                    <button class="btn btn-default" type="button"></button>\
                </span>\
            </div>';
        var input = div.getElementsByTagName("input")[0];
        var button = div.getElementsByTagName("button")[0];
        button.innerHTML = info.name;
        info.input = input;
        if(info.search){
            var clear = function(){
                info.searchInfo = null;
            }
            var doSearch = function(prov){
                var value = input.value;
                if(!value){
                    clear();
                    return;
                }
                if(!info.searchInfo || info.searchInfo.value != value){
                    var result = info.search(value, info);
                    if(!result || !result.length){
                        clear();
                        return;
                    }
                    info.searchInfo = {value: value, result: result};
                }
                doNext(prov);
            }
            var doNext = function(prov){
                if(!(info.select instanceof Function) || !info.searchInfo || !info.searchInfo.result || !info.searchInfo.result.length){
                    return;
                }
                var searchInfo = info.searchInfo;
                var result = info.searchInfo.result;
                if(result.length == 1){
                    info.select(result[0], 0);
                    return;
                }
                if(searchInfo.index === undefined){
                    searchInfo.index = 0;
                }else{
                    searchInfo.index += prov ? -1 : 1;
                    if(searchInfo.index < 0){
                        searchInfo.index += result.length;
                    }
                    searchInfo.index %= result.length;
                }
                info.select(result[searchInfo.index], searchInfo.index);
            }
//            prevButton.onclick = function(){
//                doSearch(true)
//            }
//            nextButton.onclick = function(){
//                doSearch()
//            }
            input.onkeydown = function(evt){
                if(evt.keyCode == 27){
                    clear();
                    input.value = "";
                    Q.stopEvent(evt);
                    return;
                }
                if(evt.keyCode == 13){
                    doSearch(evt.shiftKey);
                }
            }
            button.onclick = function(evt){
                doSearch();
            }
        }
        return div;
    }
    if(info.type == "input"){
        var div = document.createElement("div");
        div.style.display = "inline-block";
        div.style.verticalAlign = "middle";
        div.innerHTML = '<div class="input-group input-group-sm" style="width: 150px;">\
            <input type="text" class="form-control">\
                <span class="input-group-btn">\
                    <button class="btn btn-default" type="button"></button>\
                </span>\
            </div>';
        var input = div.getElementsByTagName("input")[0];
        var button = div.getElementsByTagName("button")[0];
        button.innerHTML = info.name;
        info.input = input;
        if(info.action){
            button.onclick = function(evt){
                info.action.call(scope || window.graph, evt, info);
            }
        }
        return div;
    }else if(info.type == "select"){
        var div = document.createElement("select");
        div.className = "form-control";
        var options = info.options;
        options.forEach(function(v){
            var option = document.createElement("option");
            option.innerHTML = v;
            option.value = v;
            div.appendChild(option);
        });
        div.value = info.value;
        if(info.action){
            div.onValueChange = function(evt){
                info.action.call(scope || window.graph, evt, info);
            }
        }
        return div;
    }
    if(!info.type){
        var label = document.createElement("button");
    }else{
        var label = document.createElement("label");
        var button = document.createElement("input");
        info.input = button;
        button.setAttribute('type', info.type);
        label.appendChild(button);
        if (info.selected) {
            button.setAttribute('checked', 'checked');
            if(info.type == 'radio'){
                label.className += "active";
            }
        }
    }
    label.className += " btn btn-default btn-sm";
    if(info.icon){
        var icon = document.createElement('img');
        icon.src = info.icon;
        label.appendChild(icon);
    }else if(info.name){
        label.appendChild(document.createTextNode(" " + info.name));
    }
    if(info.name){
        label.setAttribute("title", info.name);
    }
    if(info.action){
        label.onclick = function(evt){
            info.action.call(scope || window.graph, evt, info);
        }
    }
    return label;
}


///ExportPanel

function ResizeBox(parent, onBoundsChange){
    this.onBoundsChange = onBoundsChange;
    this.parent = parent;
    this.handleSize = Q.isTouchSupport ? 20 : 8;

    this.boundsDiv = this._createDiv(this.parent);
    this.boundsDiv.type = "border";
    this.boundsDiv.style.position = "absolute";
    this.boundsDiv.style.border = "dashed 1px #888";
    var handles = "lt,t,rt,l,r,lb,b,rb";
    handles = handles.split(",");
    for(var i= 0,l=handles.length;i<l;i++){
        var name = handles[i];
        var handle = this._createDiv(this.parent);
        handle.type = "handle";
        handle.name = name;
        handle.style.position = "absolute";
        handle.style.backgroundColor = "#FFF";
        handle.style.border = "solid 1px #555";
        handle.style.width = handle.style.height = this.handleSize + "px";
        var cursor;
        if(name == 'lt' || name == 'rb'){
            cursor = "nwse-resize";
        }else if(name == 'rt' || name == 'lb'){
            cursor = "nesw-resize";
        }else if(name == 't' || name == 'b'){
            cursor = "ns-resize";
        }else{
            cursor = "ew-resize";
        }
        handle.style.cursor = cursor;
        this[handles[i]] = handle;
    }
    this.interaction = new Q.DragSupport(this.parent, this);
}
ResizeBox.prototype = {
    destroy: function(){
        this.interaction.destroy();
    },
    update: function(width, height){
        this.wholeBounds = new Q.Rect(0, 0, width, height);
        this._setBounds(this.wholeBounds.clone());
    },
    ondblclick: function(evt){
        if(this._bounds.equals(this.wholeBounds)){
            if(!this.oldBounds){
                this.oldBounds = this.wholeBounds.clone(). grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5);
            }
            this._setBounds(this.oldBounds, true);
            return;
        }
        this._setBounds(this.wholeBounds.clone(), true);
    },
    startdrag: function(evt){
        if(evt.target.type){
            this.dragItem= evt.target;
        }
    },
    ondrag: function(evt){
        if(!this.dragItem){
            return;
        }
        Q.stopEvent(evt);
        var dx = evt.dx;
        var dy = evt.dy;
        if(this.dragItem.type == "border"){
            this._bounds.offset(dx, dy);
            this._setBounds(this._bounds, true);
        }else if(this.dragItem.type == "handle"){
            var name = this.dragItem.name;
            if(name[0] == 'l'){
                this._bounds.x += dx;
                this._bounds.width -= dx;
            }else if(name[0] == 'r'){
                this._bounds.width += dx;
            }
            if(name[name.length - 1] == 't'){
                this._bounds.y += dy;
                this._bounds.height -= dy;
            }else if(name[name.length - 1] == 'b'){
                this._bounds.height += dy;
            }
            this._setBounds(this._bounds, true);
        }

    },
    enddrag: function(evt){
        if(!this.dragItem){
            return;
        }
        this.dragItem = false;
        if(this._bounds.width < 0){
            this._bounds.x += this._bounds.width;
            this._bounds.width = -this._bounds.width;
        }else if(this._bounds.width == 0){
            this._bounds.width = 1;
        }
        if(this._bounds.height < 0){
            this._bounds.y += this._bounds.height;
            this._bounds.height = -this._bounds.height;
        }else if(this._bounds.height == 0){
            this._bounds.height = 1;
        }
        if(this._bounds.width > this.wholeBounds.width){
            this._bounds.width = this.wholeBounds.width;
        }
        if(this._bounds.height > this.wholeBounds.height){
            this._bounds.height = this.wholeBounds.height;
        }
        if(this._bounds.x < 0){
            this._bounds.x = 0;
        }
        if(this._bounds.y < 0){
            this._bounds.y = 0;
        }
        if(this._bounds.right > this.wholeBounds.width){
            this._bounds.x -= this._bounds.right - this.wholeBounds.width;
        }
        if(this._bounds.bottom > this.wholeBounds.height){
            this._bounds.y -= this._bounds.bottom - this.wholeBounds.height;
        }

        this._setBounds(this._bounds, true);
    },
    _createDiv: function(parent){
        var div = document.createElement("div");
        parent.appendChild(div);
        return div;
    },
    _setHandleLocation: function(handle, x, y){
        handle.style.left = (x - this.handleSize / 2) + "px";
        handle.style.top = (y - this.handleSize / 2) + "px";
    },
    _setBounds: function(bounds){
        if(!bounds.equals(this.wholeBounds)){
            this.oldBounds = bounds;
        }
        this._bounds = bounds;
        bounds = bounds.clone();
        bounds.width += 1;
        bounds.height += 1;
        this.boundsDiv.style.left = bounds.x + "px";
        this.boundsDiv.style.top = bounds.y + "px";
        this.boundsDiv.style.width = bounds.width + "px";
        this.boundsDiv.style.height = bounds.height + "px";

        this._setHandleLocation(this.lt, bounds.x, bounds.y);
        this._setHandleLocation(this.t, bounds.cx, bounds.y);
        this._setHandleLocation(this.rt, bounds.right, bounds.y);
        this._setHandleLocation(this.l, bounds.x, bounds.cy);
        this._setHandleLocation(this.r, bounds.right, bounds.cy);
        this._setHandleLocation(this.lb, bounds.x, bounds.bottom);
        this._setHandleLocation(this.b, bounds.cx, bounds.bottom);
        this._setHandleLocation(this.rb, bounds.right, bounds.bottom);
        if(this.onBoundsChange){
            this.onBoundsChange(this._bounds);
        }
    }
}
Object.defineProperties(ResizeBox.prototype, {
    bounds: {
        get: function(){
            return this._bounds;
        },
        set: function(v){
            this._setBounds(v);
        }
    }
});

function ExportPanel(){
    var scope = this;
    var export_panel = document.getElementById("export_panel");
    export_panel.addEventListener("mousedown", function(evt){
        if(evt.target == export_panel){
            scope.destroy();
        }
    }, false);
    var export_scale = document.getElementById("export_scale");
    var export_scale_label = document.getElementById("export_scale_label");
    export_scale.onchange = function(evt){
        export_scale_label.textContent = scope.scale = export_scale.value;
        scope.updateOutputSize();
    }
    var exportImage = function(print){
        var graph = scope.graph;
        if(!graph){
            return;
        }
        var scale = export_scale.value;
        var s = scope.imageInfo.scale;
        var clipBounds = new Q.Rect(scope.clipBounds.x / s, scope.clipBounds.y / s, scope.clipBounds.width / s, scope.clipBounds.height / s);
        clipBounds.offset(scope.bounds.x, scope.bounds.y);
        var imageInfo = graph.exportImage(scale, clipBounds);

        if (!imageInfo || !imageInfo.data) {
            return false;
        }
        var win = window.open();
        var doc = win.document;
        doc.title = graph.name || "";
//        doc.title = "export image - " + imageInfo.width + " x " + imageInfo.height;
        var img = doc.createElement("img");
        img.src = imageInfo.data;
        doc.body.style.textAlign = "center";
        doc.body.style.margin = "0px";
        doc.body.appendChild(img);

        if(print){
            var style = doc.createElement("style");
            style.setAttribute("type", "text/css");
            style.setAttribute("media", "print");
            var printCSS = "img {max-width: 100%; max-height: 100%;}";
            if(clipBounds.width / clipBounds.height > 1.2){
                printCSS += "\n @page { size: landscape; }";
            }
            style.appendChild(document.createTextNode(printCSS));
            doc.head.appendChild(style);

            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";

            setTimeout(function(){
                win.print();
                win.onfocus=function(){ win.close();}
            }, 100);
        }
    }
    var export_submit = document.getElementById("export_submit");
    export_submit.onclick = function(){
        exportImage();
    }
    var print_submit = document.getElementById("print_submit");
    print_submit.onclick = function(){
        exportImage(true);
    }
}
ExportPanel.prototype = {
    canvas: null,
    initCanvas: function(){
        var export_canvas = document.getElementById('export_canvas');
        export_canvas.innerHTML = "";

        var canvas = document.createElement("canvas");
        export_canvas.appendChild(canvas);
        this.canvas = canvas;

        var export_bounds = document.getElementById("export_bounds");
        var export_size = document.getElementById("export_size");
        var scope = this;
        var clipBounds;
        var drawPreview = function(){
            var canvas = scope.canvas;
            var g = canvas.getContext("2d");
            g.clearRect(0, 0, canvas.width, canvas.height);
            g.drawImage(scope.imageInfo.canvas, 0, 0);
            g.beginPath();
            g.moveTo(0, 0);
            g.lineTo(canvas.width, 0);
            g.lineTo(canvas.width, canvas.height);
            g.lineTo(0, canvas.height);
            g.lineTo(0, 0);

            var x = clipBounds.x, y = clipBounds.y, width = clipBounds.width, height = clipBounds.height;
            g.moveTo(x, y);
            g.lineTo(x, y + height);
            g.lineTo(x + width, y + height);
            g.lineTo(x + width, y);
            g.closePath();
            g.fillStyle = "rgba(0, 0, 0, 0.3)";
            g.fill();
        }
        var onBoundsChange = function(bounds){
            clipBounds = bounds;
            scope.clipBounds = clipBounds;
            drawPreview();
            var w = clipBounds.width / scope.imageInfo.scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale | 0;
            export_bounds.textContent = (clipBounds.x / scope.imageInfo.scale | 0) + ", "
                + (clipBounds.y / scope.imageInfo.scale | 0) + ", " + w + ", " + h;
            scope.updateOutputSize();
        }
        this.updateOutputSize = function(){
            var export_scale = document.getElementById("export_scale");
            var scale = export_scale.value;
            var w = clipBounds.width / scope.imageInfo.scale * scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale  * scale | 0;
            var info = w + " X " + h;
            if(w * h > 3000 * 4000){
                info += "<span style='color: #F66;'>图幅太大，导出时可能出现内存不足</span>";
            }
            export_size.innerHTML = info;
        }
        var resizeHandler = new ResizeBox(canvas.parentNode, onBoundsChange);
        this.update = function(){
            this.canvas.width = this.imageInfo.width;
            this.canvas.height = this.imageInfo.height;
            resizeHandler.update(this.canvas.width, this.canvas.height);
        }
    },
    destroy: function(){
        this.graph = null;
        this.imageInfo = null
        this.clipBounds = null;
        this.bounds = null;
    },
    show: function(graph){
        $('#export_panel').modal("show");

        this.graph = graph;
        var bounds = graph.bounds;
        this.bounds = bounds;

        var canvas_size = document.getElementById("canvas_size");
        canvas_size.textContent = (bounds.width | 0) + " X " + (bounds.height | 0);

        var size = Math.min(500, screen.width / 1.3);
        var imageScale;
        if(bounds.width > bounds.height){
            imageScale = Math.min(1, size / bounds.width);
        }else{
            imageScale = Math.min(1, size / bounds.height);
        }
        this.imageInfo = graph.exportImage(imageScale);
        this.imageInfo.scale = imageScale;

        if(!this.canvas){
            this.initCanvas();
        }
        this.update();
    }
}
var exportPanel;
function showExportPanel(graph){
    if(!exportPanel){
        exportPanel = new ExportPanel();
    }
    exportPanel.show(graph);
}

!function(Q, window, document){
    if(Q.Graph.prototype.parseJSON){
        return;
    }
    function getByPath(pathName, scope){
        var paths = pathName.split(".");
        scope = scope || window;
        var i = -1;
        while(scope && ++i < paths.length){
            var path = paths[i];
            scope = scope[path];
        }
        return scope;
    }

    function loadClassPath(object, namespace, loadChild){
        object.classPath = namespace;
        if(object instanceof Function){
            object.prototype.className = object.classPath;
            object.prototype.class = object;
//            Q.log(v.className);
//            continue;
        }
        if(loadChild === false){
            return;
        }
        for(var name in object){
            if(name[0] == "_" || name[0] == "$" || name == "superclass" || name == "constructor" || name == "prototype" || name.indexOf(".") >= 0){
                continue;
            }
            var v = object[name];
            if(!v || !(v instanceof Object) || v.classPath){
                continue;
            }
            loadClassPath(v, namespace + "." + name);
        }
    }

    function propertyToJSON(value){
        if(!value){
            return value;
        }
        if(Q.isString(value)){
            return value;
        }
        if(value.classPath){
            return {classPath: value.classPath};
        }
        if(!value.className){
            return value;
        }
        var result = {className: value.className};
        if(value.toJSON){
            result.json = value.toJSON();
        }else{
            result.json = value;
        }
        return result;
    }
    function JSONToProperty(json){
        if(!json){
            return json;
        }
        if(Q.isString(json)){
            return json;
        }
        if(json.classPath){
            return getByPath(json.classPath);
        }
        if(json.className){
            var F = getByPath(json.className);
            var v = new F();
            if(v && json.json){
                json = json.json;
                if(v.parseJSON){
                    v.parseJSON(json);
                }else{
                    for(var n in json){
                        v[n] = json[n];
                    }
                }
            }
            return v;
        }
        return json;
    }

    var ElementPropertyMap = {
        "Q.Element": ["uiClass", "name"],
        "Q.Node": ["location", "size", "image", "rotate", "anchorPosition"],
        "Q.Group": ["minSize", "groupType", "padding", "groupImage", "expanded"],
        "Q.ShapeNode": ["location", "rotate", "anchorPosition", "path"],
        "Q.Edge": ["edgeType", "angle", "bundleEnabled", "pathSegments"]
    }
    function exportJSON(toString){
        function equals(a, b){
            return a == b || (a && b && a.equals && a.equals(b));
        }
        function exportProperties(className, element, info, prototype){
            var properties = ElementPropertyMap[className];
            if(!properties){
                return;
            }
            properties.forEach(function(name){
                if(!equals(element[name], prototype[name])){
                    info[name] = propertyToJSON(element[name]);
                }
            }, this);
        }
        var json = {};
        var nodes = json.nodes = [];
        var edges = json.edges = [];
        this.forEach(function(d){
            var info = {id: d.id};
            var prototype = d.class.prototype;
            exportProperties("Q.Element", d, info, prototype);
            if(d instanceof Q.Node){
                info.type = d.type;
                if(d instanceof Q.ShapeNode){
                    exportProperties("Q.ShapeNode", d, info, prototype);
                }else{
                    exportProperties("Q.Node", d, info, prototype);
                    if(d instanceof Q.Group){
                        exportProperties("Q.Group", d, info, prototype);
                    }
                }
                nodes.push(info);
            }else{
                info.fromId = d.from.id;
                info.toId = d.to.id;
                exportProperties("Q.Edge", d, info, prototype);
                edges.push(info);
            }
            if(d.parent){
                info.parent = d.parent.id;
            }
            if(d.host){
                info.host = d.host.id;
            }
            if(d.styles){
                for(var s in d.styles){
                    if(!info.styles){
                        info.styles = {};
                    }
                    info.styles[s] = propertyToJSON(d.styles[s]);
                }
            }
            if(d.properties){
                for(var s in d.properties){
                    if(!info.properties){
                        info.properties = {};
                    }
                    info.properties[s] = propertyToJSON(d.properties[s]);
                }
            }
        })
        if(toString){
            json = JSON.stringify(json, null, "\t")
        }
        return json;
    }

    function parseJSON(json){
        if(Q.isString(json)){
            json = JSON.parse(json);
        }

        var map = {};
        var nodes = json.nodes;
        var edges = json.edges;
        if(nodes){
            nodes.forEach(function(info){
                var node;
                if(info.type){
                    var F = getByPath(info.type);
                    if(F instanceof Function && F.prototype instanceof Q.Element){
                        node = new F();
                    }
                }
                if(!node){
                    node = new Q.Node();
                }
                info.element = node;
                map[info.id] = info;
            }, this);
        }
        var findNode = function(id){
            if(!map[id]){
                return null;
            }
            return map[id].element;
        }
        if(edges){
            edges.forEach(function(info){
                var from = findNode(info.fromId);
                var to = findNode(info.toId);
                delete info.fromId;
                delete info.toId;
                if(from && to){
                    var edge = this.createEdge(info.name, from, to);
                    for(var n in info){
                        if(n == "id" || n == "styles"){
                            continue;
                        }
                        edge[n] = JSONToProperty(info[n]);
                    }
                    info.element = edge;
                    map[info.id] = info;
                }
            }, this);
        }
        for(var id in map){
            var info = map[id];
            var element = info.element;
            for(var n in info){
                if(n == "id" || n == "styles" || n == "parent" || n == "host"){
                    continue;
                }
                var v = JSONToProperty(info[n]);
                if(n == "location" && v.x == 0 && v.y == 0 && element instanceof Q.Group){
                    continue;
                }
                element[n] = v;
            }
            if(info.styles){
                var styles = {};
                for(var n in info.styles){
                    styles[n] = JSONToProperty(info.styles[n]);
                }
                element.putStyles(styles);
            }
            if(info.properties){
                var properties = {};
                for(var n in info.properties){
                    element.set(n, JSONToProperty(info.properties[n]))
                }
            }
            this.graphModel.add(element);
            if(info.parent){
                info.element.parent = findNode(info.parent);
            }
            if(info.host){
                info.element.host = findNode(info.host);
            }

        }
    }

    loadClassPath(Q, "Q");
    Q.Graph.prototype.parseJSON = parseJSON;
    Q.Graph.prototype.exportJSON = exportJSON;
    Q.loadClassPath = loadClassPath;

    Q.HashList.prototype.toJSON = function(){
        var datas = [];
        this.forEach(function(data){
            datas.push(propertyToJSON(data));
        })
        return datas;
    }
    Q.HashList.prototype.parseJSON = function(json){
        json.forEach(function(item){
            this.add(JSONToProperty(item));
        }, this)
    }
}(Q, window, document);