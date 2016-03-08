var mongoose = require('mongoose');

var user = mongoose.model('User', mongoose.Schema({
  username: String,
  password: String,
  date: Date
}));

module.exports = function(){
    return user
}
