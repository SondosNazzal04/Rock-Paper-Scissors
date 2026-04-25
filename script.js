function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	return choice;
}

const choices = Object.freeze({
	"Rock" : 0,
	"Paper" : 1,
	"Scissors" : 2
});

function getHumanChoice() {
	const choice = prompt("Rock-Paper-Scissors!!!");
	return choice;
}

const humanChoice = getHumanChoice();
const computeChoice = getComputerChoice();

// rock < paper < scissors < rock
// 0 < 1 < 2 < 0
if (choices[humanChoice] == computeChoice)
	console.log("Tie");
else if (choices[humanChoice] - 1 == computeChoice || (choices[humanChoice]) == 0 && computeChoice == 2)
	console.log("You Win!!");
else
	console.log("You Lose :(");

console.log("Human: " + humanChoice);
if (computeChoice == 0)
	console.log("Computer: Rock");
else if (computeChoice == 1)
	console.log("Computer: Paper");
else
	console.log("Computer: Scissors");
// console.log(computeChoice);
// console.log(getHumanChoice());
// console.log(choices[getHumanChoice()]);
