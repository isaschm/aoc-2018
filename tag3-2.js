var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")

//last element is NaN
textByLine.pop();

let test = "#1 @ 469,706: 15x28"
let valueMap = new Map();
let idMap = new Map();

//id übergeben, wenn irgendwo inkrementiert wird, id cutten

//returns input as array 
function parse (element){
    let line = element.split(" ");
    let gridId = line[0].substring(1);

    //where to start
    let beginI = parseInt(line[2].split(",")[0]);
    let beginJ = line[2].split(",")[1];
    beginJ= parseInt(beginJ.substring(0, beginJ.length-1));

    //extension
    let extensionRight = parseInt(line[3].split("x")[0]);
    let extensionDown = parseInt(line[3].split("x")[1]);
  
    
    return [beginI, beginJ, extensionRight, extensionDown, gridId];
}

//increments value in square by checking of key already exists
function incrementValue(map, key){
	typeof map.get(key) == 'undefined' ? valueMap.set(key, 1) : valueMap.set(key, 2);
}

function generateKeys(arr){
	for(i = arr[0]; i< arr[0]+arr[2]; i++){
		for (j = arr[1]; j< arr[1]+arr[3]; j++){
			let key = "i" + i.toString() + "j" + j.toString();
			incrementValue(valueMap, key);
		}
	}
}

/*
function countXs (map){
	for (const item of map){
		if(item[1]> 1)
			count++;
	}
}
*/

textByLine.forEach(function(element){
	idMap.set(parse(element)[4]);
	generateKeys(parse(element));
});


console.log(parse(test));

console.log(typeof valueMap);