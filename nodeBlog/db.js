var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/nodeblog'
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', function(){ console.error.bind(console, 'connection error:')})
db.once('open', function(){
  console.log('success');
})

var BookSchema =  mongoose.Schema({
  name: String,
  age: Number,
  date: Date,
  data: Array
});
var Book = mongoose.model('Book', BookSchema);

var book = new Book({
  name: 'zy',
  age: 25,
  date:  new Date(),
  data: ['1','2']
})
book.save(function(err, result){
  console.log(result)
})
