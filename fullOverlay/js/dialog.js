function string2json(str){
  var str = $.trim(str);
  var obj = {};
  if(str.length != 0){
    var param = str.split(",");
    for(var i=0; i<param.length; i++){
      var o = param[i].split(":");
      obj[o[0]] = obj[o[1]];
    }
  }
  return obj;
}
!function(){
  var $win = $(window);
  var $body = $('body');

  // 图片的比例
  var width = 1600;
  var height = 800;

  var colorClass = ['white', 'black'];

  var scale = width/height;

   // 根据图片比例，位置
  function fullimg(){
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    var $fullimg = $(".fullimg");

    var goalWidth = null;
    var goalHeight = null;
    if(winWidth/winHeight>=scale){
        goalWidth = winWidth;
        goalHeight = Math.ceil(winWidth/scale);
    }else{
        goalHeight = winHeight;
        goalWidth = winHeight*scale;
    }

    var offset = 0;
    if($(window).height()<600){
      offset = 50;
    }else if($(window).height()<650){
      var offset = 40;
    }

    $fullimg.css({
      width: goalWidth,
      height: goalHeight,
      margin:  Math.ceil(-goalHeight/2 - offset) +"px 0 0 "+ Math.ceil(-goalWidth/2) +"px"
    }).show();

    $fullimg.each(function(){
      if($(window).height()>650){
        return false;
      }
      if(/\d/.test($(this).data('position'))){
        offset = parseInt($(this).data('position'));
        $(this).css({
          margin:  Math.ceil(-goalHeight/2 - offset) +"px 0 0 "+ Math.ceil(-goalWidth/2) +"px"
        });
      }
    });
  }

  function fullcontrol($context){
    var winWidth = $win.width();
    var winHeight = $win.height();

    var $control = $(".control", $context);

    var goalWidth = null;
    var goalHeight = null;
    if(winWidth/winHeight>=scale){
        goalWidth = winWidth;
        goalHeight = Math.ceil(winWidth/scale);
    }else{
        goalHeight = winHeight;
        goalWidth = winHeight*scale;
    }

    $control.find('.prev, .next').css({
      top: winHeight / 2 - 35
    });

    $control.find('.page').css({
      top: winHeight - 60
    });
  }

  $win.resize(function(){
    fullimg();
    fullcontrol();
  }).trigger('resize');

  // Event
  $body.on('click', '[data-dialog]', function(event){
    var $this = $(this);
    var param = string2json( $this.data('dialog') );

    var color = [];
    if(!!$this.data('color')){
      color = $this.data('color').split('|');
    }

    if(!!param.content){
      param.content = param.content.split('|');
    }

    if(!!$this.data('position')){
      param.position = $this.data('position').split('|');
    }

    var $dialog = $([
      '<div class="ui-slide-dialog">',
        '<div class="swiper-container">',
          '<div class="swiper-wrapper">',
          '</div>',
        '</div>',
      '</div>'
    ].join(''));
    for(var i = 1; i <= parseInt(param.number); i++){
      var $slide = $('<div class="swiper-slide"></div>');

      var p = {};
      if(!!color[i-1]){
        p = string2json(color[i-1])
      }

      $slide.data('color', $.extend({
        c: 0, // close btn
        p: 0, // prev btn
        n: 0  // next btn
      }, p));

      var $img = $('<img />');
      $img.attr('src', '/images/dialog/'+ param.type +'/'+ i +'.jpg');
      $img.attr('class', 'fullimg');
      if(param.position && param.position[i-1]){
        $img.attr('data-position', param.position[i-1]);
      }
      $img.hide();
      $slide.append($img);

      var $txt = $([
        '<div class="text" style="background-image: url('+ '/images/dialog/'+ param.type +'/'+ i +'-txt.png' +')"></div>'
      ].join(''));
      $slide.append($txt);

      if(!!param.content){
        if(!!param.content[i-1] != '-'){
          var $content;
          $content = $([
            '<div class="content"></div>'
          ].join(''));

          $content.load( '/pages/dialog/' + param.content[i-1], function(){
            $slide.append($content);
          });
        }
      }
      $dialog.find('.swiper-wrapper').append($slide);
    }

    var $control = $([
      '<div class="control">',
        '<div class="wrapper">',
          '<a class="close" href="javascript:;">Close</a>',
          '<a class="prev" href="javascript:;">Prev</a>',
          '<a class="next" href="javascript:;">Next</a>',
          '<span class="page"><i class="now">1</i><i class="total">0</i></span>',
        '</div>',
      '</div>'
    ].join(''));

    $dialog.css({
      'webkitTransformOrigin': event.pageX + 'px ' + event.pageY + 'px',
      'mozTransformOrigin': event.pageX + 'px ' + event.pageY + 'px',
      'msTransformOrigin': event.pageX + 'px ' + event.pageY + 'px',
      'oTransformOrigin': event.pageX + 'px ' + event.pageY + 'px',
      'transformOrigin': event.pageX + 'px ' + event.pageY + 'px'
    }).append($control);

    if(!!param.pager){
      var _p = [];

      _p.push('<div class="slide-pager '+ param.pager +' clearfix">');
      var ac = '';
      for(var i = 0; i < param.number; i++){
        if(i == 0){
          ac = ' active';
        }else{
          ac = '';
        }

        _p.push('<a class="page-item page-item-'+ i + ac +'" data-target="'+ i +'"></a>');
      }
      _p.push('</div>');

      var $pager = $(_p.join(''));

      $dialog.append($pager);
    }


    $body.append($dialog);

    var $slides, $now, $total, $page, $prev, $next, $close;
    $page = $dialog.find('.page');
    $now = $dialog.find('.now');
    $total = $dialog.find('.total');
    $prev = $dialog.find('.prev');
    $next = $dialog.find('.next');
    $close = $dialog.find('.close');
    $total.html(param.number);

    //Event
    $dialog.on('click', '.close', function(){
      if(!!swiper){
        swiper.destroy(true);
      }
      $dialog.remove();
    }).on('click', '.prev', function(){
      swiper.swipePrev();
    }).on('click', '.next', function(){
      swiper.swipeNext();
    });

    // 存在pager
    if(!!param.pager){
      $dialog.on('click', '.slide-pager .page-item', function(){
        var $this = $(this);
        swiper.swipeTo(parseInt($this.data('target')), 300, true);
        $this.addClass('active').siblings('.active').removeClass('active');
        return false;
      });
    }

    if(param.number <= 1){
      $page.hide();
      $prev.hide();
      $next.hide();
      fullimg($dialog);
      $control.fadeIn();
      return false;
    }

    function c(swiper){
      $prev.show();
      $next.show();
      if(swiper.activeIndex == 0){
        $prev.hide();
      }

      if(swiper.activeIndex == $dialog.find('.swiper-slide').length - 1){
        $next.hide();
      }
    }
    function setBtnColor(index){
      var colorParam = $slides.eq(index || 0).data('color');
      $close.attr('class', 'close ' + colorClass[parseInt(colorParam.c)]);
      $prev.attr('class', 'prev ' + colorClass[parseInt(colorParam.p)]);
      $next.attr('class', 'next ' + colorClass[parseInt(colorParam.n)]);
    }

    var swiper = new Swiper('.ui-slide-dialog .swiper-container', {
      loop: false,
      simulateTouch: false,
      onInit: function(swiper){
        $slides = $dialog.find('.swiper-slide');
        c(swiper);

        fullcontrol($dialog);
        fullimg($dialog);
        setBtnColor(swiper.activeIndex);
        $control.fadeIn();
      },
      onTouchMove: function(){
        if($slides.length > 0){
          $slides.addClass('oh');
        }
      },
      onTouchEnd: function(){
        if($slides.length > 0){
          $slides.removeClass('oh');
        }
      },
      onSlideChangeStart: function(swiper){
        $slides.addClass('oh');
        $now.html(swiper.activeIndex + 1);
        setBtnColor(swiper.activeIndex);
        c(swiper);

        if(!!param.pager){
          $dialog.find('.page-item[data-target='+ swiper.activeIndex +']').addClass('active').siblings('.active').removeClass('active');
        }
      },
      onSlideChangeEnd: function(swiper){
        $slides.removeClass('oh');
      }
    });


    return false;
  });

}();
