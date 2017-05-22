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

var WORDS = [  // An Array of words to use as solutions to the game.
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


var word=""; // a varaible that holds the randomly chosen word
var answerArray = [];	// fills the answer array with an underscore to represent each letter in the word.
var wins = 0;
var losses = 0;

function init(){ 	// a function that randomly picks a word from the array and then displays it as underscores
  word = WORDS[Math.floor(Math.random() * WORDS.length)];	//randomly picks a word from the array
  answerArray = [];	// The variable that creates a new array for the random answer
  for (var i = 0; i < word.length; i++) {	// a forLoop that runs a cycle for each letter in the word.
    answerArray[i] = "_";	// fills the answer array with an underscore to represent each letter in the word.
  }
 
  document.getElementById("answer").innerHTML= answerArray.join(" ");	// puts the word chosen into the html
  document.getElementById("message").innerHTML= "Yo Playa, pick a letter!";  //some popup text that tells the player to make an entry
}

init();

function guessOne() {	// a function that reacts to a players input
    var guess = document.getElementById("guess").value;  
    var showThisMessage = "";

  if (guess.length !== 1) {
      showThisMessage ="Pick one letter only Foo";
  } else {
		var i=0;
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                showThisMessage = "Awww Yeahh "+guess+" is one of em'";
            }
        }
    
        var remaining_letters = answerArray.length;	// sets the remaining unguessed letters to underscors
        for (i = 0; i < answerArray.length; i++) { // a forloop that recounts the word and determines the missing letters
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }
    
        if (remaining_letters == 0) {
          	wins++;
          	showThisMessage = "Nice sluthin' Columbo, didn't think you had it in ya! The word you found is " + word +".";
        }
    
        if (showThisMessage === "") {
            showThisMessage = guess + "... Nope, that ain't it ";
        }

        document.getElementById("answer").innerHTML = answerArray.join(" ");  // displays a new selection from the array when refreshed 
        document.getElementById("guess").value = "";	//clears the text entry field after a guess is processed
	}
	document.getElementById("message").innerHTML = showThisMessage;
}

function quit() {
	document.getElementById("message").innerHTML = "Awww dag! You lose, Suckafish! The word was "+word;
	for (var j = 0; j < word.length; j++) {
		answerArray[j] = word[j];
		losses++;
	}

	document.getElementById("answer").innerHTML = answerArray.join(" ");	// this recognises that the word has been completed
}

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
	
var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>";
document.querySelector ("#game").innerHTML = html;




// document.onkeyup = function(event) { 	// recognises when a key is pressed
// 	var guessvalue = String.fromCharCode(event.keyCode).toLowerCase();	// a variable that takes keystrokes and assigns them a specific code.
// 	var html = guessvalue + "</p>";		// a variable that represents a specific piece of info for html
// 	document.getElementById("guesses").innerHTML = html;	// finds the id "keys" and places the info at that specific spot in the html	
// };

// var countdown = {
// 	a: "10",
// 	b: "9",
// 	c: "8",
// 	d: "7"
// 	e: "6"
// 	f: "5",
// 	g: "4",
// 	h: "3",
// 	l: "2",
// 	m: "1",


// var countdownArray = [];

// document.onkeydown = function() {
// 	for (var j = 0; j < countdown.length; j++) {
// 		countdownArray[j] = j;
// 	}
// 	var y = [j] + "</p>";
// 	document.getElementById("countdown").innerHTML = y;	
// };

	// 	if (j < ) {
	// 	countdownArray = [j] + "</p>";
	// 	document.getElementById("countdown").innerHTML = countdownArray;		

	// } else {
	// 	alert("You lose, Suckafish!");
	// 	};
