Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Norsk mediebarometer'
    },
    subtitle: {
        text: 'Source: https://www.ssb.no/medie'
    },
    xAxis: {
        categories: ["1991", "2000", "2018", "2019"]
    },
    yAxis: {
        title: {
            text: 'Prosent'
        },
        labels: {
            formatter: function () {
                return this.value + "%";
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: false
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Papiravis',
        data: [ 81, 82, 60, 48 ]
    }, {
        name: 'Fjernsyn',
        data: [ 81, 82, 60, 48 ]
        
    }, {
        name: 'Radio',
        data: [ 71, 57, 50, 48 ]
    }, {
        name: 'Lydmedier',
        data: [ 43, 50, 51, 55 ]
    }, {
        name: 'Ukeblad',
        data: [ 21, 17, 5, 4 ]
    }, {
        name: 'Bøker',
        data: [ 24, 20, 24, 25 ]
    }, {
        name: 'Tidsskrifter',
        data: [ 18, 14, 6, 7 ]
    }, {
        name: 'Tegneserieblad',
        data: [ 11, 9, 3, 3 ]
    }, {
        name: 'Serier/Film/Video',
        data: [ 10, 10, 37, 43 ]
    }, {
        name: 'Internett',
        data: [ 0, 27, 91, 90 ]
    }]
});