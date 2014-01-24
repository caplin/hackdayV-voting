function registerVote(vote, log, voteRecord) {
	var voter = voteRecord.name;
	if (log[voter]) {
		console.log("WARNING : "+voter+" has voted "+log[voter]+" times.");
		log[voter]++;
	} else {
		log[voter] = 1;
	}
	vote.rank.apply(vote, [1].concat(voteRecord.vote));
}

exports.registerVote = registerVote;
