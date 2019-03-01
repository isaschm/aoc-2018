var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n");

textByLine.pop();

let test = [
	"[1518-04-29 00:03] Guard #1069 begins shift",
	"[1518-05-19 00:50] wakes up",
	"[1518-09-27 00:13] falls asleep",
	"[1518-11-08 00:26] falls asleep",
	"[1518-04-09 00:02] Guard #1877 begins shift",
	"[1518-10-23 00:01] falls asleep",
	"[1518-08-30 00:49] wakes up",
	"[1518-09-13 00:00] Guard #1093 begins shift",
	"[1518-04-26 23:56] Guard #1277 begins shift",
	"[1518-11-19 00:04] Guard #3461 begins shift",
	"[1518-07-30 00:01] Guard #919 begins shift",
	"[1518-04-12 00:38] falls asleep",
	"[1518-07-19 00:34] wakes up"
]

//sort array according to dates
test.sort(function(a,b) {
	let dateA = new Date(2018, parseInt(a.substring(6,8)), parseInt(a.substring(9,11)), parseInt(a.substring(12,14)), parseInt(a.substring(15,17)));
	let dateB = new Date(2018, parseInt(b.substring(6,8)), parseInt(b.substring(9,11)), parseInt(b.substring(12,14)), parseInt(b.substring(15,17)));
	return ((dateA < dateB) ? -1 : ((dateA>dateB) ? 1 : 0));
});

console.log(test);