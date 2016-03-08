// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
var User = require('../model/index').User;

module.exports = function(app,db) {
  app.get('/', function(req, res) {
    var user = new User({
      username: 'test',
      password: '1234',
      date: new Date()
    })
    user.save(function(err, result){
      if(err) console.log('fail');
      if(result) console.log('success');
      return res.render('index', { title: '主页'});
    });

    User.find({},function(e,r){
      console.log(e,r)
    })



  });
  app.get('/reg', function(req, res) {
    res.render('reg', { title: '注册'})
  });
  app.post('/reg', function( req, res){

  });
  app.get('/login', function( req, res){
    res.render('login', { title: '登录'})
  });
  app.post('/login', function(req, res){

  });
  app.get('/post', function( req, res){
    res.render('post', { title: '文章'})
  });
  app.post('/post', function( req, res){

  });
  app.get('/logout', function( req, res){

  });
}
