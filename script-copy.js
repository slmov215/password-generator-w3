// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var possibleCharacters=""
  var lowerCase= "abcdefghijklmnopqrstuvwxyz"
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // TODO

  var numChars=prompt("How many characters would you like your password to be, between 8-128?")
  var isLC=confirm("Would you like to include lowercase?")
  var isUC=confirm("Would you like to include uppercase?")
  var isNum=confirm("Would you like to include numeric characters?")
  var isSP=confirm("Would you like to include special characters?")

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
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
