/*
* @Author: dell
* @Date:   2017-08-23 20:27:38
* @Last Modified by:   dell
* @Last Modified time: 2017-08-23 23:45:05
*/
'use strict';
window.onload = function(){
				var oBtn=document.getElementById("btn");
				var oBtn1=document.getElementById("btn1");
				var oBtn2=document.getElementById("btn2");
				var oBox=document.getElementById("box1");
				oBtn.onclick = function(){
					alert(1);
				}
				//必应登录
				oBtn1.onclick = function(){
					if (oBox.style.display=='block') {
						oBox.style.display='none';
					}else{
						oBox.style.display='block';
					}
				//必应登录1
				}
				oBtn2.onclick = function(){
					alert(oBox.style.display);
					if (oBox.style.display=='none') {
						oBox.style.display='block';
					}else{
						oBox.style.display='none';
					}
			}
				//必应登录2
			var oBtn01 = document.getElementById('btn01');
			var oBtn02 = document.getElementById('btn02');
			var oBtn03 = document.getElementById('btn03');
			var oBody = document.getElementById('body');
			oBtn01.onclick = function(){
				oBody.className='yellow';
			}
			oBtn02.onclick = function(){
				oBody.className='green';
			}
			oBtn03.onclick = function(){
				oBody.className='pink';
			}
			//123换肤
			var oBtn04 = document.getElementById('btn04');
			var oBtn05 = document.getElementById('btn05');
			var oBtn06 = document.getElementById('btn06');
			var oBody = document.body;
			oBtn04.onclick = function(){
				oBody.className='yellow';
			}
			oBtn05.onclick = function(){
				oBody.className='green';
			}
			oBtn06.onclick = function(){
				oBody.className='pink';
			}
			//123换肤1
	/*		var oBtn07 = document.getElementById('btn07');
			var oBtn08 = document.getElementById('btn08');
			var oBtn09 = document.getElementById('btn09');
			var oBody = document.body;
			oBtn07.onclick = function(){
				oBody.style.background='red';
			}
			oBtn08.onclick = function(){
				oBody.style.background='green';
			}
			oBtn09.onclick = function(){
				oBody.style.background='blue';
			}*/
   // 因为涉及id=body 所以它和换肤 换肤1发生冲突 所以 要备注一个
 		var oBtn10 = document.getElementById('btn10');
		var oBtn11 = document.getElementById('btn11');
		var oBtn12 = document.getElementById('btn12');
		var oLink = document.getElementById('link');
		oBtn10.onclick = function(){
			oLink.href = 'skin1.css';
		}
		oBtn11.onclick = function(){
			oLink.href = 'skin2.css';
		}
		oBtn12.onclick = function(){
			oLink.href = 'skin3.css';
		}
		//因为前面body 定义了 id 和 class 所以对它的背景色造成影响 要想显示背景色去掉body里面的id和class就可以了
		var aDiv = document.getElementsByTagName('div');
		alert(aDiv.length);
		//div个数
		//一位前面隐藏了一个div所以显示四个
		//
		

	/*	aDiv[1].onclick = function(){
		alert('1');	
	}*/  //和下面的点击改变背景色事件发生冲突所以隐藏



/*		aDiv[1].onclick = function(){
		this.style.background = 'blue';
	}
	aDiv[2].onclick = function(){
		this.style.background = 'yellow';
	}
	aDiv[3].onclick = function(){
		this.style.background = 'black';
	}

	*/


	for(var i=1;i<aDiv.length;i++){
		aDiv[i].onclick = function(){
		this.style.background = 'yellow';

		}
	}
	//点击每个div 都变色
	var oDiv = document.getElementById('box2');
	oDiv.onmouseover = function(){
		toBig();
	}
	oDiv.onmouseout = function(){
		toSmall();
	}
	function toBig(){
		var oDiv = document.getElementById('box2');
		oDiv.style.width = '200px';
		oDiv.style.height = '200px';
		oDiv.style.background = 'green';	
	}
	
	function toSmall(){
		var oDiv = document.getElementById('box2');
		oDiv.style.width = '100px';
		oDiv.style.height = '100px';
		oDiv.style.background = 'red';	
	}

}