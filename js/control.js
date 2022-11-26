// 完成rem适配
function setRem(){
    var clientWidth= document.clientWidth||document.body.clientWidth;

    clientWidth = clientWidth>1920? 1920:clientWidth;
    clientWidth = clientWidth<1024? 1024:clientWidth;

    // 我的电脑尺寸1366*768  为了让每一个rem等于80px  /18
    var rem = clientWidth/17.075;

    var html=document.getElementsByTagName('html')[0];
    html.style.fontSize=rem + 'px';
}
window.onload = setRem;
window.onresize = setRem;
// 设备监控
function control() {
    var controls = document.getElementsByClassName('control');
    var massage = document.getElementsByClassName('massage');
    for(var i=0;i<controls.length;i++){
        controls[i].setAttribute('index',i);
        controls[i].onclick = function(){
            var index = this.getAttribute('index');
            for(var k=0;k<controls.length;k++){
                controls[k].classList.remove('active');
                controls[index].classList.add('active');
            }
            for(var j=0;j<massage.length;j++){
                massage[j].style.display='none';
                massage[index].style.display='block';
            }
        }
    }
    var scroll= massage[0].children[0];
    scroll.onmouseenter=function(){
        this.classList.remove('scroll');
    }
    scroll.onmouseleave=function(){
        this.classList.add('scroll');
    }
}
control();

// 点位分布统计
(function(){
    var pie=document.getElementsByClassName('pie')[0];
    var myChart=echarts.init(pie);
    
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
              name: '老陈学员分布',
              type: 'pie',
              label: {
                fontSize:10  
              },
              labelLine: {
                length: 2,
                length2: 4,
              },
              radius: [10, 60],
              center: ['50%', '50%'],
              roseType: 'radius',
              itemStyle: {
                borderRadius: 3
              },
              data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '河南' }
              ]
            }
        ]

    };
    myChart.setOption(option);
    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load',function(){
        myChart.resize();
    })
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})()

// 用户总量
function user(){
    var bar=document.getElementsByClassName('bar')[0];
    var myChart= echarts.init(bar);
    var option = {
        grid: {
            containLabel:true,
            // show: true,
            top:'10%',
            left:'2%',
            right:'3%',
            bottom:'1%'
          },
          tooltip: {
            trigger: "item",
            // show : true,
            // 柱体背景阴影、线
            axisPointer: {
               type: 'none'
            }
          },
          xAxis: {
            type: 'category',
            data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            //  轴线
            axisLine: {
              lineStyle: {
                color: 'rgba(0, 240, 255, 0.3)',
              },
            },
            // 刻度
            axisTick: {
              alignWithLabel: false,
              show : false,
            },
            // x 轴文字颜色
            axisLabel: {
                color: "#71f2fb"
            },
          },
          yAxis: [{
            type: 'value',
            //  轴线
            axisLine: {
              show: true,
              lineStyle: {
                 color: '#0092B4',
              },
            },
            // 刻度
            axisTick: {
                alignWithLabel: false,
                show : false,
            },
            // 分割线
            splitLine: {
                 lineStyle: {
                  color: 'rgba(0, 240, 255, 0.3)'
                 }
            },
            // y 轴文字颜色
            axisLabel: {
                color: "#71f2fb"
            }
          },
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                 color: '#0092B4',
              },
            },
          }
          ],
          series: [
            {
              data: [
                2100, 
                1900, 
                1700,
                1560,
                1400,
                {
                  value: 1200,
                  itemStyle: {
                     color: '#153E61'
                  },
                  tooltip: {
                    extraCssText: "opacity:0;",
                  },
                },
                {
                  value: 1200,
                  itemStyle: {
                     color: '#153E61'
                  },
                  tooltip: {
                    extraCssText: "opacity:0;",
                  },
                },
                {
                  value: 1200,
                  itemStyle: {
                     color: '#153E61'
                  },
                  tooltip: {
                    extraCssText: "opacity:0;",
                  },
                },
                900,
                750,
                600,
                480,
                240
              ],
              type: 'bar',
              name: 'User',
              // 柱体颜色
              color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                     offset: 0, color: '#00FFFE' // 0% 处的颜色
                    }, {
                    offset: 1, color: '#0069D0' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
              }
            }
          ]
    };
    myChart.setOption(option);
    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load',function(){
        myChart.resize();
    });
    // 当屏幕重置大小的时候 继续调用echarts的重置大小方法
    // 自动适应当前屏幕
    window.addEventListener('resize',function(){
        myChart.resize();
    })
}
user();


