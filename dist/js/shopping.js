var needHome=document.getElementById("needHome");
	var ul=document.createElement("ul");
		ul.style.cssText="width:986px;margin:0 auto;display: flex;justify-content: space-between;flex-wrap: wrap;"
	var k=0;	
	for (var j=0;j<10;j++) {
			k=j%7;
			var divBox=document.createElement("div")
				divBox.style.cssText="margin-bottom:30px;"
				divBox.id="divBoxId"+j
			var li=document.createElement("li");
				li.style.cssText="width: 182px;border: 1px solid #bbbbbb;"
				li.ord=j;
			var a=document.createElement("a");
				a.style.cssText="position: relative;"
				a.href="#"
			var img=document.createElement("img");
				img.src="img/td"+(k+1)+".jpg"
				img.style.cssText="width: 180px;height: 180px;"
		
				a.appendChild(img)
	
				li.appendChild(a)
			var div=document.createElement("div");
				div.style.cssText="background: #fff;height: 62px;"
			var H3=document.createElement("h3");
				H3.style.cssText="font:12px/29px '';color: #666;margin-left: 18px;"
			var a2=document.createElement("a");
				a2.href="#"
				a2.innerHTML="[优品汇]三明治蛋糕500g"
				H3.appendChild(a2)
				div.appendChild(H3)
			var u=document.createElement("u");
				u.style.cssText="font: 16px/28px '';color: #ee1611;margin-left: 11px;margin: 5px;"
			var s=document.createElement("s");
				s.style.cssText="font: 9px/21px '';margin-top: 7px;color:  #ee1611;"
				s.innerHTML="￥"
				u.appendChild(s)
				u.innerHTML="￥18.8"
				div.appendChild(u)
			
			var span=document.createElement("span");
				span.style.cssText="font: 12px/25px '';color: #999;margin-left: 20px;"
				span.innerHTML="已售"
			var a3=document.createElement("a");
				a3.href="#"
				a3.innerHTML="4.5万件"
				span.appendChild(a3)
				div.appendChild(span)
				li.appendChild(div)
				divBox.appendChild(li)
				
				ul.appendChild(divBox)
				needHome.appendChild(ul)		
	}
	