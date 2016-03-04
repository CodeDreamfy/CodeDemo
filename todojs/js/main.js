$(function(){

})

//bolg-tit-animate
+function(){
  var $blogTit = $('.blog-title');
  var text = $blogTit.html();
  var list = text.split('');
  var _str = '';
  for(var i = 0 ; i < list.length; i++){
    _str += '<span>'+ list[i]+'</span>';
  }
  $blogTit.html(_str);
  var _spans = $blogTit.find('span');
  setInterval(function(){
    _spans.each(function(index,elem){
      $(this).delay(index*70).animate({'color':'#2130f2'},function(){ $(this).css({color:'#0d1b5f'})});
    });
  }, 3000);
}()

//blog-motto
+function(){
  var path = 'http://transit.hakupoint.com/?reg=http://api.hitokoto.us/rand?cat=a&charset=utf-8';
  var $blogMotto = $('.blog-motto p');
  $.get(path, function(data){
    $blogMotto.html(data.hitokoto)
  })
}()
