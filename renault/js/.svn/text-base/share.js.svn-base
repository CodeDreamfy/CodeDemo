(function () {
    var url = window.location.href.split("#")[0];
    var signPackage;

    var info = {
        appId: '',
        secret: '',
        url: url
    }
    // var info = {
    //     appId: 'wx2163fc31a7c0e980',
    //     secret: '43f5f7d0ccff397da7304bbef9bfd0bf',
    //     url: url
    // }

    var imgurl ='http://game.hocodo.com/2015/renault_winter/images/share.jpg';
    var one = { 
        title: '温情冬日，小诺带你游世界！有机会赢取旅游大奖，还有五重好礼等着你',
        desc: '寒冷冬季，小诺送来贴心关怀！5重好礼在专营店等着你！',
        imgUrl: imgurl
    };
    var all = {
        title: '温情冬日，小诺带你游世界！有机会赢取旅游大奖，还有五重好礼等着你',
        imgUrl: imgurl
    };

    wxshare(all,one);
    function wxshare(all,one){
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            // url: "http://202.96.191.232/ajax/Common/WechatJSSDK.asmx/GetWeixinSignPackage?callback=?",
            url: "http://app.hocodo.com/webapps/weixinservice/weixinservice.php?callback=?",
            data: {"param": JSON.stringify(info)},
            async: false,
            success: function (data) {
                console.dir(data);
                wx.config({
                    // debug: true,
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
                        'closeWindow'
                    ]
                });

                wx.ready(function () {
                    wx.onMenuShareAppMessage(one);
                    wx.onMenuShareTimeline(all);
                    wx.onMenuShareQQ(one);
                    wx.onMenuShareWeibo(one);
                });

            }
        })
    }
})();
