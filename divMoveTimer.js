window.onload = function(){
function move(obj, attr,target, speed,callback){  //设置动画的函数。三个参数，还可以添加动画样式参数“attr”
                                  //callback，回调函数，将会在动画执行完毕以后执行
    clearInterval(obj.timer);   //关闭上一个定时器
    //如果要停止当前元素自己的动画，则要改为clearInterval(obj.timer),用来保存自己的定时器标识,下面timer也相应改动

    var current = parseInt(getStyle(obj,attr));//获取当前位置，如果从0到800，为正。如果从800到0，则为负
    if(current > target){
  speed = -speed;
    }
    obj.timer = setInterval(function(){    //开启定时器，进行动画效果
      var oldValue = parseInt(getStyle(obj,attr));  //获取Box1最初的位置值
      var newValue = oldValue + speed;
      //判断向左移动时，目标值是否大于newvalue
      //判断向右移动时，目标值是否小于newvalue
      if(newValue < target && speed < 0  || newValue > target && speed > 0 ){   
        newValue = target;
       }
      obj.style[attr] = newValue + "px";
      if(newValue == target){     //当块元素移动了1000px时，停止定时器
        clearInterval(obj.timer);
        callback && callback();  //动画执行完毕，执行回调函数.加上&&表示有回调函数就执行，没有就不执行。省去不需要执行回调函数的语句中非要写上回调函数才不报错的麻烦
       }                        //例如，box1不需要回调函数的效果，加上callback&&callback（）就不用写上回调函数语句
    },30);
};

function getStyle(obj,name){   //样式函数，使用于各种浏览器，上面的对象可以直接调用
  if(window.getComputedStyle){
    return(getComputedStyle(obj,null)[name]);
  }else{
    return(obj.currentStyle[name]);
  }
};