// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays //

var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChars= ["0", "1", "2", "3" , "4", "5", "6", "7", "8", "9"];
var specialChars= ["+", "@", "*", "#", "ç", "%", "&", "/", "(", ")", "=", "?", "^", "!", "[", "]", "{", "}", "-", "_", ":", ";", ">", "<", "|", ",", "."];

  //  Var Declaration // 
var possibleCharacters="";
var isUc ;
var isLC ;
var isNum ;
var isSP ;
// Prompt - for criteria, length 8>=128, 
function generatePassword() {

  var possibleCharacters=prompt("How many characters would you like your password to have?  Choose between 8-128");
  while(possibleCharacters <=7 || possibleCharacters >=129) {
    alert("Please try againg! Password length must be between 8-128 characters.");
    var possibleCharacters = (prompt("How many characters would you like your password to have? Please choose between 8-128"));
  }

  alert(`Your password will have ${possibleCharacters} characters`)
  // input validate and at least 1 character selected
  // password generates and match selected criteria, and display alert/ on page
  // types of characters (lowercase, uppercase, numberic, &/ special characters) // 
  var isLC=confirm("Would you like to include lowercase?");
  var isUC=confirm("Would you like to include uppercase?");
  var isNum=confirm("Would you like to include numeric characters?");
  var isSP=confirm("Would you like to include special characters?");

    while(isLC === false && isUC === false && isSP === false && isNum === false){
      alert("You must choose at least one parameter");
      var isLC = confirm("Would you like to include lowercase?");
      var isUC = confirm("Would you like to include uppercase?");
      var isNum = confirm("Would you like to include numeric characters?");
      var isSP = confirm("Would you like to include special characters?");
    }

 // TODO
  let password = [];
 //let password = "excited"; // TODO: Pull in characters based on what's possible at possibleCharacters variable
 if(isLC) {
  password = password.concat(lowerCase)
   // TODO with SLACK
 }
 if(isUC) {
  password = password.concat(upperCase)
 }
 if(isNum) {
  password = password.concat(numChars)
 }
 if(isSP) {
  password = password.concat(specialChars)
 }


 console.log(password)
// console.log(userinput) 
// console.log("userinput");
var random = ""

for (var i = 0; i < possibleCharacters; i++) {
  random = random + password[Math.floor(Math.random() * password.length)];
  console.log(random)
}
return random;
//  return password.substring(0,numChars)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
