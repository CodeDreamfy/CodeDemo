var User = require('./model/index').User;

module.exports = {
  reg: function(req, res){
    var obj = req.body;
    if(obj.username == '' || obj.username.length < 4){
      return false;
    }
    if(obj.password == '' || obj.password < 4){
      return false;
    }
    if(obj.repassword == '' || obj.repassword < 4 || obj.password != obj.repassword){
      return false;
    }
    if(obj.email == '' || obj.email.indexOf('@') == -1 ){
      return false;
    }
    var inputUser = {
      username: obj.username
    }
    User.findOne(function(err, inputUser){
      if(err) console.error(err);
    })
    if(inputUser.username == obj.username){
      return false;
    }else if(inputUser.email == obj.email){
      return false;
    }else {
      var user = new User({
        username: obj.name,
        password: obj.password,
        email: obj.email,
        data: new Date()
      })
      user.save(function(e,r){
        if(r) console.log('success for reg');
      })
      return true;
    }
  },
  login: function(req, res){
    var obj = req.body;
    if(obj.username == ''){
      return false;
    }
    if(obj.password == ''){
      return false;
    }
    var inputUser = {
      username: obj.username
    }
    User.find(function(err, inputUser){
      if(err) console.error(err);
      // if(inputUser.password == obj.password ){
      //   res.render('index', { title: '首页'})
      // }else {
      //   res.render('login', { title: '登录'})
      // }
      for(var i=0; i< inputUser.length; i++){
        if(inputUser[i].username = obj.username){
          if(inputUser[i].password == obj.password){
            res.render('index', { title: '首页'})
          }else {
            res.render('login', { title: '登录'});
          }
        }
      }
    });

  }
}
