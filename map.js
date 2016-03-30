var m = 1;
var d = 0;
var currday = document.getElementById("currday");
var states = [];

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
		//console.log(states[i].StateName);
			d3.select("#" + states[i].fips)
			.transition()
			.duration(3000)
			.style("fill", "rgb(" + [255 * (states[i].HillaryClinton / 100), 0, 255 * (states[i].BernieSanders / 100)].join(",") + ")")
	    }
	}
	currday.innerHTML = m + "/" + d + "/16";
    }, 500);

});

//number of days in months in 2016
//0 is placeholder so [1] == january
var months = [0, 31, 29, 31, 30, 31, 30] //everything after June is irrelevant


var doStuff = function(){
};

//var doStuff = function(){
   // setInterval(function() {d += 1;}, 2000); 
   // while (m <= 6){
//	d = 1;
//	while (d <= months[m]){ //goes through each day in each month Jan->June
//		for (var i = 0; i < states.length; i++){
//			if (states[i].Month == m && states[i].Day == d){
//			    console.log(states[i].fips);
//			}
		//		#state held the primary that day
		//		color_state(i[1], i[4], i[5])
		
		//wait 1 second
		//console.log("a day passed.");
//		currday.textcontent = m + "/" + d + "/16";
//		}
//	}
//	m += 1
//    }
//};
