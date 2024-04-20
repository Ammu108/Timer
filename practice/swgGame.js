
const options = ['snake', 'water', 'gun'];

function getRandomIndex(options) {
    return Math.floor(Math.random() * options.length);
}

let element = 0;
element = getRandomIndex(options);

const randomElement = options[element];
console.log(randomElement);

const drawGame = () => {
    return alert(`Oops! Game has drawn \nComputer also Choosed ${randomElement}`);
}
// const showWinner = (userWin) => {
//     if(userWin){
//         alert`You win`;
//     } else {
//         alert(`You loose`);
//     }
// }

const playAgain = () => {
    let again = confirm("Do you want to play again.");
    if (again) {
        checkGuess();
    }
    else {
        alert(`Thankyou for playing this game. \nWill see you soon.`);
    }
}

function checkGuess() {
    guess = prompt("Enter the word from - Snake, Water, & Gun");

    if (guess == randomElement) {
        // Draw game
        drawGame();
        playAgain();
    }
    else {
        let userWin = true;
        if (guess == "snake") {
            // water, Gun
            userWin = randomElement == "gun" ? false : true;
            if (userWin) {
                alert(`You win Computer choosed ${randomElement}`)
            } else {
                alert(`You loose. Computer choosed ${randomElement}`)
            }
            playAgain();
            // checkGuess()
        }
        if (guess == "water") {
            // snake, Gun
            userWin = randomElement == "snake" ? false : true;
            if (userWin) {
                alert(`You win. Computer choosed ${randomElement}`)
            } else {
                alert(`You loose. Computer choosed ${randomElement}`)
            }
            playAgain();
            // alert(`Wrong Guess. Try again`);
            // checkGuess()
        }
        if (guess == "gun") {
            // water, snake
            userWin = randomElement == "water" ? false : true;
            if (userWin) {
                alert(`You win Computer choosed ${randomElement}`)
            } else {
                alert(`You loose. Computer choosed ${randomElement}`)
            }
            playAgain();
            // alert(`Wrong Guess. Try again`);
            // checkGuess()
        }
        else{
            alert(`Invalid Guess. Use Correct Word`);
            playAgain();
        }
        showWinner(userWin);
    }
}

checkGuess()

















