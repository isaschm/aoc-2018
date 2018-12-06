var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")

//last element is NaN
textByLine.pop();
textByLine.pop();


let squares = new Array(1500).fill(0).map(x => Array(1500).fill(0));

let test = "#3 @ 5,5: 2x2"

function parse (element){
    let line = element.split(" ");
    let beginOben = parseInt(line[2].split(",")[0]);
    let beginLinks = line[2].split(",")[1];
    beginLinks= parseInt(beginLinks.substring(0, beginLinks.length-1));
    let extensionRight = parseInt(line[3].split("x")[0]);
    let extensionDown = line[3].split("x")[1];
    extensionDown = parseInt(extensionDown.substring(1, extensionDown.length));
    
    return [beginOben, beginLinks, extensionDown, extensionRight];
}

function countUp(field, beginTop, beginLeft, extRight, extDown){
    for (let i = beginTop; i< extDown+beginTop;i++){
        for(let j = beginLeft; j < extRight+beginLeft;j++){
            field[i][j] += 1;
        }
    }
    return field;
}

function countXs(field){
    let count =0;
 
    field.forEach(function(element) {for (let i= 0; i<element.length; i++){if (element[i]> 1) count++;}});
    
    return count;
}

let allxs = textByLine.forEach(function(element) {
	countXs(countUp(squares, parse(textByLine)[0], parse(textByLine)[1], parse(textByLine)[3], parse(textByLine)[2]));
});
console.log(allxs);

console.log(textByLine.includes(undefined));