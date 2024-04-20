
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      let number = 0;
      let attempts = 0;
      number = getRandomInt(100);
      console.log(number);

      function checkGuess (){
        guess = prompt("enter a number between 1 to 100 ");
        if (guess == number) {
            attempts++;
            alert(`Congratulations! You guessed the correct number in ${attempts} attempts. Your score is ${100 - attempts}.`);
        } else if (guess < number) {
            attempts++;
            alert(`Incorrect guess. The number is greater than your guess.`);
            checkGuess();
        } else if (guess > number) {
            attempts++;
            alert(`Incorrect guess. The number is lesser than your guess.`);
            checkGuess();
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
            checkGuess();
        }
      }

      checkGuess();
    

    


