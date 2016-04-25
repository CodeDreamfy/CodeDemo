
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index', { title: 'Hello Express'})
  });
  app.get('/login', function(req, res){
    res.status(200).send(obj);
  })
}

var obj = {
  name : 'zy',
  age : 24,
  date: new Date()
}
