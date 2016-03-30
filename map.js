var m = 1;
var d = 0;
var currday = document.getElementById("currday");
var states = [];

//number of days in months in 2016
//0 is placeholder so [1] == january
var months = [0, 31, 29, 31, 30, 31, 30] //everything after June is irrelevant

d3.csv("2016DemPrimary.csv", function(rows){
    states = rows;
    console.log(states)
    setInterval( function() {
	d += 1;
	if (d == months[m]){
	    m += 1;
	    d = 1;
	}
	for (var i = 0; i < states.length; i++){
	    if (states[i].Month == m && states[i].Day == d && states[i].BernieSanders != 0){
			console.log(states[i].StateName);
			d3.select("#" + states[i].fips)
			.transition()
			.duration(3000)
			.style("fill", "rgb(" + [255 * (states[i].HillaryClinton / 100), 0, 255 * (states[i].BernieSanders / 100)].join(",") + ")")
	    }
	}
	currday.innerHTML = m + "/" + d + "/16";
    }, 1000);
});