// echarts
const chartStore = {
    // pie: null,
    bar: null,
    line: null,
}

const optionForBar = (data) => {
    let option = {
        title: {
            text: 'IMDB top250 按类型划分',
        },
        xAxis: {
            data: data.axis,
            name: '电影类型',
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            name: '电影数量',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data.data
            }
        ]
    }
    return option
}

const optionForType = (type) => {
    let data = {
        axis: [],
        data: [],
    }
    _.each(type, (v, k) => {
        data.axis.push(k)
        data.data.push(v.length)
    })
    let option = optionForBar(data)
    return option
}

const optionForLine = (data) => {
    let option = {
        title: {
            text: ' IMDB Top250 平均分数'
        },
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                params = params[0]
                let value = params.value
                let s = value[0] + ': ' + value[1]
                return s
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            name: '上映时间',
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: '平均分',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            },
            min: 8,
        },
        series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
        }]
    }
    return option
}

const optionForYear = (year) => {
    let data = _.map(year, (v, k) => {
        let avg = _.meanBy(v, 'score')
        let o = {
            name: k,
            value: [k, avg.toFixed(2)],
        }
        return o
    })
    let option = optionForLine(data)
    return option
}

const renderChart = (d) => {
    let data = d

    // 对 data 数据按照 type 进行分组
    let type = _.groupBy(data, 'type')
    let typeOption = optionForType(type)
    let bar = chartStore.bar
    bar.setOption(typeOption)

    // 对 data 数据按照 year 进行分组
    let year = _.groupBy(data, 'year')
    let yearOption = optionForYear(year)
    let line = chartStore.line
    line.setOption(yearOption)
}

const fetchMovies = () => {
    let d = movieJSON()
    renderChart(d)
}

const initedChart = () => {
    _.each(chartStore, (v, k) => {
        let selector = '#' + k
        let element = document.querySelector(selector)
        let chart = echarts.init(element)
        chartStore[k] = chart
    })
}

const __main = () => {
    initedChart()
    fetchMovies()
}

document.addEventListener('DOMContentLoaded', () => {
    __main()
})
