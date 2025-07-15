$(function () {
    "use strict";
    $(".sparkline1").sparkline("html",{
        type: "bar",
        barWidth: 5,
        height: 50,
        barColor: "#0083CD",
        chartRangeMin: 0,
        chartRangeMax: 10
    }), $(".sparkline2").sparkline("html",{
        type: "bar",
        barWidth: 5,
        height: 50,
        barColor: "#fff",
        lineColor: "rgba(255,255,255,0.5)",
        chartRangeMin: 0,
        chartRangeMax: 10
    });
    var e = new Rickshaw.Graph({
        element: document.querySelector("#rickshaw2"),
        renderer: "area",
        max: 100,
        series: [{
            data: [{x: 0,y: 40},{x: 1,y: 49},{x: 2,y: 38},{x: 3,y: 30},{x: 4,y: 32},{x: 5,y: 40},{
                x: 6,
                y: 20
            },{x: 7,y: 10},{x: 8,y: 20},{x: 9,y: 25},{x: 10,y: 35},{x: 11,y: 20},{x: 12,y: 40},{x: 13,y: 25}],
            color: "#2B333E"
        },{
            data: [{x: 0,y: 40},{x: 1,y: 49},{x: 2,y: 38},{x: 3,y: 30},{x: 4,y: 32},{x: 5,y: 40},{x: 6,y: 20},{
                x: 7,
                y: 10
            },{x: 8,y: 20},{x: 9,y: 25},{x: 10,y: 35},{x: 11,y: 20},{x: 12,y: 40},{x: 13,y: 25}],color: "#73a9e7"
        }]
    });
    e.render(), new ResizeSensor($(".br-mainpanel"),function () {
        e.configure({width: $("#rickshaw2").width(),height: $("#rickshaw2").height()}), e.render()
    });
    var a = document.getElementById("chartBar4").getContext("2d");
    new Chart(a,{
        type: "horizontalBar",
        data: {
            labels: ["Jan","Feb","Mar","Apr","May","Jun"],
            datasets: [{
                label: "# of Votes",
                data: [12,39,20,10,25,18],
                backgroundColor: ["#324463","#5B93D3","#7CBDDF","#5B93D3","#324463"]
            }]
        },
        options: {
            legend: {display: !1,labels: {display: !1}},
            scales: {
                yAxes: [{ticks: {beginAtZero: !0,fontSize: 10}}],
                xAxes: [{ticks: {beginAtZero: !0,fontSize: 11,max: 80}}]
            }
        }
    });
    var r = [{label: "Series 1",data: [[1,10]],color: "#677489"},{
        label: "Series 2",
        data: [[1,30]],
        color: "#218bc2"
    },{label: "Series 3",data: [[1,90]],color: "#7CBDDF"},{
        label: "Series 4",
        data: [[1,70]],
        color: "#5B93D3"
    },{label: "Series 5",data: [[1,80]],color: "#324463"}];

    function t(e,a) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + e + "<br/>" + Math.round(a.percent) + "%</div>"
    }

    $.plot("#flotPie2",r,{
        series: {
            pie: {
                show: !0,
                radius: 1,
                innerRadius: .5,
                label: {show: !0,radius: 2 / 3,formatter: t,threshold: .1}
            }
        },grid: {hoverable: !0,clickable: !0},legend: {show: !1}
    })
});