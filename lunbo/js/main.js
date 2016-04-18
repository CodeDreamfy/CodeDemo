$(function(){
  var pl = [0,321,642,963];
  var arrh = [0,0,0,0];
  var $box = $(".box");
  for(var i=0; i<ms.length; i++){

    var $li = $('<li><img src="#" /><div class="content-txt"></div></li>');
    if(i <= 3){
      $li.find('img').attr('src', ms[i].url);
      $li.css('top', 0);
      $li.css('left', pl[i]);
      arrh[i] = ms[i].height + 87;
    }else if(i > 3){
      var h_index = arrh.indexOf(Math.min.apply(Math, arrh));
      $li.find('img').attr('src', ms[i].url);
      $li.css('top', arrh[h_index]);
      $li.css('left', pl[h_index]);
      arrh[h_index] = arrh[h_index] + ms[i].height +87;
    }
    $box.append($li);
  }
  
})

var ms = [
  {
    url: 'http://usr.im/236x210',
    height: 210
  },
  {
    url: 'http://usr.im/236x230',
    height: 230
  },
  {
    url: 'http://usr.im/236x180',
    height: 180
  },
  {
    url: 'http://usr.im/236x260',
    height: 260
  },
  {
    url: 'http://usr.im/236x300',
    height: 300
  },
  {
    url: 'http://usr.im/236x180',
    height: 180
  },
  {
    url: 'http://usr.im/236x120',
    height: 120
  },
  {
    url: 'http://usr.im/236x160',
    height: 160
  },
  {
    url: 'http://usr.im/236x190',
    height: 190
  },
  {
    url: 'http://usr.im/236x560',
    height: 560
  },
  {
    url: 'http://usr.im/236x220',
    height: 220
  },
  {
    url: 'http://usr.im/236x136',
    height: 136
  }
];
