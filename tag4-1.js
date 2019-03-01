var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n");

//last element ist undefined
textByLine.pop();