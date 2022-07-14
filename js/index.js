// 柱状图1模块
(function () {
    // 1.声明模块
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.配置设置
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标指示器，坐标触发有效
                type: 'shadow'//默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        //   x周
        xAxis: [
            {
                type: 'category',
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                        // width: 1,
                        // type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        //   实际数据更改
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",//柱状宽度
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {//设置的圆角样式
                    barBorderRadius: 5
                }
            }
        ]
    };
    // 3.把配置给实例对象
    myChart.setOption(option);
    //4.让图表跟随自适应、图表提供了resize()方法
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    // 数据变化时
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    // document.querySelector(".bar h2").addEventListener("click",function(e){
    // console.log(111,e.target);
    // })
    $(".bar h2").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).index()].data;
        myChart.setOption(option);
    })


})();

// 柱状图2
(function () {
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
    var data = [70, 34, 60, 78, 69];
    var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
    var valdata = [702, 350, 610, 793, 664];
    // 颜色设置
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: { show: false },
        yAxis: [
            {
                type: 'category',
                data: titlename,
                inverse: true,
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 侧边文本颜色
                axisLabel: {
                    color: "#fff",
                    rich: {
                        lg: {
                            backgroundColor: "#339911",
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 15
                        }
                    }
                },
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                yAxisIndex: 0,
                data: data,
                type: 'bar',
                name: "条",
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 柱子设为圆角
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        // params 传进来的是柱子对象
                        color: function (params) {
                            console.log(params)
                            // dataIndex 是当前柱子的索引号
                            return myColor[params.dataIndex];
                        }
                    }
                },
                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        formatter: "{c}%"
                    }
                },
            }, {
                yAxisIndex: 1,
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 折线图
(function () {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 573, 310, 213, 180, 200, 180, 79]
        ]
    };
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis',
            //   formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            textStyle: {
                color: "#4c9bfd"
            },
            right: '10%'
        },
        xAxis: {
            type: 'category',
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            axisTick: {
                show: false//去除刻度线
            },
            name: 'x',
            axisLabel: {
                color: 'rgba(255,255,255,.7)' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false,  // 去除轴内间距
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false//去除刻度
            },
            axisLabel: {
                color: '#4c9bfd'//文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                },

            },

            name: 'y',
            //   minorSplitLine: {
            //     show: true
            //   }
        },
        series: [
            {
                name: '新增粉丝数',
                smooth: true,
                type: 'line',
                data: data.year[0]
            },
            {
                name: '新增游客数',
                type: 'line',
                smooth: true,
                data: data.year[1]
            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 折线图2
(function () {
    var myChart = echarts.init(document.querySelector(".line1 .chart"));

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: "0%", textStyle: { color: "rgba(255,255,255,.5)", fontSize: "12" }
        },

        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                type: 'category',
                boundaryGap: false,
                // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },
            },

        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '商品售卖量',
                type: 'line',
                stack: 'Total',
                smooth: true,
                // 填充区域
                areaStyle: {
                    // 渐变色，
                    color: new
                        echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }

                        ],
                            false
                        ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"

                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],

            },
            {
                name: "利润",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            },
        ]
    };
    myChart.setOption(option);

})();
// 饼图
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {

        tooltip: {
            trigger: 'item'
        },
        legend: {

            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '50%'],
                color: [
                    "#065aab",
                    "#066eab",
                    "#0682ab",
                    "#0696ab",
                    "#06a0ab",
                ],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],

            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 饼图2
(function () {
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));
    var option = {
        legend: {
            top: '90%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "12"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                },
                // 引导线调整
                labelLine: {
                    // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                },

                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 地图引入
(function(){
    
})()