const choices = Object.freeze({
	"rock" : 0,
	"paper" : 1,
	"scissors" : 2
});

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	return choice;
}

// rock < paper < scissors < rock
// 0 < 1 < 2 < 0

function initgame() {
	// const choice = prompt("Rock-Paper-Scissors!!!");
	const choices = document.querySelectorAll(".choices");
	choices.forEach(element => {
		element.addEventListener("click", () => {
			const humanChoice = element.id.toLowerCase();
			const computerChoice = getComputerChoice();
			playRound(humanChoice, computerChoice);
		});
	});
}

// let humanChoice = getHumanChoice();

const displayRoundResults = document.createElement("div");

function playRound(human, computer) {
	let winner;
	let loser;
	if (choices[human] == computer)
	{
		displayRoundResults.innerText = "Tie";
		console.log("Tie");
		// document.body.removeChild(document.getElementById("displayRoundResult"));
		document.body.appendChild(displayRoundResults);
		return ;
	}
	else if (choices[human] - 1 == computer || (choices[human]) == 0 && computer == 2)
	{
		winner = human;
		loser = Object.keys(choices)[computer];
		console.log("You Win!! ");
		displayRoundResults.innerText = "You Win!! ";
	}
	else
	{
		winner = Object.keys(choices)[computer];
		loser = human;
		console.log("You Lose :( ");
		displayRoundResults.innerText = "You Lose :( ";
	}
	console.log(winner + " beats " + loser);
	displayRoundResults.innerText += winner + " beats " + loser;
	displayRoundResults.id = "displayRoundResult";
	// document.body.removeChild(document.getElementById("displayRoundResult"));
	document.body.appendChild(displayRoundResults);
}

initgame();

// playRound(human, computer);
// console.log("Human: " + humanChoice);
// console.log("Computer:" + Object.keys(choices)[computerChoice]);


// playGame(humanChoice, computerChoice);

// if (computerChoice == 0)
// 	console.log("Computer: Rock");
// else if (computerChoice == 1)
// 	console.log("Computer: Paper");
// else
// 	console.log("Computer: Scissors");
// console.log(computeChoice);
// console.log(getHumanChoice());
// console.log(choices[getHumanChoice()]);
