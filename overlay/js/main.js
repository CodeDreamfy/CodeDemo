function Overlay(option){

  this.$window = $(window);

  this.option = $.extend({  //默认是this.opt，用户的option覆盖默认样式
    outClick : true, //任意位置点击直接关闭遮罩
    color: '#000',
    opacity: 0.3,
    effect: 'none',
    onShow: function(){},
    onClose: function(){}
  }, option || {}); 
  
  this._init();
  this._bindEvent();
  this.showOverlay();
}
$.extend(Overlay.prototype, {
  _init: function(){
    var _this = this;
    var overlayStyle = {
      position: 'absolute',
      width: _this.$window.width(),
      height: _this.$window.height(),
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: _this.option.opacity,
      background: _this.option.color,
      display: 'none',
      overflow: 'hidden',
      zIndex: '10'
    };
    var overlays= $('<div></div>').addClass('overlay').css(overlayStyle); //返回匹配的元素集合，无论是通过在DOM的基础上传递的参数还是创建一个HTML字符串
    $('body').append(overlays);
    this.$elem = overlays;
    
    this.effect= {
      showAnimate : '',
      closeAnimate : ''
    }
    //判断显示隐藏的动画
    switch(this.option.effect.toLowerCase().slice(0,4)){
      case 'fade':
        _this.effect.showAnimate = 'fadeIn',
        _this.effect.closeAnimate = 'fadeOut';
        break;
      case 'slid':
        _this.effect.showAnimate = 'slideDown',
        _this.effect.closeAnimate = 'slideUp';
        break;
      case 'none':
        _this.effect.showAnimate = 'show',
        _this.effect.closeAnimate = 'hide';
        break;
      default: break;
    }
  },
  _render: function(){},
  _bindEvent: function(){
    var _this = this;
    if(this.option.outClick){
      this.$elem.on('click', function(){
        _this.closeOverlay();
      })
    };
    this.$window.on('resize', function(){
      _this.resizeOverlay();
    })
  },
  closeOverlay: function(){   //调用该方法直接关闭遮罩直接关闭遮罩
    var _this = this;
    this.$elem[this.effect.closeAnimate]('fast', function(){
      _this.option.onClose();
      _this.$elem.remove();
    });
  },
  showOverlay: function(){
    var _this = this;
    this.$elem[this.effect.showAnimate]('fast', function(){
      _this.option.onShow();
    });
  },
  resizeOverlay: function(){
    var w = this.$window.width(),
        h = this.$window.height(),
        _this = this;
    this.$elem.css({
      width: w,
      height: h
    })

  }
});

$.fn.overlay = function(opt){
  return new Overlay(opt);
}

$(function(){
  var $btn = $('.btn');
  $btn.on('click', function(){
    $(this).overlay({
      effect: 'fadeIn', 
      opacity: 0.2, 
      color: 'green',
      onShow: function(){
        $('body').append('<span>this overlay ok</span>')
      }
    });
  })
})