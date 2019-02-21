var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")

//last element in textByLine is NaN
textByLine.pop();

//returns chars that a and b have in common as new string
function trimChars(a,b){
	if(typeof a !== 'string' || typeof b !== 'string') throw new Error("Input is not a String");

	if (a.length !== b.length) throw new Error ("Strings don\'t have same length");

	let returnString = "";
	for (i = 0; i<a.length; i++){
		if(a[i] === b[i]) returnString += a[i];
	}

	return returnString;
}

textByLine.forEach((e1)=> textByLine.forEach((e2)=>{
	if(trimChars(e1, e2).length === 25){
		console.log(trimChars(e1, e2))
	}
	}
	));


//for test suite
//module.exports = {trimChars};