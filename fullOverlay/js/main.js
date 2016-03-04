+function(){
  //string2json
  function string2json(){
    var str = $.trim(arguments[0]);
    var obj = {};
    if(str.length != 0){
      var param = str.split(',');
      for(var i=0; i<param.length; i++){
        var o =  param[i].split(':');
        obj[o[0]] = o[1]
      }
    }
    return obj;
  }

  var $body = $('body');
  //overlay
  $body.on('click', '[data-dialog]', function(){
    console.log('start');
    var $this = $(this);
    var param = string2json( $this.data('dialog') );

    var $dialog = $([
      '<div class="ui-slide-dialog">',
        '<div class="swiper-container">',
          '<div class="swiper-wrapper">',
          '</div>',
        '</div>',
      '</div>'
    ].join(''));


  })

}();
