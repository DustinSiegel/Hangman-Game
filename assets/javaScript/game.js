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
		"antidistablishmentarianism",
		"kittycat",
		"marblemouthed"
];


var word=""; // a varaible that holds the randomly chosen word
var answerArray = [];	// fills the answer array with an underscore to represent each letter in the word.
var wins = 0;	// a variable that represents 0 wins and then increments up
var losses = 0;	// a variable that represents 0 losses and then increments up

function init(){ 	// a function that randomly picks a word from the array and then displays it as underscores
  	word = WORDS[Math.floor(Math.random() * WORDS.length)];	//randomly picks a word from the array
  	answerArray = [];	// The variable that creates a new array for the random answer
  	for (var i = 0; i < word.length; i++) {	// a forLoop that runs a cycle for each letter in the word.
    answerArray[i] = "_";	// fills the answer array with an underscore to represent each letter in the word.
  	}
 
document.getElementById("answer").innerHTML= answerArray.join(" ");	// puts the word chosen into the html
document.getElementById("message").innerHTML= "Hey Playa, pick a letter!";  //some popup text that tells the player to make an entry

var guessArray = [];	// creates variable that is an array	

document.onkeypress = function (e) { // recognises when a key is pressed
  	var keyPress;	// creates a variable that represents a user keypress
  	if (typeof event !== 'undefined') { 	// if the keypress is not undefined
    	keyPress = event.keyCode;	// the keypress gets assigned a key code
 	}	
  	else if (e) {
    	keyPress = e.which;		// this returns the keypress
  	}
  	guessArray.push(String.fromCharCode(keyPress));		// Puts the key code of the user keypress into the array
  	var x = guessArray + "</p>";		// creates a variable that represents a place in the html to put the array
	document.getElementById("guesses").innerHTML = x;		// finds the id "guesses" and places the variable "x" there
	}
}

init();

function guessOne() {	// a function that reacts to a players input
    var guess = document.getElementById("guess").value;  // a variable targets the guess paragraph in html
    var showThisMessage = "";	// a variable that provides an blank place to show the messages

	if (guess.length !== 1) {	// if the text imput is not just one letter 
	    showThisMessage ="Pick one letter only yo!";	// it showes this message and doesn't regester the imput
	} else {
		var i=0;	// a variable that targets the arrays first spot
	    for (i = 0; i < word.length; i++) {	// a forloop that cycles through a word in the array and compares it to the user imput
	        if (word[i] === guess) { 	// if the user imput matches one of the letters in the array
	            answerArray[i] = guess;	// it regesters a guess as correct and pushes a message
	            showThisMessage = "Awww Yeahh "+guess+" is one of em'.";	// the message that it displays upon a correct guess
	        }
	    }
	    
	    var remaining_letters = answerArray.length;	// sets the remaining unguessed letters to underscors
	    for (i = 0; i < answerArray.length; i++) { // a forloop that recounts the word and determines the missing letters
	        if (answerArray[i] !== '_') {	//  an if statement that determins if there are any more blanks left
	            remaining_letters -= 1;	// when the remaining letters are less then or equal to 1
	        }
	    }
	    
	    if (remaining_letters == 0) {	// if statement tha determines that the amount of letters remaining is 0
	        wins++;		// increases the win counter by 1
	        showThisMessage = "Nice sluthin' Columbo, didn't think you had it in ya. The word you found is " + word +"!";	// and displays a congraguatory message
	    }
	    
	    if (showThisMessage === "") {	// if the sowthismessage varaible is exactly equal to a wrong letter
	        showThisMessage = guess + "... nope, that ain't it ";	//it shows a message that has the wrong guess plus informs you to try again
	    }

	    document.getElementById("answer").innerHTML = answerArray.join(" ");  // displays a new selection from the array when refreshed 
	     document.getElementById("guess").value = "";	//clears the text entry field after a guess is processed
		}
		document.getElementById("message").innerHTML = showThisMessage;		//defines the place in the html to display the messages
	}

	function quit() {	// a function that acts when you press the quit button
		losses++;	// increases the losses variable incrementally by 1
		document.getElementById("message").innerHTML = "Awww dag, you loose. The word was "+word+ "!";	//distplays a message saying that you have lost and also showing you the solution
		for (var j = 0; j < word.length; j++) {		// a forloop that fills in the answer array
			answerArray[j] = word[j];	// making the answer array the same as the randomly selected word
		}

		document.getElementById("answer").innerHTML = answerArray.join(" ");	// this recognises that the word has been completed and places it in the html
}

var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>";	// takes the wins and losses variables and creates a format that will fit in to the html
document.querySelector ("#game").innerHTML = html;	// calls the location to display created html

// A countdown display that shows how many guesses remain
// var countdown = 10;
// document.onkeydown = function() {
// 	if (countdown > 0).countdown--;
// 	document.getElementById("countdown").innerHTML = countdown;	
// }
