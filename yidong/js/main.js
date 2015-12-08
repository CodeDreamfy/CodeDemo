$(function(){
  var $userMain = $('.user-main');
  var $newsOpt = $('.news-opt', $userMain);
  var $userOpt = $('.user-opt', $userMain);


  $userOpt.on('click', '.fazhan a', function(){
    tabOpt(this);
  })
  $newsOpt.on('click', '.news-tab a', function(){
    tabOpt(this);
  })

  $('.bxslider').bxSlider({
    auto: true,
    captions: true,
    pagerCustom: '#bxslide-page'
  });
  

  function tabOpt(obj){
    var l = $(obj).position().left;
    l == 0 ? -$(obj).position().right : l;
    var _index = $(obj).data('tab');
    $(obj).siblings('.active').stop().animate({left: l}, {easing:'easeOutBounce'} );
    $(obj).parent().next().find('[data-index='+_index+']').show().siblings().hide();
  }

})