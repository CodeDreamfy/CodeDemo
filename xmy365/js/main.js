$(function(){
  var swiperkv = new Swiper('.swiper-container',{
    autoplay: 2000,
    direction: 'horizontal',
    loop: true,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    paginationElement : 'a'
  });

  var $favorite = $('.top .status .favorite');
  var $topNavigation = $('.top .status .site-navigation');
  var $topNavigationList = $('.top .status .navigation-list');
  $favorite.on('mouseenter', '.rel a', function(){
    $(this).addClass('active');
    $favorite.find('.second').fadeIn();
  }).on('mouseleave', function(){
    $(this).find('.rel a').removeClass('active');
    $favorite.find('.second').fadeOut();
  });
  $topNavigation.on('mouseenter', '.rel a', function(){
    $(this).addClass('active');
    $topNavigationList.fadeIn();
  }).on('mouseleave', function(){
    $(this).find('.rel a').removeClass('active');
    $topNavigationList.fadeOut();
  });

  var $navlist = $('.kvBox .navlistBox .navlist');
  $navlist.on('mouseenter', 'li', function(){
    $(this).addClass('active').children('div').fadeIn();
  }).on('mouseleave', 'li', function(){
    $(this).removeClass('active').children('div').fadeOut();
  });

  var $hotShopTablist = $('.main .hotShop .tablist');
  var $hotShopItemWrap = $('.main .hotShop .itemWrap');
  $hotShopTablist.on('mouseenter', 'a', function(){
    console.log('sasa');
    var _index = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $hotShopItemWrap.children().hide().eq(_index).fadeIn();
  });

  var $specialty = $('.specialty');
  $specialty.on('mouseenter', '.tablist a', function(){
    var _index = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).parent().next().children().eq(_index).show().siblings().hide();
  });

});