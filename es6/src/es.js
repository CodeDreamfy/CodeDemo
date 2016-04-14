// var arr = [];
// for(var i =0; i<3; i++){
//   arr[i] = function(){
//     console.log(i)
//   }
// }
// console.log(arr[0]())
//
// var le = "zy";
//
// if(true){
//   le = 'zy-out';
//   console.log(le)
//   let le = 'zy-inner';
//   console.log(le)
// }
//
// var { op: a, lhs: { op: b }, rhs: c }
//        = getASTNode()

// var [zy,mz] = []

// function arr(x,...y) {
//   return  x * y.length
// }
// console.log(arr(1,[1,2,3]))

// function f(x, y, z) {
//   console.log( x + y + z );
// }
// // Pass each elem of array as argument
// f(...[1,2,3])

// function f() {
//   {
//     let x;
//     {
//       const x = "sneaky";
//       // x = "foo";
//     }
//     x = "bar";
//     // let x = "inner";
//   }
// }

// var tmp = new Date();
//
// +function(){
//   console.log(tmp);
//   if (false){
//     var tmp = "hello world";  //变量提升
//   }
// }()

// var s = 'hello';
//
// for (var i = 0; i < s.length; i++){ //换成let会未定义
//   console.log(s[i]);
// }
//
// console.log(i);

// function f() { console.log('I am outside!'); }
// (function () {
//   if(false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }
//
//   f();
// }());

// const a = [];
// a.push("Hello");
// console.log(a);
// a = {};
//
// let [foo,...y] = [1,[2,3,4],5];
// console.log(foo)
// function ap(x,y){
//   return x + y;
// }
// console.log(ap.apply(undefined,[1,2]));

// var arr = 'cst';
// console.log(arr.includes('t'));
// console.log(arr.startsWith('t'));
// console.log(arr.endsWith('t'));
//
// console.log('w3c'.padStart(2,'he'))
// Number.EPSILON.toFixed(20)

// console.log(Math.trunc(10.222))

// var arr = [1,2,3,4,5,6]
// for(let index of arr.key()){
//   console.log(index);
// }
// [,'a'].forEach((x,i) => console.log(i))
// console.log(Array.from(['a',,'b']))

// function fetch(url, { body = '', method = 'GET', headers = {} }){
//   console.log(method);
// }
//
// fetch('http://example.com', {})
// console.log(...[1,2,3])
// var more = [1,2,3,4,5,6];
// console.log([1,2, ...more));
// (()=> 'aas')()
// var obj = {
//   method(){ return 'xxx'}
// }
// console.log(obj.method())

// var promise = new Promise(function(resolve, reject){
//   //do something
// })
// promise.then(function(data){
//   //success
// }, function(){
//   //failure
// })
