// map
(function(){
    var geo=document.getElementsByClassName('geo')[0];
    var myChart = echarts.init(geo);
    // 
    var geoCoordMap = {
        成都: [103.9526, 30.7617],
        三亚:[109.5227,18.2577],
        呼和浩特: [111.4124, 40.4901],
        银川市:[106.2064,38.5026],
        北京: [116.4551, 40.2539],
        银川: [106.3586, 38.1775],
        拉萨: [91.1865, 30.1465],
        井冈山: [114.3030,26.7498],
        九寨沟: [103.9441,33.1649],
        乌鲁木齐: [87.9236, 43.5883],
        哈尔滨: [127.9688, 45.368]
      };
      var BJData = [
        [{ name: '成都' }, { name: '三亚', value: 95 }],
        [{ name: '成都' }, { name: '呼和浩特', value: 90 }],
        [{ name: '成都' }, { name: '北京', value: 70 }],
        [{ name: '成都' }, { name: '银川', value: 60 }],
        [{ name: '成都' }, { name: '拉萨', value: 50 }],
        [{ name: '成都' }, { name: '井冈山', value: 40 }],
        [{ name: '成都' }, { name: '九寨沟', value: 30 }]
      ];
      var SHData = [
        [{ name: '呼和浩特' }, { name: '拉萨', value: 50 }],
        [{ name: '呼和浩特' }, { name: '北京', value: 70 }],
        [{ name: '呼和浩特' }, { name: '北京', value: 70 }],
        [{ name: '呼和浩特' }, { name: '乌鲁木齐', value: 95 }]
      ];
      var GZData = [
        [{ name: '三亚' }, { name: '呼和浩特', value: 90 }],
        [{ name: '三亚' }, { name: '北京', value: 70 }],
        [{ name: '三亚' }, { name: '拉萨', value: 50 }],
        [{ name: '三亚' }, { name: '哈尔滨', value: 50 }]
      ];
      var planePath =
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord]
            });
          }
        }
        return res;
      };
      var color = ['#a6c84c', '#ffa022', '#46bee9'];
      var series = [];
      [
        ['四川航空', BJData],
        ['东方航空', SHData],
        ['南方航空', GZData]
      ].forEach(function (item, i) {
        series.push(
          {
            name: item[0] + '',
            type: 'lines',
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: 'red',
              symbolSize: 3,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + '',
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
             
              symbolSize: 15
            },
            lineStyle: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + '',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              show: true,
              position: 'right',
              formatter: '{b}'
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              color: color[i]
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
            })
          }
        );
      });
      option = {
        tooltip: {
          trigger: 'item'
        },
      
        geo: {
          map: 'china',
          aspectScale: 0.8, // 长宽比
          zoom: 1,
          // 省份名称
          label: {
            show: false,
          },
          roam: true,
          itemStyle: {
            areaColor: '#052A57',
            borderColor: '#005AB3'
          },
          emphasis: {
            label: {
              show: true,
              // 省份颜色
              color : '#fff',
            },
            itemStyle: {
              areaColor: '#0093B8'
            }
          }
        },
        series: series
      };
      myChart.setOption(option);
      window.addEventListener('load',function(){
        myChart.resize();
      });
      window.addEventListener('resize',function(){
        myChart.resize();
      })
})()