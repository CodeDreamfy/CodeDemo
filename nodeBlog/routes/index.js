var User = require('../model/index').User;
var server = require('../server');

module.exports = function(app,db) {
  app.get('/', function(req, res) {
    res.render('index', { title: '主页'});
  });
  app.get('/reg', function(req, res) {
    res.render('reg', { title: '注册', tips: ''})
  });
  app.post('/reg', function( req, res){
    var falg = server.reg(req,res);
    if(falg){
      res.render('login', { title: '登录'})
    }else {
      res.render('reg', { title: '注册' ,tips: '存在错误'})
    }
  });

  app.get('/login', function( req, res){
    res.render('login', { title: '登录'})
  });
  app.post('/login', function(req, res){
    server.login(req,res);
  });
  app.get('/post', function( req, res){
    res.render('post', { title: '文章'})
  });
  app.post('/post', function( req, res){

  });
  app.get('/logout', function( req, res){

  });
}
