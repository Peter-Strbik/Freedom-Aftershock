var m = 1;
var d;
var i;
var currday = document.getElementById("currday");

//number of days in months in 2016
//0 is placeholder so [1] == january
var months = [0, 31, 29, 31, 30, 31, 30] //everything after June is irrelevant

while (m <= 6){
	d = 1;
	while (d <= months[m]){ //goes through each day in each month Jan->June
		//for i in len(dem_data):
		//	if i[2] == m and i[3] == d: 
		//		#state held the primary that day
		//		color_state(i[1], i[4], i[5])
		
		//wait 1 second
		console.log("a day passed.");
		currday.textcontent = m + "/" + d + "/16";
		d += 1;
	}
	m += 1
}
