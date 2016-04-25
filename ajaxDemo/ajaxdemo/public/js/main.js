var xhr = new XMLHttpRequest(); //创建ajax对象
var data = null;
xhr.onreadystatechange = function(){  //必须在open方法之前使用，是异步操作判断的常用方法
  if(xhr.readyState == 4){
    if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
      console.log(xhr.responseText)
      data = JSON.parse(xhr.responseText);
      console.log(data,data.date);
    }
  }
}
xhr.open('get', '/login', true);
xhr.send(null);

function Father(){
  if(this instanceof Father){
    this.name = 'name';
    this.age = 47;
    this.list = function(){
      return {name: this.name, age: this.age}
    }
  }else {
    return new Father();
  }
}

// function add1(num1, num2){
//   return num1 + num2;
// }
// function add2(re, num3){
//   return add1.apply(this, [re,num3])
// }
// console.log(add1(1,2), add2(1,2))

// function out(){
//   inner();
// }
// function inner(){
//   console.log(arguments.callee.caller)
// }
//
// out()

window.color = "red";
var o = { color:'blue'};
function sayColor(){
  console.log( this.color)
}
sayColor.call(this); //red
sayColor.call(window); //red
sayColor.call(o); //blue
