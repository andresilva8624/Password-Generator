// Assignment Code
var generateBtn = document.querySelector("#generate");
// var password = document.getElementById("password");

var password = document.querySelector("password");
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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
var specialCharacters = [
  "@",
  "%",
  ",",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var length = parseInt(prompt("How long do you want your password to be?"));
  var passwordOptions = [];
  var finalPassword = [];
  console.log(length);

  if (length < 8 || length > 128) {
    alert("Password needs to have minimum of 8 charaters.");
    return;
  }
  var hasNumbers = confirm("Do you want to include numbers in your password?");
  var hasLowerCase = confirm(
    "Do you want to include lower case characters in your password?"
  );
  var hasUpperCase = confirm(
    "Do you want to include upper case characters in your password?"
  );
  var hasSpecialCharacters = confirm(
    "Do you want to include special characters in your password?"
  );
  if (hasNumbers) {
    passwordOptions = passwordOptions.concat(numericCharacters);
  }
  if (hasUpperCase) {
    passwordOptions = passwordOptions.concat(upperCasedCharacters);
  }
  if (hasLowerCase) {
    passwordOptions = passwordOptions.concat(lowerCasedCharacters);
  }
  if (hasSpecialCharacters) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  } 
  console.log(passwordOptions);

  for (var i=0; i<length; i++){
finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);

  };
console.log(finalPassword);
return finalPassword.join('');
}
generateBtn.addEventListener("click", writePassword);
