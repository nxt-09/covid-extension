Papa.parse("https://data.incovid19.org/csv/latest/case_time_series.csv", {
    download: true,
    dynamicTyping: true,
    complete: function (results) {
        // console.log(results);

        $(tot_conf).html((results.data[results.data.length - 2][3]).toLocaleString('en-US'));
        $(tot_rec).html((results.data[results.data.length - 2][5]).toLocaleString('en-US'));
        $(tot_dth).html((results.data[results.data.length - 2][7]).toLocaleString('en-US'));

        $(dly_date).html((results.data[results.data.length - 2][1]));
        $(dly_conf).html((results.data[results.data.length - 2][2]).toLocaleString('en-US'));
        $(dly_rec).html((results.data[results.data.length - 2][4]).toLocaleString('en-US'));
        $(dly_dth).html((results.data[results.data.length - 2][6]).toLocaleString('en-US'));

        $(dly_date_1).html((results.data[results.data.length - 3][1]));
        $(dly_conf_1).html((results.data[results.data.length - 3][2]).toLocaleString('en-US'));
        $(dly_rec_1).html((results.data[results.data.length - 3][4]).toLocaleString('en-US'));
        $(dly_dth_1).html((results.data[results.data.length - 3][6]).toLocaleString('en-US'));

        $(dly_conf_2).html((results.data[results.data.length - 4][2]).toLocaleString('en-US'));
        
        var x01 = 100*(results.data[results.data.length - 2][2]-results.data[results.data.length - 3][2])/results.data[results.data.length - 2][2];
        var y01 = Math.round(x01);
        if (y01 >= 0) {
            var z01 = "+" + y01;
          } else {
            z01 = y01
          }
        $(pct01).html(z01 + "%");

        var x12 = 100*(results.data[results.data.length - 3][2]-results.data[results.data.length - 4][2])/results.data[results.data.length - 4][2];
        var y12 = Math.round(x12);
        if (y12 >= 0) {
            var z12 = "+" + y12;
          } else {
            z12 = y12
          }
        $(pct12).html(z12 + "%");

    }
}
);