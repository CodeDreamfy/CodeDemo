var DropBox = function(elem){

  var inits, flag,wW = $(window).width(), wH = $(window).height();
  //初始化
  var ox, oy, mx, my;
  var _init = function(e){
    _bindEvent()
    return this;
  }

  var _bindEvent = function(e){
    var oxm, oxy;
    $(elem).on('mousedown', function(event){
      flag = true;
      var o = $(elem).position();
      mx = event.pageX - o.left;
      my = event.pageY - o.top;
    }).on('mousemove', function(event){
      if(flag){
        var _that = $(this),osx,oxy;
        osx = event.pageX - mx;
        osy = event.pageY - my;
        if((osx>=0 && osx<= wW) || (osy>=0 && osy<= wH)){
          _that.css({
            top: osy,
            left: osx
          })
        }else {
          _that.css({
            top: 0,
            left: 0
          })
        }
      }else {
        return false
      }
    }).on('mouseup', function(){
      flag = false;
    })
  }

  return {
    init: function(){
      if(!inits){
        inits = _init();
        return inits;
      }
    }
  }
}

var ms = new DropBox('.odiv');
var ms2 = new DropBox('.odiv2');
ms.init()
ms2.init()
