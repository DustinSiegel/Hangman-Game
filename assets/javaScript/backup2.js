// An Array of words to use as solutions to the game.
// Have the computer randomly select from the array of words.
// Display the underscores in place of each letter of the randomly chosen word.
// Alert the player to pick a letter.
// Have the computer recognize the users inputs.
// Display the letters that the user selects.
// Display the correctly guessed letter in the proper spot on the answer grid.
// Display the number of guesses remaining.
// cycle throught the process until either there are no more guesses remaining or the answer has been reached.
// Record the win or loss.
// Choose a new word from the array.

var words = [  // An Array of words to use as solutions to the game.
		"yowza",
		"yeeeehaaaa",
		"ouchie",
		"bazinga",
		"flapjacks",
		"wiggleworm",
		"crimper",
		"kickflip",
		"slapdash",
		"snickerdoodle",
		"cowboy",
		"bebop",
		"swampass",
		"antidistablishmentarianism",
		"kittycat",
		"marblemouthed"
];


var word = words[Math.floor(Math.random() * words.length)]; // randomly picks a word
var answerArray = [];  // The variable that creates a new array for the random answer

for (var i = 0; i < word.length; i++) {  // a forLoop that runs a cycle for each letter in the word.
	answerArray[i] = "_"; // fills the answer array with an underscore to represent each letter in the word.
}

console.log(answerArray);
	
document.getElementById("puzzle").innerHTML = answerArray.join(" ");  // puts the word chosen into the html

document.onkeyup = function(event) { 	// recognises when a key is pressed
	var guessvalue = String.fromCharCode(event.keyCode).toLowerCase();	// a variable that takes keystrokes and assigns them a specific code.
	var html = guessvalue + "</p>";		// a variable that represents a specific piece of info for html
	document.getElementById("keys").innerHTML = html;	// finds the id "keys" and places the info at that specific spot in the html	
};

var guessArray = [];	// creates variable that is an array	

document.onkeypress = function (e) { // recognises when a key is pressed
  	var keyPress;	// creates a variable that represents a user keypress
  	console.log(guessArray);
  	if (typeof event !== 'undefined') { 	// if the keypress is not undefined
    	keyPress = event.keyCode;	// the keypress gets assigned a key code
 	}	
  	else if (e) {
    	keyPress = e.which;		// this returns the keypress
  	}
  	guessArray.push(String.fromCharCode(keyPress));		// Puts the key code of the user keypress into the array
  	var x = guessArray + "</p>";		// creates a variable that represents a place in the html to put the array
	  document.getElementById("guesses").innerHTML = x;		// finds the id "guesses" and places the variable "x" there
};

var countdown = {
	a: "10",
	b: "9",
	c:


// var countdownArray = [];

// document.onkeydown = function() {
// 	for (var j = 0; j < countdown.length; j++) {
// 		countdownArray[j] = j;
// 	}
// 	var y = [j] + "</p>";
// 	document.getElementById("countdown").innerHTML = y;	
};

	// 	if (j < ) {
	// 	countdownArray = [j] + "</p>";
	// 	document.getElementById("countdown").innerHTML = countdownArray;		

	// } else {
	// 	alert("You lose, Suckafish!");
	// 	};



 