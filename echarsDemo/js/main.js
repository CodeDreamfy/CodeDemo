var myChart = echarts.init(document.getElementsByClassName('wrapper')[0]);
// 指定图表的配置项和数据
  var option = {
      title: {
          text: 'ECharts 入门~'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  };
// 使用刚指定的配置项和数据显示图表。
  // myChart.setOption(option);
  myChart.setOption({
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius: '66%',
        data:[
          {value:400, name:'搜索引擎'},
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:274, name:'联盟广告'},
          {value:235, name:'视频广告'}
        ]
      }
    ]
  })
  console.log(myChart.getWidth(),myChart.getHeight(),myChart.getDom(),myChart.getOption())
