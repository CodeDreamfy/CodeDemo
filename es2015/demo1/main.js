"use strict";

// $(function(){
//   var a = [];
//   for(let i=0; i<10; i++){
//     a[i] = function(){console.log(i);}
//   }
//   //console.log(a[6]());
  
//   let foo =2;
//   if(true){ 
//     //console.log(foo);
//     let foo =3;
//   }
// });
// {
//   let con = 5;
//   console.log(con);
// }
// function f() { console.log("i am outside!");}
// (function(){
//   if(false){
//     function f(){ console.log("i am inside!")}
//   }
//   f();
// }())

// {
  //let [x, ...z] = [1,2,3,4];
  //console.log(z); //[2,3,4]

  // let [x,y,z] = new Set(["a", "b", "c"]);
  // console.log(x);

//   var { foo: baz} = { foo: "aaa"};
//   console.log(baz);
// }

var todo = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {text:'add to todo'}
    ],
    len: '',
    isA: false,
    flag: false
  },
  methods: {
    addTodo: function(){
      var text = this.newTodo.trim();
      if(text){
        this.todos.push({text:text});
        this.newTodo = '';
        this.flag = true;
        var _this= this;
        setTimeout(function(){
          _this.flag = false;
        },2000);
      }
    },
    removeTodo: function(index){
      this.todos.splice(index,1);
    },
    addClass: function(){
      this.isA = true;
    },
    removeClass: function(){
      this.isA = false;
    }
  },
  computed: {
    len: {
      get: function(){
        return this.todos.length;
      }
    }
  }
});
//定义
var MyComponent = Vue.extend({
  template: '<div>A custom component!</div>'
});
//注册
Vue.component('my-component', MyComponent);

new Vue({
    el: '#example'
})










