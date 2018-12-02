var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")

//last element is NaN
textByLine.pop();
let frequencies = new Array;
frequencies.push(0);


let bool = false;
let i = 0;

while (!bool) {
  const result = frequencies[frequencies.length - 1] + parseInt(textByLine[i]);
  if (frequencies.includes(result)) {
    console.log(result);
    bool = true;
  }
  frequencies.push(result);
  i = (i+1)%textByLine.length;
}