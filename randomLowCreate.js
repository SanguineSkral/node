var randomInteger = function() {
	var ival =Math.random()*26+97;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;

}
var i, rInt ;
var voorhees = 0;
for (i = 0; i < 65536; i ++){
	rInt = randomInteger();
	if (rInt == 119)voorhees++;
	//console.log(rInt+",");
	//process.stdout.write(rInt+",");
	letter = String.fromCharCode(rInt);
	process.stdout.write(letter);
}
console.log("\n\n Instances of w = "+voorhees);
