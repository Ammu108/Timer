const options = ['snake', 'water', 'gun'];

function getRandomIndex(options) {
  return Math.floor(Math.random() * options.length);
}

let element = 0;
element = getRandomIndex(options);
const randomElement = options[element];

const selectableImages = document.querySelectorAll(".img");
const computerSelectedImages = document.querySelector(".btn");
const refreshTheGame = document.querySelector(".play-again")
const youWin = document.querySelector("#you-win");
const youLoose = document.querySelector("#you-loose");
const drawGame = document.querySelector("#draw-game");

let storedValue = "";
let computerStoredValue = "";

selectableImages.forEach(function(image) {
  image.addEventListener('click', function() {
    storedValue = image.alt;
    document.getElementById('your-input').value = storedValue;
  })
})

computerSelectedImages.addEventListener('click', function() {
  computerStoredValue = randomElement
  document.getElementById('computer-input').value = computerStoredValue;

  checkConditions();
  
})

function checkConditions() {
  if (storedValue === computerStoredValue) {
    // alert("match draw");
    drawGame.classList.remove('hidden');
  } else {
    if (storedValue === "snake") {
      // water , gun
      let userwin = true;
      userwin = computerStoredValue === "gun" ? false : true;
       if (userwin) {
        //   alert("you win");
         youWin.classList.remove('hidden');
         ;
        } else {
        //   alert("you loose");
         youLoose.classList.remove('hidden');
        }
      
    }if (storedValue === "water") {
      // snake , gun
      userwin = computerStoredValue === "snake" ? false : true;
      if (userwin) {
        // alert("you win");
         youWin.classList.remove('hidden');
        
      } else {
        // alert("you loose");
         youLoose.classList.remove('hidden');
        
      }
    }else if  (storedValue === "gun") {
      // snake , water
      userwin = computerStoredValue === "water" ? false : true;
      if (userwin) {
        // alert("you win");
        youWin.classList.remove('hidden');
      } else {
        // alert("you loose");
         youLoose.classList.remove('hidden');
      }
    }
  }
}

refreshTheGame.addEventListener('click', function() {
  let again = confirm("Do you want to play again.");
  if (again) {
    location.reload();
  }
  else {
    location.reload();
    alert(`Thankyou for playing this game. \nWill see you soon.`);
  }
})