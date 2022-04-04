Papa.parse("https://data.incovid19.org/csv/latest/case_time_series.csv", {
    download: true,
    dynamicTyping: true,
    complete: function (results) {
        console.log(results);

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
    }
}
);