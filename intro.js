/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-09 11:56:22
 * @version $Id$
 */
window.onload=function(){


	var getId=function(id){
		return document.getElementById(id);
	}
	var getClass=function(oParent,className){

	   	  return oParent.getElementsByClassName(className)
    } 

    var toTwo=function(n){

    	if(n<10){
    		return "0"+n; 
    	}else{

    		return ""+n;
    	}

    }
	var clock=function(){//时钟程序

		var oBody=document.body;
		var oTime=getId("clock");
		var oUl=oTime.getElementsByTagName("ul")[0];
		var aLi=oUl.getElementsByTagName("li");
		
		var oDate=new Date();
		var str='';
		str=toTwo(oDate.getHours())+':'+toTwo(oDate.getMinutes())+':'+toTwo(oDate.getSeconds());
		for(var i=0;i<aLi.length;i++){
			if(i!=2 && i!=5){
			aLi[i].innerHTML=str.charAt(i);
			}
		}
	}
	clock();
	setInterval(clock,1000);//时钟结束

	//加载抖函数

	var shake=function(obj,attr,fnEnd){
		if(obj.onOff){return;}
		obj.onOff=true;
		var pos=parseInt(getStyle(obj,attr));
		var arr=[];
		var num=0;
		var shaker=null;
		for(var i=20;i>=0;i-=2){

			arr.push(i,-i);
		}
		arr.push(0);
		clearInterval(obj.shaker);
		obj.shaker=setInterval(function(){
			obj.style[attr]=pos+arr[num]+'px';
			num++;
			if(num==arr.length){
				clearInterval(obj.shaker);
				if(fnEnd)fnEnd();
				obj.onOff=true;
			}
		},60);
	};

	
   //鼠标移入时钟抖动
	var heaer_shaker=function(){   

		var oFooter=document.getElementsByTagName('footer')[0];

		EventUtil.addHandler(oFooter,"mouseover",function(){

			shake(oFooter,"left");
		});
	};

	heaer_shaker();

	//项目幻灯片

	var show=function(){

		var oDl_Box=getClass(document,"dl_box")[0]; 
		var oThird=getId("third");
		var oDl=oDl_Box.getElementsByTagName("dl");
		var oOl=getClass(oThird,'btn_ol')[0];
		var aLi=oOl.getElementsByTagName("li");

		for(var i=0;i<aLi.length;i++){

			aLi[i].index=i;
			EventUtil.addHandler(aLi[i],"click",function(){
				now=this.index;
				for(var i=0;i<aLi.length;i++){
					aLi[i].className="";
				}
				this.className="active";
				move(oDl_Box,{left:-(now*oDl[0].offsetWidth)});

			});
		}

	};
	show();

	//个人介绍时光轴

	var _Intro=function(){

		var oFourth=getId('fourth');
		var oHr=getClass(oFourth,'hr')[0];
		var oDot=getClass(oHr,'dot');
		var oTimeLine=getClass(oHr,'timeline');

		for(var i=0;i<oDot.length;i++){
			oDot[i].index=i;
			EventUtil.addHandler(oDot[i],'mouseover',function(){

				oTimeLine[this.index].style.display="block";
			});
			EventUtil.addHandler(oDot[i],'mouseout',function(){
				
					oTimeLine[this.index].style.display="none";
				
			})
		}

	};
	_Intro();

	//导航，时钟缓冲进入
  
     var cross=function(){

     	var navBox=getClass(document,'nav_box')[0];
     	var oFooter=document.getElementsByTagName("footer")[0];
     	setTimeout(function(){

     		move(navBox,{left:0});
     		move(oFooter,{left:0});
     	
     	},2000)
     };

     cross();

     //点击看大图
        
     var Click_Img=function(){

     	var oThird=getId('third');
     	var Dl_Box=getClass(oThird,'dl_box')[0];
     	var aDl=Dl_Box.getElementsByTagName("dl");
     	var aMark=getClass(document,'mark');
     	var now=0;
     	var aBtn=getClass(document,'btn');
     	var aImg=Dl_Box.getElementsByTagName("img");
     	
     
	     for(var i=0;i<aImg.length;i++){

	     	aImg[i].index=i;	
	     	EventUtil.addHandler(aImg[i],'click',function(){
	     		now=this.index;		
	     		aMark[this.index].style.display="block";	
	     	});

	     	EventUtil.addHandler(aBtn[i],'click',function(){
	     		aMark[now].style.display="none";	
	     	});

	     }

     };
     Click_Img();



};








