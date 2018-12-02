var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")

//last element is NaN
textByLine.pop();

function eliminate1s(string){
	let arr = string.split("").sort();
	const doval = arr.map((letter) => {return {count:1, letter:letter}})
	.reduce((a, b) => {a[b.letter] = (a[b.letter] || 0) + b.count 
		return a}, {});
	return doval;
}

function check2s(obj){
	var duplicates = Object.keys(obj).filter((a) => obj[a] === 2)
	if (duplicates.length > 0) return true;
}

function check3s(obj){
	var duplicates = Object.keys(obj).filter((a) => obj[a] === 3)
	if (duplicates.length > 0) return true;
}

let count2s= 0;
textByLine.forEach(function(element) {if(check2s(eliminate1s(element))) count2s++;});

let count3s = 0;
textByLine.forEach(function(element) {if(check3s(eliminate1s(element))) count3s++;});

console.log(count2s * count3s);