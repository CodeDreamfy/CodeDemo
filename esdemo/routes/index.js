// var express = require('express');
// var router = express.Router();
import data from "../model/data"

module.exports = function(app){
  app.get('/', (req, res)=>res.render('index', { title : '首页'}));
  app.post('/btn', function(req, res){
    console.log(data());
    res.send(data());
  })
};
