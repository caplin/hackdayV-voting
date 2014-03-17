var express = require('express');
var path = require('path');
var fs = require('fs');

var Vote = require('SocialChoice');

var vote = new Vote(({transform:[]}));
var fileId = Date.now();
var votesFile = "./logs/votes-"+(fileId)+".js";
var peopleLogFile = "./logs/votes-"+(fileId)+".txt";

var peopleVoted = {};


fs.appendFileSync(votesFile, "var vote = new (require('SocialChoice'))({transform:[]});\n" +
		"var registerVote = require('../voteutils').registerVote;\n" +
		"var allVotes = [];\n" +
		"var voteLog = {};\n" +
		"module.exports = vote;\n\n");

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/submit', function(req, res) {
	console.log(req.query);
	try {
		var dataString = req.query.vote;
		var data = JSON.parse(dataString);
		fs.appendFileSync(votesFile, "// "+Date.now()+" "+data.name+"\n");
		fs.appendFileSync(votesFile, "var voteRecord = "+JSON.stringify(data, null, 2)+";\n");
		fs.appendFileSync(votesFile, "allVotes.push(voteRecord);\n" +
				"registerVote(vote, voteLog, voteRecord);\n\n");

		fs.appendFileSync(peopleLogFile, Date.now()+"\t"+data.name+"\t\t"+(data.team?data.team:'NO TEAM')+"\t\t"+data.vote.slice(0, data.vote.length - 1).join(", ")+"\t\t"+data.vote[data.vote.length - 1].join(", ")+"\n");

		console.log(Date.now()+"\t"+dataString);
		var alreadyVoted = false;
		if (peopleVoted[data.name] > 0) {
			alreadyVoted = true;
			peopleVoted[data.name]++;
		} else {
			peopleVoted[data.name] = 1;
		}

		vote.rank.apply(vote, [1].concat(data.vote));

		console.log("Vote Record : "+JSON.stringify(peopleVoted));
		if (alreadyVoted) {
			console.log("\nWARNING: "+data.name+" has already voted.\n\n");
			res.end("Already voted");
		} else {
			res.end("You voted!");
		}
	} catch (e) {
		console.log(e);
		res.status(e.status || 500);
		res.end("Error: "+e);
	}
});

app.listen(80);
