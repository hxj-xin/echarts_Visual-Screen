(function(){
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    var sline= document.getElementsByClassName('sline')[0];
    var myChart = echarts.init(sline);
    var option = {
        color: ['#00F6F5','#FF2817'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['预期销售额', '实际销售额'],
          left:'100',
          top: '-3',
          textStyle: {
            color:'#009DFD'
          }
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          show: true,// 显示边框
          borderColor: '#00304A',// 边框颜色
          containLabel: true,
          width: 'auto',
          height: 'auto'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#009DFD',
            interval: 1,
           
          },
          boundaryGap: false  // 去除轴内间距
       
        },
        yAxis: {
          type: 'value',
          name:'单位：万',
          nameTextStyle: {
             color:'#009DFD',
             align: 'left',
             verticalAlign: 'top',
             fontSize: 12
          },
          axisLine: {
            show: true,
            lineStyle: {
              color : '#00304A',
            },
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#009DFD'
          },
          splitLine: {
            lineStyle: {
              color : '#00304A'
            }
          }
        },
        series: [
          {
            name: '预期销售额',
            type: 'line',
            stack: 'Total',
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            smooth: true
          },
          {
            name: '实际销售额',
            type: 'line',
            stack: 'Total',
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            smooth: true
          }
        ]
    };
    myChart.setOption(option);

    // 点击切换 年 季 月 周
    var tabTime = document.getElementsByClassName('at');
    var indexl=0;
    var timerl=null;
    for(var i=0; i<tabTime.length;i++){
      tabTime[i].setAttribute('indexl',i);
      tabTime[i].onclick = function(){
        var indexl= this.getAttribute('indexl');
        for(var k=0;k<tabTime.length;k++){
          tabTime[k].classList.remove('active');
          tabTime[indexl].classList.add('active');
        }
        // 获取data
        var dataTime = this.getAttribute('data-time');
        option.series[0].data=data[dataTime][0];
        option.series[1].data=data[dataTime][1];
        myChart.setOption(option);
      }
    }
    // 封装自动切换函数
    function autotab(){
      timerl= setInterval(function(){
        indexl ++;
        if(indexl >= tabTime.length){
          indexl=0;
        }
        tabTime[indexl].click();
      },1000)
    }
    autotab();
    
    // 鼠标移入 移出
    var sale_= document.getElementsByClassName('sale')[0];
    sale_.onmouseenter = function(){
      clearInterval(timerl);
    }
    sale_.onmouseleave = function(){
      autotab();
    }

    window.addEventListener('load',function(){
        myChart.resize();
    });
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})()
