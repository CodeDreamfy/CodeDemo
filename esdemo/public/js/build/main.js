'use strict';

$(function () {
  Array.from();
  $('.btn').on('click', function () {
    var promise = new Promise(function (resolve, reject) {
      $.ajax({
        url: 'btn',
        dataType: 'json',
        type: 'post',
        success: function success(data) {
          return resolve(data);
        },
        error: function error(e) {
          return reject(e);
        }
      });
    });
    promise.then(function (json) {
      console.log(json);
    });
  });
});