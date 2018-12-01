var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")

let count = 0;
for(let i = 0; i<textByLine.length-1; i++){
	count += parseInt(textByLine[i]);
}

console.log("Am ende kommt " + count);