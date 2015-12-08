$(function(){
  var startItem = [],
      startstatus,
      chose=false, //控制鼠标离开事件执行的函数
      startIndex, //存储点击后的index
      $startP;  //存储星星父级jquery对象
  var $dialog = $('.easy-test');
  var $tips = $('.easy-test .container .tips');
  $dialog.on('click','.step .btn a',function(){
    var $this = $(this).closest('.step'); 
    var _index = $this.index();
    
    if(_index <= 9) {
      if( $(this).hasClass('start-test') || $(this).hasClass('nextbtn')){
        if($(this).hasClass('start-test')){
          $this.addClass('hide').next().removeClass('hide');
        }else {
          if(startIndex){
            $this.addClass('hide').next().removeClass('hide');
            startIndex = '';
            $startP = '';
            chose = false;
            $tips.hide();
          }else {
            $tips.show();
          }
        }
        
      }else {
        $('.easy-test',$dialog).addClass('hide');
      };
    }else if( $this.index() == 10 ) {
      if(startIndex){
        $this.addClass('hide');
        var $random = parseInt(Math.random()*(3-1)+1);
        var $array = ['qingshu', 'wanku', 'xinsheng'];
        $('.step-'+ $array[$random]).removeClass('hide');
      }else {
        $tips.show();
      }
      
    }
  });

  /* start */
 
  
  $dialog.on('mouseenter.removestart', '.step-base .start-item a', function(){
    if(startstatus){
      clearTimeout(startstatus);
    }
    var _this = $(this);
    _this.nextAll().removeClass('active');
    _this.prevAll().addClass('active');
    _this.addClass('active');
  });

  $dialog.on('mouseout.removeStartLeave','.step-base .start-item a',function(){
    var _this = $(this);
    /* 判断是否点击，如果点击了则将存储的index以及之前的全部添加上class */
    if(chose){
      holdStart();
    }else {
      _this.removeClass('active');
      startstatus = setTimeout(function(){
        _this.prevAll().removeClass('active');
      },50);
    }

  }); 

  $dialog.on('mouseout.removeStartLeave','.step-base .start-item',function(){
    if(chose){
      holdStart();
    }else {
      if(startIndex){
        holdStart();
      }else {
         $(this).children().removeClass('active'); 
      }
    }

  });
  
  $dialog.on('click','.step-base .start-item a',function(){ 
    if(!startIndex){
      chose = !chose;
    }
    $startP = '';
    startIndex = '';
    $tips.hide();
    var _this = $(this);
    $startP = $(this).parent();
    startIndex = _this.index()+1;
    
    _this.prevAll().addClass('active');
    _this.addClass('active');

    
    //console.log(chose);
  });

  function holdStart(){
    $startP.children().each(function(index,elem){
      if(index < startIndex){
        $(elem).addClass('active');
      }else{
        $(elem).removeClass('active');
      }
    })
  }
})