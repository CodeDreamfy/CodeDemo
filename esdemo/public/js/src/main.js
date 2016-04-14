$(function(){
  Array.from();
  $('.btn').on('click', function(){
    var promise = new Promise(function(resolve, reject) {
      $.ajax({
        url: 'btn',
        dataType: 'json',
        type: 'post',
        success: (data)=>resolve(data),
        error: (e)=>reject(e)
      })
    });
    promise.then(function(json){
      console.log(json);
    })
  })
})
