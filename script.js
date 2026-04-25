const choices = Object.freeze({
	"rock" : 0,
	"paper" : 1,
	"scissors" : 2
});

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	return choice;
}

function getHumanChoice() {
	const choice = prompt("Rock-Paper-Scissors!!!");
	return choice;
}


// rock < paper < scissors < rock
// 0 < 1 < 2 < 0
let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice();

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(human, computer) {
		let winner;
		let loser;
		if (choices[human] == computer)
		{
			console.log("Tie");
			return ;
		}
		else if (choices[human] - 1 == computer || (choices[human]) == 0 && computer == 2)
		{
			humanScore++;
			winner = human;
			loser = Object.keys(choices)[computer];
			console.log("You Win!! ");
		}
		else
		{
			computerScore++;
			winner = Object.keys(choices)[computer];
			loser = human;
			console.log("You Lose :( ");
		}
		console.log(winner + " beats " + loser);
	}
	for (let i = 0; i < 5; i++)
	{
		playRound(humanChoice, computerChoice);
		humanChoice = getHumanChoice().toLowerCase();
		computerChoice = getComputerChoice();
	}
	// console.log("Human: " + humanChoice);
	// console.log("Computer:" + Object.keys(choices)[computerChoice]);
	if (humanScore > computerScore)
		console.log("You win the game!");
	else
		console.log("You Lost the game!");
}

playGame(humanChoice, computerChoice);

// if (computerChoice == 0)
// 	console.log("Computer: Rock");
// else if (computerChoice == 1)
// 	console.log("Computer: Paper");
// else
// 	console.log("Computer: Scissors");
// console.log(computeChoice);
// console.log(getHumanChoice());
// console.log(choices[getHumanChoice()]);
