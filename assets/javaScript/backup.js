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



  // document.addEventListener("DOMContentLoaded", function(event) {
  //   console.log("DOM fully loaded and parsed");
  // });




// An Array of words to use as solutions to the game.
	var words = [
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



// // A way to select a random word from the array "words" by picking a random number and rounding it down to the nearest whole number,
// // and limiting the number to be equivalant to or less than the number of words in the array "words".
// // Then creating and array for the randomly picked word to go to using a forloop to cycle through each letter and then creating a underscore in place of each letter
// // and displaying it in an array.
	var word = words[Math.floor(Math.random() * words.length)];
	var answerArray = [];
		for (var i = 0; i < word.length; i++) {
			answerArray[i] = "_";
	}
		document.getElementById("puzzle").innerHTML = answerArray.join(" ");

	var remainingLetters = word.length;
	while (remainingLetters > 0) {
		alert(answerArray.join(" "));    

		var guess = prompt("Yo Playa, pick a letter!");
		if (guess === null) {
			break;
			} else if (guess.length !== 1) {
				alert("Pick a letter Foo!");
			} else {
				for (var j = 0; j < word.length; j++) {
				if (word[j] === guess) {
					answerArray[j] = guess;
					remainingLetters--;
					}
				}
			}
		}

		
		alert(answerArray.join(" "));
		alert("Nice sluthin' Columbo, didn't think you had it in ya! The word you found is " + word +".");

		document.onkeyup = function() {
			var guessvalue = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(guess);

		var html = "<p>Letters Guessed:" + guessvalue + "</p>";
		document.getElementById("keys").innerHTML = html;



}
			// Using the variable html to print the randomly selected word to the webpage.
		// var underscore = "<p>Guess This Word"  + answerArray + "</p>";
		// document.querySelector("#game").innerHTML = underscore;



		var wins = 0;
		var losses = 0;

	