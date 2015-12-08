+function(){
  var $xmSlideWrap = $('#xmSlideWrap'),
      $xmSlideControl = $('.xmSlideControl', $xmSlideWrap),
      $pagination = $('.pagination', $xmSlideWrap),
      $slideTitle = $('.slide-title', $xmSlideWrap);
  var arrTitle = ['双网通 2999元 | 全网通 3099元','标准版 1799 元起','天然竹特别版 1799 元','女神版 1799 元'];
  var _index=0,slideTime;
  var $xmSlideList = $xmSlideControl.children();
  var $paginationList = $pagination.find('a');
  var title =['双网通 2999元 | 全网通 3099元','标准版 1799 元起','天然竹特别版 1799 元','女神版 1799 元'];
  $xmSlideList.eq(_index).show();
  $pagination.find('a').eq(_index).addClass('active').siblings().removeClass('active');
  $slideTitle.html(title[_index]);
  defaultGo();
  $xmSlideWrap.on('click', '.prev', function(){
    clearInterval(slideTime);
    var $that = $xmSlideList.eq(_index);
    _index--;
    if( _index < 0){
      _index = 3;
    }
    $that.fadeOut('slow');
    $pagination.find('a').eq(_index).addClass('active').siblings().removeClass('active');
    $slideTitle.html(title[_index]);
    $xmSlideList.eq(_index).fadeIn('slow');
    setTimeout(defaultGo,400);
  });
  $xmSlideWrap.on('click', '.next', function(){
    clearInterval(slideTime);
    var $that = $xmSlideList.eq(_index);
    _index++;
    if( _index > 3){
      _index = 0;
    }
    $that.fadeOut('slow');
    $pagination.find('a').eq(_index).addClass('active').siblings().removeClass('active');
    $slideTitle.html(title[_index]);
    $xmSlideList.eq(_index).fadeIn('slow');
    setTimeout(defaultGo,400);
  });
  $pagination.on('click', 'a', function(){
    var _thisIndex = $(this).index();
    if(_thisIndex == _index){
      $xmSlideList.find('a').css('left',0);
      return false;
    }
    clearInterval(slideTime);
    if( _thisIndex > _index){
      $xmSlideList.eq(_thisIndex).css({left: '100%', display: 'block'});
      $xmSlideList.eq(_index).animate({left: '-100%'},'1500',function(){
        $(this).css({display:'none',left:0});
      });
    }else {
      $xmSlideList.eq(_thisIndex).css({left:'-100%',display:'block'});
      $xmSlideList.eq(_index).animate({left: '100%'},'1500',function(){
        $(this).css({display:'none',left:0});
      });
    }
    $xmSlideList.eq(_thisIndex).animate({left:0},'1500');
    _index = _thisIndex;
    $pagination.find('a').eq(_index).addClass('active').siblings().removeClass('active');
    $slideTitle.html(title[_index]);
    //defaultGo();
    setTimeout(defaultGo, 400);
  });

  //默认
  function defaultGo(){  
    slideTime = setInterval(function(){
      $xmSlideList.eq(_index++).fadeOut('slow');
      if( _index >= 4){
        _index = 0;
      }
      $pagination.find('a').eq(_index).addClass('active').siblings().removeClass('active');
      $slideTitle.html(title[_index]);
      $xmSlideList.eq(_index).fadeIn('slow');
    },3000);
  }

}()