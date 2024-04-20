const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "!@#$%^&*()~+_-=></[]{}";
const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    // navigator.clipboard("copy");
    document.execCommand("copy");
}

// document.querySelector('.copy-img').foreach(copyLinkContainer => {
//     const copyButton = copyLinkContainer.querySelector(".copy-img");
//     const inputField = copyLinkContainer.querySelector(".copy-img-input");

//     inputField.addEventListener("focus", () => inputField.select());

//     copyButton.addEventListener("click", () => {
//         const text = inputField.value;

//         inputField.select();
//         navigator.clipboard.writeText(text);

//     });
// });
// const copyButton = document.querySelector(".copy-img");

// copyButton.addEventListener('click', () => {
//     navigator.clipboard.writeText(value.value);
// })


