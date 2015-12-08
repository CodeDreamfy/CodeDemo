/**
 * file: module/ui/overlay.js
 * description: 遮罩层
 * author : [" t_fate@163.com "]
 * date : 2014/5/19
 */
define('ui.overlay',['jquery'],function($){

    function Overlay(options){

        this.$window = $(window);

        // 参数配置 
        this.options = $.extend({
            color: '#000',                  // 颜色
            opacity: 0.4,                   // 透明度
            zIndex: 9999,                   // 层z-index
            effect: 'none',                 // fadein | slidedown | none
            onShow: function(){},           // 显示后回调方法
            onClose: function(){},          // 关闭后回调方法
            closeOnClick: false             // 是否开启点击关闭事件
        }, options || {});
        
        this._render();
        this._bindEvent();
    }
    
    /**
     * name: _render
     * description: 渲染  
     * author : [" t_fate@163.com "]
     * date : 2014/5/19
     */
    Overlay.prototype._render = function(){
        var self = this;

        var overlayStyle = {
              background: self.options.color,
              opacity: self.options.opacity,
              top: 0,
              left: 0,
              width: self.$window.width(),
              height: self.$window.height(),
              position: 'fixed',
              zIndex: self.options.zIndex,
              display: 'none',
              overflow: 'hidden'
        }

        var overlay  = $('<div></div>').addClass('ui-overlay').css(overlayStyle);
        $('body').append(overlay);

        // show overlay
        switch(self.options.effect.toLowerCase()){
            case 'fadein':
                  overlay.fadeIn('fast',function(){
                      self.options.onShow();
                  });
              break;
            case 'slidedown':
                  overlay.slideDown('fast',function(){
                      self.options.onShow();
                  });
              break;
            case 'none':
                  overlay.show();
                  self.options.onShow();
              break;
            default:
              break;
        }

        self.$overlay = overlay;
    }
    
    /**
     * name: _bindEvent
     * description:   事件绑定
     * author : [" t_fate@163.com "]
     * date : 2014/5/19
     */
    Overlay.prototype._bindEvent = function(){
         var self = this;

         self.$window.bind('resize.overlay',function(){
              self.$overlay.css({
                  width : self.$window.width(),
                  height : self.$window.height()
              });
         });

         if(self.options.closeOnClick){
              self.$overlay.bind('click',function(){
                  self.close();
              });
         }
    }
    
    /**
     * name: close
     * description: 关闭层  
     * author : [" t_fate@163.com "]
     * date : 2014/5/19
     */
    Overlay.prototype.close = function(){
        var self = this;
        // hide overlay
        switch(self.options.effect.toLowerCase()){
            case 'fadein':
                  self.$overlay.fadeOut('fast',function(){
                      self.$overlay.remove();
                      self.options.onClose();
                  });
              break;
            case 'slidedown':
                  self.$overlay.slideUp('fast',function(){
                      self.$overlay.remove();
                      self.options.onClose();
                  });
              break;
            case 'none':
                  self.$overlay.remove();
                  self.options.onClose();
              break;
            default:
              break;
        }
    }
    
    return Overlay;
});