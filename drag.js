	var drag = document.getElementById('drag');
	addEvent(drag,'mousedown',function(event){
		var e = event || window.event;
		var _this = this;
		var x = e.clientX - _this.offsetLeft;
		var y = e.clientY - _this.offsetTop;
		addEvent(document,'mousemove',move);
		addEvent(document,'mouseup',up);
		function move(event){
			var e = event || window.event;
			var left = e.clientX - x ;
			var top = e.clientY - y ;
			if (top < 0) { //控制顶部溢出
				top = 0;
			}else if(top > getInner().height - _this.offsetHeight){ //控制底部溢出
				top = window.innerHeight - _this.offsetHeight;
			}
			if (left < 0) {
				left = 0;
			}else if(left > getInner().width - _this.offsetWidth){
				left =  window.innerWidth - _this.offsetWidth;
			}
			_this.style.left = left + 'px';
			_this.style.top = top + 'px';
		}
		function up(){
			removeEvent(document,'mousemove',move);
			removeEvent(document,'mouseup',up);
		}	
	});
	function addEvent(obj,type,fn){
		if (typeof obj.addEventListener != 'undefined') {
			obj.addEventListener(type,fn,false);
		}else if(obj.attachEvent){
			obj.attachEvent('on'+ type,fn);
		}else{
			obj['on' + type] = fn;
		}
	}
	function removeEvent(obj,type,fn){
		if (typeof obj.removeEventListener != 'undefined') {
			obj.removeEventListener(type,fn,false);
		}else if(obj.detachEvent){
			obj.detachEvent('on'+type,fn);
		}else{
			obj['on' + type] = null;
		}
	}
	function getInner(){
		if (typeof window.innerHeight != 'undefined') {
			return {
				width : window.innerWidth,
				height : window.innerHeight
			};
		}else{
			return {
				width : document.documentElement.clientWidth,
				height : document.documentElement.clientHeight
			}
		}
	}
