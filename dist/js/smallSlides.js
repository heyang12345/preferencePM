var slides=document.getElementById("slides")
		slides.style.cssText="height: 264px;border-bottom: 1px solid #e5e5e5;"	
	var ul=document.createElement("ul")	
		ul.style.cssText="margin-left: 19px;"
	for(var k=0;k<6;k++){
		var li=document.createElement("li")
			li.ord=k
		var a=document.createElement("a")
			a.href="#"
			a.style.cssText="float: left;margin-right: 12px;position: relative;"
			li.appendChild(a)
		var img=document.createElement("img")
			img.src="img/td1.jpg"
			img.style.cssText="width: 184px;height: 184px;"
			a.appendChild(img)
		var div=document.createElement("div")
			div.style.cssText="background: #fff;position: relative;z-index: 200;"
			a.appendChild(div)
		var span=document.createElement("span")
			span.style.cssText="color: #ec1611;font:700 12px/30px '';margin-left: 10px;"
			span.innerHTML="￥"
			div.appendChild(span)
		var i=document.createElement("i")
			i.style.cssText="color: #ec1611;font: 9px/30px '';"
			i.innerHTML="39.9"
			span.appendChild(i)
		var u=document.createElement("u")
			u.style.cssText="font: 12px/33px ''; color: #b5b5b5;margin-left: 35px;"
			u.innerHTML="专场满"
		var b=document.createElement("b")
			b.innerHTML="49减元"
			u.appendChild(b)
			
		var b2=document.createElement("b")
			b2.innerHTML="5"
			u.appendChild(b2)
			div.appendChild(u)
		var p=document.createElement("p")
			p.style.cssText="font: 12px/21px '';color: #666;margin-left: 10px;"
			p.innerHTML="路鼎记高跟H字凉拖"
			div.appendChild(p)
		var div2=document.createElement("div")
			div2.id="div2Id"+k
			div2.style.cssText="height: 20px;width: 184px;background: rgba(0,0,0,0.5);text-align: center;font: 12px/20px '';color: #fff;position: absolute;top: 184px;"
			div2.innerHTML="还剩85件抢完回复原价29.9元"
			a.appendChild(div2)
		ul.appendChild(li)
		slides.appendChild(ul)
		
		li.onmouseover=pShow;
		li.onmouseout=pHide;
	}
	function pShow(){
		//alert(this.ord)
		var ord=this.ord;
		var div2Id = document.getElementById("div2Id"+ord)
		div2Id.style.cssText="height: 20px;width: 184px;background: rgba(0,0,0,0.5);text-align: center;font: 12px/20px '';color: #fff;position: absolute;top:164px;transition: .5s linear all;z-index: 100;"
	}
	function pHide(){
		var ord=this.ord;
		var div2Id = document.getElementById("div2Id"+ord)
		div2Id.style.cssText="height: 20px;width: 184px;background: rgba(0,0,0,0.5);text-align: center;font: 12px/20px '';color: #fff;position: absolute;top:184px;transition: .5s linear all;z-index: 100;"
	}