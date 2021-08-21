// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "[", "]", ":", ";", "<", ">", ".", "?", "/", "~", "`"];

// Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     alert("How many characters do you want in your password?", "Number of Characters");

//     passwordText.value = password;
// }

function writePassword() {
  
  var charNumber = prompt("How many characters do you want in your password?", "Enter a number between 8 and 128.");

  if(charNumber < 8 || charNumber > 128) {
    alert("Please choose between 8 and 128 characters. Try again.");
  } else {
    var numberEl = confirm("Do you want Numbers?");
    var uppercaseEl = confirm("Do you want uppercase letters?");
    var lowercaseEl = confirm("Do you want lowercase letters?");
    var specialCharEl = confirm("Do you want special characters?");
    
  }

  if (numberEl != true && uppercaseEl != true && lowercaseEl != true && specialCharEl != true){
    alert("Error: No selections made. Please choose at least one option.");
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);