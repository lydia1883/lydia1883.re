/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-11 16:36:39
 * @version $Id$
 */

 function getStyle(obj,attr){

 		if(obj.currentStyle){
 			return obj.currentStyle[attr];
 		}else{

 			return getComputedStyle(obj,false)[attr];	
 		}
 }

 function move(obj,json,fnEnd){

 	clearInterval(obj.timer);
 	obj.timer=setInterval(function(){
 		
 		
 		var _Stop=true;
 		var cur=0;	
 		for(var attr in json){

 			if(attr=='opacity'){
 				cur=Math.round(parseFloat(getStyle(obj,attr))*100);				
 			}else{
				cur=parseInt(getStyle(obj,attr));
 			}	
 			var speed=(json[attr]-cur)/6;
 			speed=speed>0?Math.ceil(speed):Math.floor(speed);

 				if(cur!=json[attr]){
 					_Stop=false;
 				}	
 				if(attr=='opacity'){
 					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
 					obj.style.opacity=(cur+speed)/100;	

 				}else{

 					obj.style[attr]=cur+speed+'px';
 				}
 		}

 				if(_Stop){
 					if(fnEnd)fnEnd();	
 				}	
		},30);

 }

