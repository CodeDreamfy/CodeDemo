$(function(){
  var $s1 = $('.s1');
  var $s2 = $('.s2');
  var $overlay = $('.overlay', $s2);
  var $user = $('.num .user', $s2);
  var $pc = $('.num .pc', $s2);
  $s1.on('click', '.btnwrap .solo', function(){
    $s1.hide();
    $s2.show();
  });
  $s2.on('click', '.ranbtn', function(){
    soloRandom();
    setTimeout(function(){
      $overlay.show();
    }, 1000);
  });
  $overlay.on('click', function(){
    $(this).hide().find('i').removeClass(function(elem){
      if(elem != 'result'){
        return true;
      }
    });
    $user.find('b').html('--');
    $pc.find('b').html('--');
  })
  function soloRandom(){
    var userR = parseInt(Math.random()*6+1);
    var system = parseInt(Math.random()*6+1);
    var flag;
    if( userR >= system ){
      flag = (userR > system)?true:false;
      if(flag){
        $overlay.find('i').addClass('winner').html("恭喜，你赢了！");
      }else{
        $overlay.find('i').addClass('draw').html("平局，再来一局！");
      }
    }else{
      flag = false;
      $overlay.find('i').addClass('loster').html("sorry，你输了！");
    }
    
    $user.find('b').html(userR);
    $pc.find('b').html(system);
    return flag;
  }
})