 

(function(){
	var _title = '雷诺冬季服务月开始啦！';
    var _desc = '疯狂摇一摇，即可赢免费代金/抵扣券，快来参加！';
    var _link = 'http://app.hocodo.com/webapps/weixin_renault/renault_game/index.html';
    var _imgUrl = 'http://app.hocodo.com/webapps/weixin_renault/renault_game/images/sns.jpg'; 
	
	var url = window.location.href.split("#")[0];
    var signPackage;
    var info = {
                    appId: '',
                    secret: '',
                    url: url
                }
 
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "http://app.hocodo.com/webapps/weixin_renault/weixinservice/weixinservice.php?callback=?", 
		data: { "param": JSON.stringify(info) },
        async: false,
        success: function (data) {
            console.dir(data);
		    wx.config({
				debug: true,
				appId: data.appId,
				timestamp: data.timestamp,
				nonceStr: data.nonceStr,
				signature: data.signature,
				jsApiList: [
				  // 所有要调用的 API 都要加到这个列表中	  
				   'checkJsApi',
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'hideMenuItems',
					'showMenuItems',
					'hideAllNonBaseMenuItem',
					'showAllNonBaseMenuItem',
					'getNetworkType',
					'openLocation',
					'getLocation',
					'hideOptionMenu',
					'showOptionMenu',
					'closeWindow',
                    'addCard',
                    'chooseCard',
                    'openCard'
					]
			});
			
		wx.ready(function () {
       
    // 在这里调用 API
    // 2. 分享接口
    // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
      
        wx.onMenuShareAppMessage({
            title: _title,
            desc: _desc,
            link: _link,
            imgUrl: _imgUrl,
            trigger: function (res) {
                //alert('用户点击发送给朋友');
            },
            success: function (res) {
              //  alert('已分享');
                lottery();
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
            }
        });
        

    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
  
        wx.onMenuShareTimeline({
            title: "参与即可赢丽江马代游！雷诺春季服务月开始啦，刷一刷，小诺带你游世界！",
            link: _link,
            imgUrl: _imgUrl,
            trigger: function (res) {
               // alert('用户点击分享到朋友圈');
            },
            success: function (res) {
               // alert('已分享朋友圈');
                lottery();
            },
            cancel: function (res) {
               // alert('已取消');
            },
            fail: function (res) {
               // alert(JSON.stringify(res));
            }
        });
			
			
		})	//end of wx.ready 
			
		}
	})


 
})();

