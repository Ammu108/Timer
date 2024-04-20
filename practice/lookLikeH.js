
// function displayOutput(text) {
//     const outputDiv = document.getElementById("output");
//     outputDiv.innerHTML += `<h3>${text}</h3>`;
// }

// function terminal(ms) {
//     return new Promise(resolve  =>{
//         setTimeout(resolve,ms);
//     })
// }

// async function hack() {
//     displayOutput("Initializing hack program....");
//     await terminal(2000);

//     displayOutput("Hacking aman's username....");
//     await terminal(3000);

//     displayOutput("Username found: aman_108");
//     await terminal(4000);

//     displayOutput("Connecting to Facebook...");
//     await terminal(5000);

//     displayOutput("Hacked into Facebook successfully!");
//     await terminal(6000);

//     displayOutput("Permisson Granted");
//     await terminal(6500);
// }

// hack();




const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox !== this) {
          checkbox.checked = false;
        }
      });
      if (this.id === "PhoneNumber") {
        input.setAttribute("placeholder", "Enter phone number");
        btn();
      } else if (this.id === "e_mail") {
        input.setAttribute("placeholder", "Enter email ID");
      } else if (this.id === "UserName") {
        input.setAttribute("placeholder", "Enter User Name");
      }
    }
  });
});

const btn = document.getElementById('btn');
const newContainer = document.querySelector('.newContainer');

btn.addEventListener('click', function() {
  var inputValue = document.getElementById('input').value;
  newContainer.innerHTML = `<h3>Fetching details for ${inputValue}...please wait...</h3>`;
  commands(inputValue);
})

btn.addEventListener('click', function() {
  newContainer.style.display = 'block';
});

async function commands(inputValue) {
  let prompt1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newContainer.innerHTML += `<h3>strating brute force attack on ${inputValue}....</h3>`);
    }, 2000)
  })
  let prompt2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newContainer.innerHTML += `<h3>Hacking it's username...</h3>`)
    }, 4000)
  })
  let prompt3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newContainer.innerHTML += `<h3>User name found of  ${inputValue}....aman_108</h3>`);
    }, 6000)
  })
  let prompt4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newContainer.innerHTML += `<h3>Connecting to facebook Succefully...</h3>`)
    }, 8000)
  })
  let prompt5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newContainer.innerHTML += `<h3>Finally Security break, Permission Granted</h3>`)
    }, 11000)

  })

  let promptValue1 = await prompt1;
  let promptValue2 = await prompt2;
  let promptValue3 = await prompt3;
  let promptValue4 = await prompt4;
  let promptValue5 = await prompt5;

  return [promptValue1, promptValue2, promptValue3, promptValue4,promptValue5]
}
