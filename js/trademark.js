var trademark = document.getElementById("trademark")
	for (var i=0;i<20;i++) {
		var img =  document.createElement("img");
		var a =  document.createElement("a");
		var span = document.createElement("span");
		a.style.cssText="position: relative;"
		span.style.cssText="background: #eaeaea;width:1px;height: 18px;display:inline-block;margin-top: 10px;position: absolute;right: 2px;top: -9px;"
		span.id="spanId"+i
		a.appendChild(img)
		a.appendChild(span)
		a.href="#"
		img.src="img/t"+(i+1)+".jpg"
		img.onmouseover=function(event){
			var e=event||window.event;
			this.style.cssText="border-left:2px solid #eaeaea;border-right:2px solid #eaeaea;"
		}
		img.onmouseout=function(event){
			var e=event||window.event;
			this.style.cssText="border:0;"
		}
		trademark.appendChild(a)
	}
	var spanId=document.getElementById("spanId9")
	var spanId2=document.getElementById("spanId19")
		spanId.style.display="none"
		spanId2.style.display="none"