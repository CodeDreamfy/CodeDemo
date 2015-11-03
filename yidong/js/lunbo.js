function lunbo(elem, option){
  this.version = '0.0.1';
  this.author = 'CodeDreamfy';
  console.log('version:',this.version);
  console.log('author:',this.author);

  this.elem = $(elem); //传进来的Dom元素可能不是jQuery选择器
  this.opt = {
      direction: 'horizontal',
      speed: 1000
  }
  this.option = $.extend({}, this.opt, option);
  console.log(this.option);
  this._init();
}
$.extend(lunbo.prototype, {
  _init: function(){
    //初始化一些需要的dom，声明变量
    this.inow = 0; //记录当前图片位置序列
    this.timer = undefined; //存储定时器
    this.$small_a = undefined; //存储小圆点
    this.flag = true; //判断动画是否播放完成
    this.$wrapper = $('.wrapper', this.elem); //存储ul
    this.$slide_list = $('li', this.$wrapper); //存储li标签集合
    this.$prev = $('.prev', this.elem);
    this.$next = $('.next', this.elem);
    this.$small_ul = $('.small_ul', this.elem);
    this._render();
    this.$small_a = $('a', this.$small_ul);
    this.lens = $('a', this.$small_ul).length;
    this._bindEvent();
    this.startLine();
    this.$small_a.eq(this.inow).addClass('active');
    
    //this.showImg(this.inow);
  },
  _render: function(){
    //渲染出html结构
    var small_str = '<a href="javascript:;"></a>';
    var len = this.$slide_list.length;
    for(var i = 0; i < len; i++){
      this.$small_ul.append(small_str);
    }
  },
  _bindEvent: function(){
    var _this = this;
    //绑定相应的事件
    _this.elem.on({
      mouseover : function(){
        _this.$prev.show();
        _this.$next.show();
        _this.$small_ul.show();
        clearInterval(_this.timer);
      },
      mouseout : function(){
        _this.$prev.hide();
        _this.$next.hide();
        _this.$small_ul.hide();
        _this.startLine();
      }
    });

    _this.$prev.on('click', function(){
      if(_this.flag){
        _this.inow-=1;
        if(_this.inow < 0) {
          _this.inow = _this.lens-1;
        }
        _this.showImg(_this.inow);
        _this.flag = true;
      }
    });
    _this.$next.on('click', function(){
      if(_this.flag){
        _this.inow+=1;
        if(_this.inow > _this.lens-1) {
          _this.inow = 0;
        }
        _this.showImg(_this.inow);
        _this.flag = true;
      }
    });
    _this.$small_ul.on('click', 'a', function(){
      _this.inow = $(this).index();
      if(_this.flag){
        _this.showImg(_this.inow);
      }
      
    });
  },
  startLine: function(){
    //开始计数
    var _this = this;
    this.timer = setInterval(function(){
      if(_this.inow < _this.lens-1){
        _this.inow+=1;
      }else {
        _this.inow = 0;
      }
      _this.showImg(_this.inow);
    }, 2000);

  },
  showImg: function(inow){
    //展示图片
    var l;
    this.flag = false;
    if(this.option.direction == 'horizontal' || this.option.direction == undefined){
      l = this.$slide_list.eq(this.inow).position().left;
      this.$wrapper.stop(true, true).animate({left: -l}, this.option.speed, 'easeInOutBack', function(){
      });
    }else {
      l = this.$slide_list.eq(this.inow).position().top;
      this.$wrapper.stop(true, true).animate({top: -l}, this.option.speed, 'easeInOutBack', function(){      
      });
    }
    this.$small_a.removeClass('active').eq(this.inow).addClass('active');
    this.flag = true;
  }
})

$.fn.lunbo = function(option){
  console.log(this)
  return new lunbo(this, option);
};
