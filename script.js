// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let upperCase = prompt("Would you like to add capital letters?");
  let lowerCase = prompt("Would you like to add lowercase letters?");
  let specialChar = prompt("Would you like to add special characters?");
  let num = prompt("Would you like to add numbers?");

  if (upperCase) {
    let upperCase = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    const random = Math.floor(Math.random() * upperCase.length);
    console.log(random, upperCase[random]);
  }

  if (lowerCase) {
    let lowerCase = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const random = Math.floor(Math.random() * lowerCase.length);
    console.log(random, lowerCase[random]);
  }

  if (specialChar) {
    const random = Math.floor(Math.random() * specialChar.length);
    console.log(random, specialChar[random]);
  }

  if (num) {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const random = Math.floor(Math.random() * num.length);
    console.log(random, num[random]);
  }
}

generateBtn.addEventListener('click', writePassword());