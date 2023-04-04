// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays // Var Declaration // 
function generatePassword() {
  var possibleCharacters=""
  var lowerCase= "abcdefghijklmnopqrstuvwxyz"
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numChars= "0123456789"
  var specialChars= "+ @ * # ç % & / ( ) = ? ^ ! [ ] { } - _ : ; > < | , ."

// Prompt - for criteria, length 8>=128, 
var numChars=prompt("How many characters would you like your password to be, between 8-128?")

// types of characters (lowercase, uppercase, numberic, &/ special characters) // 
var isLC=confirm("Would you like to include lowercase?")
var isUC=confirm("Would you like to include uppercase?")
var isNum=confirm("Would you like to include numeric characters?")
var isSP=confirm("Would you like to include special characters?")

}

// input validate and at least 1 character selected
// password generates and match selected criteria, and display alert/ on page

 // TODO
 let password = "";
 //let password = "excited"; // TODO: Pull in characters based on what's possible at possibleCharacters variable
 if(isLC) {
   // TODO with SLACK
 }


 console.log(isLC);
// console.log(userinput) 
// console.log("userinput");
 return password.substring(0,numChars)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
