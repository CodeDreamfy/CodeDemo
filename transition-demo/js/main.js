$(function(){
  var $box = $('.box');
  $box.on('click', function(){
    var self = $(this);
    if(!self.hasClass('active')){
      self.addClass('active')
    }else{
      self.removeClass('active')
    }
  })
})