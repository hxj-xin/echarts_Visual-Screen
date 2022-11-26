function fn(){
    var radar = document.getElementsByClassName('radar')[0];
    var myChart= echarts.init(radar);
    var option = {

        radar: {
            
            indicator: [
              { name: '机场', max: 300 },
              { name: '商场', max: 250 },
              { name: '火车站', max: 300 },
              { name: '汽车站', max: 300 },
              { name: '地铁', max: 250 }
            ],
            shape: 'circle',
            radius: '55%',
           
            splitNumber: 4,
            axisName: {
              color: '#0095E7'
            },
            splitLine: {
              lineStyle: {
                color: '#8DBFD2',
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#79B4CB'
              }
            }
        },

        series: [
            {
              name: 'Beijing',
              type: 'radar',
              
              data:[[203, 97, 220, 100, 70]],
              // 内部数据区域边框
              itemStyle: {
                normal: {
                    color: '#fff',
                    // width: 1
                }
              },
              // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 6,
                // 设置小圆点颜色
                itemStyle: {
                  color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                  show: true,
                  fontSize: 10,
                  color: '#fff',
                },
              // 内部数据区域整体背景
              areaStyle: {
                color: 'rgba(221,233,233, .5)'
              }
            }
        ]

    };
    myChart.setOption(option);
    window.addEventListener('load',function(){
        myChart.resize();
    });
    window.addEventListener('resize',function(){
        myChart.resize();
    })
}
fn();