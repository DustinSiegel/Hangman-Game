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

// A way to select a random word from the array "words" by picking a random number and rounding it down to the nearest whole number, and limiting the number to be equivalant to or less than the number of words in the array "words".
	var word = words[Math.floor(Math.random() * words.length)];

// A variable that creates an Array to collect the letters entered by the player
	var answerArray = [];

// A forloop that uses the randomly selected word, by determining that the variable labeled "i" is equal to 0, then determining that i is less then the number of letters in the slected word and then adding 1 to i and then starting over again until i is no longer less than the length of the selected word.
	for (var i = 0; i < word.length; i++) {
				
		console.log(words[i]);
// A way of displaying the correct letters that have been chosen in the answerArray.
		answerArray[i] = "_";
	}

// A variable that takes the remaining letters in the randomly chosen word and pushes it back throught the forloop.
	var remainingLetters = word.length;

// The forloop continues until there are no more letters remaining to be guessed.
	while (remainingLetters > 0) {

// And as letters are correctly guessed, this adds them to the array.
		alert(answerArray.join(" "));

// A variable that prompts the player to pick a letter and start the game loop.
		var guess = prompt("Yo Playa, pick a letter!");

// IF the player selects cancel instead of a keypress it breaks the loop.
		if (guess === null) {

			break;

// If the player selects and invalid key it triggers an alert that askes the player to select a valid key.
		} else if (guess.length !== 1) {
			alert("Pick a letter Foo!");

		} else {

// If the player selects an incorrect letter, it pushes through this forloop that cycles back to the answerArray without changing the display.

		for (var j = 0; j < word.length; j++) {

			if (word[j] === guess) {
						
			answerArray[j] = guess;

			remainingLetters--;
						}
					}
				}
		}

		alert(answerArray.join(" "));
		alert("Nice sluthin Columbo, didn't think you had it in ya! The word you found is " + word +".");
