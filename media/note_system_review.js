x = ["2012-08-10", "2012-08-11", "2012-08-13", "2012-08-18", "2012-08-22", "2012-09-01", "2012-09-07", "2012-09-11", "2012-09-17", "2012-09-20", "2012-09-22", "2012-10-23", "2012-10-24", "2012-11-01", "2012-11-02", "2012-11-05", "2012-11-06", "2012-11-07", "2012-11-08", "2012-11-13", "2012-11-14", "2012-11-15", "2012-11-20", "2012-11-21", "2012-11-22", "2012-11-30", "2012-12-01", "2012-12-10", "2012-12-11", "2012-12-20", "2012-12-21", "2012-12-22", "2012-12-25", "2012-12-28", "2013-01-05", "2013-01-08", "2013-01-09", "2013-01-19", "2013-02-04", "2013-02-14", "2013-02-19", "2013-02-21", "2013-02-22", "2013-02-28", "2013-03-01", "2013-03-04", "2013-03-06", "2013-03-07", "2013-03-11", "2013-03-26", "2013-03-27", "2013-03-30", "2013-04-04", "2013-04-14", "2013-04-19", "2013-04-29", "2013-05-07", "2013-05-24", "2013-06-09", "2013-06-18", "2013-06-25", "2013-08-05", "2013-08-14", "2013-08-15"];
y = [1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2];

var data = [{
    x: x,
    y: y,
    type: 'bar'
    }

           ];

Plotly.newPlot('barChart', data);
a = 0;
data = [{
    x: x,
    y: function(x){return Date.parse(x)}
}

           ];

Plotly.newPlot('sumChart', data);
