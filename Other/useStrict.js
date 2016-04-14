// function obj(){
//   "use strict";
//   this.name = 'a';
// }
// var a = new obj();
// console.log()

// obj();
// function obj(){
//   try{
//     if(this !== window){
//       throw new Error();
//       return false;
//     }
//   }catch(e){
//     console.dir(e);
//   }
// }
// // var a = new obj();
// // console.log(a.name);
//
// obj();
// new obj();
// function obj(){
//   "use strict";
//   this.name = 'zy'
// }
//
// obj();
// new obj();

function f(){
// 　　"use strict";
　　return !this;
}
f();
