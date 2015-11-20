+function (){
  var $lunbo = $('.lunbo');
  var $slidewrap = $('.slide-wrap', $lunbo);
  var $slidelist = $('.slide-box ul', $slidewrap);
  var biglist = $slidelist.children();
  var timer, index = 0,len = biglist.length;
  biglist.eq(0).show();
  timer = setInterval(function(){
    if(index>len-1){
      index = 0;
    }else if(index < 0){
      index = len;
    }
    biglist.eq(index).fadeIn('fast').siblings().hide();
  }, 1500)

}()