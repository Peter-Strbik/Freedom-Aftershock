var states = [];

d3.csv("2016DemPrimary.csv", function(rows){
    states = rows;
    console.log(states)
    test();
});


var test = function(){
    for (var i = 0; i < states.length; i++){
	var wat = states[i].fips;
	console.log(wat);
	d3.select('body')
	  .append('p')
	  .text(states[i].fips);
    }
};
