var fs = require('fs');

var filenames = fs.readdirSync(__dirname);

filenames = filenames.filter(function(name) {
	return name.substring(0, 5) === 'votes' && name.substring(name.length - 2, name.length) === 'js';
}).sort().forEach(function(file) {
	console.log("FILE: "+file);
	var v = require("./"+file);
	console.log(v.getRankingResult().rankedPairs());
	console.log("\n");
});