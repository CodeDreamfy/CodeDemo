/**
 * 摇一摇
 * @param {Function} callback [description]
 */
function Shake(callback, threshold){
  // 定义一个摇动的阀值
  var SHAKE_THRESHOLD = threshold || 1500;
  // 定义一个变量保存上次更新的时间
  var last_update = 0;
  // 定义x、y、z记录三个轴的数据以及上一次出发的时间
  var x, y, z, last_x, last_y, last_z;

  /**
   * 摇一摇 初始化
   * @return {[type]} [description]
   */
  function motionInit(){
    if(window.DeviceMotionEvent){
      // 移动浏览器支持运动传感事件
      window.addEventListener('devicemotion', deviceMotionHandler, false);
    }else{
      // 移动浏览器不支持运动传感事件
      callback('no support');
    }
  }

  /**
   * 运动回调
   * @param  {[type]} eventData [description]
   * @return {[type]}           [description]
   */
  function deviceMotionHandler(eventData){
    // 获取含重力的加速度
    var acceleration = eventData.accelerationIncludingGravity;
    // 获取当前时间
    var curTime = new Date().getTime();
    var diffTime = curTime -last_update;

    if(diffTime > 100){
      last_update = curTime;
      x = acceleration.x;
      y = acceleration.y; 
      z = acceleration.z;
      var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
      if (speed > SHAKE_THRESHOLD) {
        callback();
      }
      last_x = x;
      last_y = y;
      last_z = z;
    }
  }

  motionInit();
}
