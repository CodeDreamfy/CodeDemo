$(function(){
  var aInput = $(':input');
  var oBorder = $('#border');
  var $form = $('.form1');

  $form.on('focus', 'input', function(){
    changeMove($(this));
  });
  function changeMove(obj){
    console.log(obj.css('width'))
    var x = {
      w: obj.css('width'),
      h: obj.css('height'),
      t: obj.position().top+'px',
      l: obj.position().left+'px'
    }
    oBorder.stop().animate({width:x.w,height:x.h,top:x.t,left:x.l},'fast');
  }

})