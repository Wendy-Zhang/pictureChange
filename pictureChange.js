window.onload = function(){

var imgList = document.getElementById("imgList");
var imgArr = document.getElementsByTagName("img");
imgList.style.width = 323 * imgArr.length +"px";/*让所有图片都可以在父元素Outer中排列*/

 var navDiv = document.getElementById("navDiv");
 var outer = document.getElementById("outer");
 navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";/*使超链接图标居中*/

 var index = 0;/*获取默认序列号*/
 var allA = document.getElementsByTagName("a");//获取所有的a
 allA[index].style.backgroundColor = "pink"; 

for(var i = 0;i < allA.length;i++){  //遍历所有超链接，并获取当前点击的超链接，并切换至该画面
	allA[i].num = i;  //为每个超链接设置num属性
	allA[i].onclick = function(){   //为超链接绑定单击响应函数

		clearInterval(timer);    //关闭定时器
		index = this.num;   //当前点击超链接的值赋给index
		
		/*imgList.style.left = -323 * index +"px"; */   //切换图片效果不够好，用下面的move（）函数代替
	 
	  setA(); //调用下面函数
      move(imgList, "left", -323 * index, 10, function(){   //调用move()函数，使得图片切换有动画效果
       autoChange();   //手动切换图片结束重新开启自动切换
       });

	};
}

autoChange();

function setA(){   //为选中的超链接创建一个函数

//判断当前照片是否是最后一张
if(index >= imgArr.length - 1){
	index = 0;      //是则将索引设为0，即第一张
   imgList.style.left = 0;   //最后一张照片和第一张是一模一样，通过CSS将最后一张切换为第一张
}


for(var i = 0;i < allA.length;i++){
     allA[i].style.backgroundColor = "";   //遍历所有超链接，以空串覆盖内联样式
   }
       allA[index].style.backgroundColor = "pink";   //使得指定的超链接点击后变色
};

var timer;
//创建一个函数实现图片自动切换
function autoChange(){
	timer = setInterval(function(){   //设置定时器切换图片的时间
		index++;
		index %= imgArr.length;  //使得图片切换只在0~4之间变换
		move(imgList,"left",-323 * index,10,function(){
	       setA(); //回调函数
        });
	},3000);
};




};








