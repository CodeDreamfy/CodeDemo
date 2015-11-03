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
    $(obj).addClass('active').siblings().removeClass('active');
    var _index = $(obj).index()+1;
    $(obj).parent().next().find('[data-index='+_index+']').show().siblings().hide();
  }

})