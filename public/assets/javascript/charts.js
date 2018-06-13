// get value from dropdown
var userOption = $("#charts-dropdown").options.val()

if (userOption)

if (userOption === "chart1") {
    barChart();
}
else (userOption === "chart2") {
    lineChart();
}

