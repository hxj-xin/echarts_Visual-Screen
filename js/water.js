(function (){
    var water=document.getElementsByClassName('water')[0];
    var myChart = echarts.init(water);
    let compositeScore = 0.68;
    var option = {
        graphic: [
           {
              type: "group",
              left: "31%",
              top: "60%",
              children: [
                 {
                    type: "text",
                    z: 100,
                    left: "10%",
                    top: "20",
                    style: {
                       fill: "#fff",
                       text: "综合评分",
                       font: "16px PingFangSC-Regular",
                    },
                 },
              ],
           },
        ],
        series: [
           {
              type: "liquidFill", //水位图
              radius: "85%", //显示比例
              center: ["45%", "50%"], //中心点
              data: [compositeScore], // data个数代表波浪数
              color: ["rgba(99,215,233, 0.7)"], //波浪颜色
              backgroundStyle: {
                 color: {
                    type: "linearGradient",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                       {
                          offset: 1,
                          color: "rgba(17,65,86,0.3)",
                       },
                       {
                          offset: 0.51,
                          color: "rgba(32,0,4,0)",
                       },
                       {
                          offset: 0,
                          color: "rgba(99,54,54,0.2)",
                       },
                    ],
                    globalCoord: false,
                 },
              },
              label: {
                 //标签设置 68%
                 position: ["50%", "45%"],
                 formatter: compositeScore * 100 + "%", //显示文本
                 fontSize: "30px",
                 fontFamily: "DINAlternate-Bold",
                 fontWeight: "bold",
                 color: "#fff",
              },
              outline: {
                 show: true,
                 borderDistance: 5,
                 itemStyle: {
                    borderColor: "#1B5151",
                    borderWidth: 1,
                 },
              },
           },
        ],
     };
    myChart.setOption(option);
    window.addEventListener('load',function(){
        myChart.resize();
    });
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();