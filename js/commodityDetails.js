let obj=null;
$(function(){
		
		$.get("getGoodsList.php", function(data){
  				//alert(data);
  				let obj = eval(data)
  				if(obj!=null){
					for(let x = 0;x<obj.length;x++){
						let goodsPrice=obj[x].goodsPrice;
						//alert(goodsPrice)		
					}
				}
  				var todayUpDateJS=document.getElementById("todayUpDateJS");
				var ul=document.createElement("ul");
					ul.style.cssText="width:1202px;margin:0 auto;display: flex;justify-content: space-between;flex-wrap: wrap;"
				var k=0;	
				if(obj !=null){
					for (var j=0;j<12;j++) {
					
						k=j%12;
						
						var divBox=document.createElement("div")
							divBox.style.cssText="margin-bottom:30px;"
							divBox.id="divBoxId"+obj[j].goodsId
						var li=document.createElement("li");
							li.style.cssText="width: 283px;"
							li.ord=j;
						var a=document.createElement("b");
							a.style.cssText="position: relative;"
						
	
							//alert(a.id)
						var img=document.createElement("img");
							img.src="img/nv"+(k+1)+".jpg"
							img.style.cssText="width: 283px;height: 283px;"
						var aa=document.createElement("b")
							aa.style.cssText="font: 12px/18px '';color:#fff;"
							
							aa.innerHTML="找相似>"
						var p=document.createElement("p");
							p.style.cssText="width: 283px;height: 18px;background:rgba(147,147,147,.8);position: absolute;top: 131px;text-align: center;display: none;"
							p.id="pId"+j
							p.appendChild(aa)
							a.appendChild(img)
							a.appendChild(p)
							li.appendChild(a)
						var div=document.createElement("div");
							div.style.cssText="background: #fff;height: 62px;"
						var H3=document.createElement("h3");
							H3.style.cssText="font:12px/29px '';color: #666;margin-left: 18px;"
						var a2=document.createElement("b");
							
							a2.innerHTML=obj[j].goodsName
							H3.appendChild(a2)
							div.appendChild(H3)
						var u=document.createElement("u");
							u.style.cssText="font: 16px/28px '';color: #ee1611;margin-left: 11px;margin: 5px;"
						var s=document.createElement("s");
							s.style.cssText="font: 9px/21px '';margin-top: 7px;color:  #ee1611;"
							s.innerHTML="￥"
							u.appendChild(s)
							u.innerHTML= "￥"+obj[j].goodsPrice
							div.appendChild(u)
						var i=document.createElement("i");
							i.style.cssText="font: 9px/21px '';margin-top: 7px;color:  #999;text-decoration: line-through;margin-right: 8px;"
							i.innerHTML="￥38"
							div.appendChild(i)
						var b=document.createElement("b");
							b.style.cssText="background: #ff6767;color: #fff;"
							b.innerHTML="手机结享14.5元"
							div.appendChild(b)
						var span=document.createElement("span");
							span.style.cssText="font: 12px/25px '';color: #999;margin-left: 20px;"
							span.innerHTML="已售"
						var a3=document.createElement("b");
							
							a3.innerHTML="4.5万件"
							span.appendChild(a3)
							div.appendChild(span)
							li.appendChild(div)
							
						var divHide=document.createElement("div");
							divHide.id="divId"+j
							divHide.style.cssText="height: 28px;border-top:1px dashed #ececec;background: #fff;display: none;"
						var div2=document.createElement("div");
							div2.style.cssText="float: left"
						var span=document.createElement("span");
							span.style.cssText="color: #ff7e7c;font: 12px/28px '';margin-left: 8px;"
							span.innerHTML="包邮"
							div2.appendChild(span)
						var span2=document.createElement("span");
							span2.style.cssText="color: #ff7e7c;font: 12px/28px '';margin: 0 4px;"
							span2.innerHTML="|"
							div2.appendChild(span2)
						var span3=document.createElement("span");
							span3.style.cssText="color: #ff7e7c;font: 12px/28px '';"
							span3.innerHTML="返积分"
							div2.appendChild(span3)
						var span4=document.createElement("span");
							span4.style.cssText="color: #ff7e7c;font: 12px/28px '';margin: 0 4px;"
							span4.innerHTML="|"
							div2.appendChild(span4)
						var span5=document.createElement("span");
							span5.style.cssText="color: #ff7e7c;font: 12px/28px '';"
							
							var a4=document.createElement("b");
								a4.href="#"
								a4.style.cssText="color: #ff7e7c;font: 12px/28px '';"
								a4.innerHTML="退货补贴优惠卷"
							span5.appendChild(a4)
							div2.appendChild(span5)	
						var div3=document.createElement("div");
							div3.style.cssText="float:right;margin-right: 5px;"
						var a5=document.createElement("b");
							
						var imgCollect=document.createElement("img");
							imgCollect.src="img/xing1.png"
							a5.appendChild(imgCollect)
							a5.style.cssText="color: #aeaeae;font: 12px/28px '';margin-right: 5px;"	
							a5.innerHTML="收藏"
							div3.appendChild(a5)
						var a6=document.createElement("b");	
							
							a6.style.cssText="color: #aeaeae;font: 12px/28px '';"
							a6.innerHTML="[详情]"
							div3.appendChild(a6)
							divHide.appendChild(div2)
							divHide.appendChild(div3)
							li.appendChild(divHide)
							divBox.appendChild(li)
							//divBox.appendChild(divHide)
							ul.appendChild(divBox)
							todayUpDateJS.appendChild(ul)	
					li.onmouseover=showImg;
					li.onmouseout=hideImg;
					li.onclick=skip;
					
				}
				}
				
				function skip(){
					var ord=this.ord+1;
					
					location.href="particulars.html";
					saveCookie("goodsId",ord,7)	
				}
				//存储商品Id
				function saveCookie(key,value,dayCount){
						var d = new Date();
						d.setDate(d.getDate()+dayCount);
						document.cookie = key+"="+encodeURIComponent
					
					(value)+";expires="+d.toGMTString();
					}
				//显示
				function showImg(){
					
					this.style.cssText="box-shadow: 0px 4px 20px #999;"
					//alert(this.ord)
					var ord=this.ord;
					
					var p = document.getElementById("pId"+ord)
					p.style.cssText="width: 283px;height: 18px;background:rgba(147,147,147,.8);position: absolute;top: 131px;text-align: center;display: block;"
					
					var divBox=document.getElementById("divBoxId"+ord)
					//alert(divBox.id)
					divBox.style.cssText="margin-bottom:0px;"
					//收藏
					var divId=document.getElementById("divId"+ord)
					divId.style.cssText="height: 28px;border-top:1px dashed #ececec;background: #fff;display: block;"
					
				}
				//隐藏
				function hideImg(){
					this.style.cssText="box-shadow: 0px 0px 0px #999;"
					var ord=this.ord;
					var p = document.getElementById("pId"+ord)
					p.style.cssText="width: 283px;height: 18px;background:rgba(147,147,147,.8);position: absolute;top: 131px;text-align: center;display: none;"
					var divId=document.getElementById("divId"+ord)
					divId.style.cssText="height: 28px;border-top:1px dashed #ececec;background: #fff;display: none;"
					
					var divBox=document.getElementById("divBoxId"+ord)
					//alert(divBox.id)
					divBox.style.cssText="margin-bottom:30px;"
				}	

  				
			});
			
});

	