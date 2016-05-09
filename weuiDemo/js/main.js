$(function(){
  var $weui_tabbar = $('.weui_tabbar'); //全局底部menu
  var $wrapperlist = $('.weui_tab_bd .wrapper .wrapbox');
  var l = $wrapperlist.children().eq(0).width();


  $weui_tabbar.on('click', 'a', function(e){
    var _index = $(this).index();
    var _this = $(this);
    _this.addClass('weui_bar_item_on').siblings().removeClass('weui_bar_item_on');
    $wrapperlist.stop(true,true).animate({ left: -_index*l}, 300)
    console.log("sasa")
  })

})
