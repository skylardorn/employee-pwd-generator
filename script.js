// Assignment Code
var generateBtn = document.querySelector("#generate");

// password criteria bank
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
const lowerCase = ['a','b','c','d','e','f','d','e','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const specialChar = ['!','@','#','$','%','^','&','*', ')', '(', '_', '+', '-', '<', '>'];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



function generatePassword() {
  let upperCase = confirm("Would you like to add capital letters?");
  let lowerCase = confirm("Would you like to add lowercase letters?");
  let specialChar = confirm("Would you like to add special characters?");
  let num = confirm("Would you like to add numbers?");

  if (upperCase) {
    
  }

};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword());