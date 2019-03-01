var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")

//last element is NaN
textByLine.pop();

let test = "#1 @ 469,706: 15x28"
let valueMap = new Map();
let idMap = new Map();

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
function incrementValue(key, id){
	if(typeof valueMap.get(key) == 'undefined'){
		valueMap.set(key, id);
	} else {
		let tmp = valueMap.get(key);
		let newTmp = tmp + " + " + id;
		valueMap.set(key, newTmp);
	}
}

function generateKeys(arr){
	for(i = arr[0]; i< arr[0]+arr[2]; i++){
		for (j = arr[1]; j< arr[1]+arr[3]; j++){
			let key = "i" + i.toString() + "j" + j.toString();
			incrementValue(key, arr[4]);
		}
	}
}

textByLine.forEach(function(element){
	idMap.set(parse(element)[4], 1);
	generateKeys(parse(element));
});

for (const item of valueMap.values()){
	let ids = item.split(" + ");
	if(ids.length > 1){
		for (const item2 of ids){
			if(idMap.has(item2)) idMap.delete(item2);
		}
	}
};

console.log(idMap);