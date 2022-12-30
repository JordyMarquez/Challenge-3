// Naming the different criteria
var lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';
var lowercaseArray = lowercaseLetter.split('');
var uppercaseLetter = lowercaseLetter.toUpperCase();
var uppercaseArray = uppercaseLetter.split('');
var symbols = '!@#$%^&*(){}[]=<>/,.'.split('');
var numericValues = '0123456789'.split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Makes a function to generate a password
function generatePassword() {
   var userChoiceArray = []
   var password = ""

   // Sets parameter to be between 8 & 128 characters
   var passwordCharCount = prompt("How many characters would you like to use? Must be between 8 and 128 characters")
   if (passwordCharCount < 8 || passwordCharCount > 128 || !Number(passwordCharCount)) {
      alert('please follow instructions');
      return "please click button again"
   }
   
   // Asks user to select password criteria and creates an array
   var shouldUseLowerCase = confirm("Do you want to use lower case letters?")
   if (shouldUseLowerCase) {
      userChoiceArray = userChoiceArray.concat(lowercaseArray)
      console.log(userChoiceArray)
   }
   
   var shouldUseUpperCase = confirm("Do you want to use upper case letters?")
   if (shouldUseUpperCase) {
      userChoiceArray = userChoiceArray.concat(uppercaseArray)
   }
   console.log(userChoiceArray)
   
   var shouldUseSymbols = confirm("Do you want to use symbols?")
   if (shouldUseSymbols) {
      userChoiceArray = userChoiceArray.concat(symbols)
   }
   console.log(userChoiceArray)
   
   var shouldUseNumbers = confirm("Would you like to use numbers?")
   if (shouldUseNumbers) {
      userChoiceArray = userChoiceArray.concat(numericValues)
   }
   console.log(userChoiceArray)
   
   if (userChoiceArray.length === 0) {
      alert('No criteria was selected')
      return "please click button again"
   }
   
   // Randomizes the array
   userChoiceArray.sort(function (a, b) {
      var randNum = Math.floor(Math.random() * 2)
      return randNum === 0 ? -1 : 1
   })
   console.log("shuffled", userChoiceArray)
   // Make the password as long as requested by user
   for (var i = 0; i < passwordCharCount; i++) {
      password += userChoiceArray[i];
   }
   return password
}

// Write password to the #password input 
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);