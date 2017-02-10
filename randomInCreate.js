var randomInteger = function() {
	var ival =Math.random()*256;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;

}
var i, rInt ;
var voorhees = 0;
for (i = 0; i < 65536; i ++){
	rInt = randomInteger();
	if (rInt == 13)voorhees++;
	//console.log(rInt+",");
	//process.stdout.write(rInt+",");
}
console.log("\n\n Instances of 13 = "+voorhees);
