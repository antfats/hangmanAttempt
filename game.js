//create all variables including wins, guesses, current word maybe?
$(document).ready(); {
    var wins = 0;
    var guesses = 10;
    var word = Math.floor(Math.random[wordBank] * 8 + 1)
    var wordBank = ["blue", "red", "orange", "yellow", "green", "grey", "black", "brown"];
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // function randomWord(wordBank) {
    //     return wordBank[Math.floor(Math.random() * wordBank.length)];
    // }
    // console.log(randomWord(wordBank));

    $(document).keyup(function () {
        var userGuess = event.key;
        console.log(userGuess);
    });
    console.log(randomWord);
    
        for (var i = 0; i > randomWord.length; i++) {
        console.log("penis");

}

}