var fs = require('fs');
var path = require('path');

var filenames = fs.readdirSync(path.join(__dirname, "logs"));

filenames = filenames.filter(function(name) {
	return name.substring(0, 5) === 'votes' && name.substring(name.length - 2, name.length) === 'js';
}).sort().forEach(function(file) {
	console.log("FILE: "+file);
	var v = require("./logs/"+file);
	console.log(v.getRankingResult().rankedPairs());
	console.log("\n");
});