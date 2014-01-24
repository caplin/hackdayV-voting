var teams = [
	{name: "WeChat", members: ["Weisheng", "Lavanya"]},
	{name: "The Plug Holes", members: ["Steve", "Theo"]},
	{name: "Goldfish vs Pterodactyls", members: ["Bodrul", "Eugene"] },
	{name: "pre/vin/james", members: ["Pre", "Vin", "JamesS"] },
	{name: "wizardFx", members: ["JamesM"] },
	{name: "x-Scale", members: ["DomC"] },
	{name: "Spoiler: Sean Bean Dies", members: ["AdamI","Kane","Brian"] },
	{name: "Den-Wa", members:["Jason", "Harold"] },
	{name: "The Knights Caplar", members:["Jeremy", "Jan", "Ewan"] },
	{name: "QA Opinion: Español", members:["Alvaro", "Nick", "Victor"] },
	{name: "Inexplainable", members: ["Waqas"] },
	{name: "Electric Sheep", members: ["Ross", "Lawrence", "Jana"] },
	{name: "The Key Strokers", members: ["JamesT", "Wolfram", "Joel", "Arthur"] },
	{name: "Tavo", members: ["Tavo"] },
	{name: "Team Shone", members: ["AdamS"] },
	{name: "Nock",  members: ["JamesN"]},
	{name: "Night Owls", members: ["Soruban", "Yasser", "Christoph"] },
	{name: "Team Team", members: ["Marc", "Rich", "DomM"]},
	{name: "Operation Feet-Up", members: ["Andre"]},
	{name: "Team Oz", members: ["Justin"]}
];

teams.sort(function(a, b) {
	return Math.random() - 0.5;
});
