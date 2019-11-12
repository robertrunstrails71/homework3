
  
    var specialCharacters = [
        "@",
        "%",
        "+",
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
        "."
      ];
      
      
      var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      
      
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
        "z"
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
        "Z"
      ];
      
  function getPasswordOptions(){
  
      var length = parseInt(prompt(
          "How many characters would you like your password to be?"
      ))
  
      if(isNaN(length) === true){
          alert ("Password must be provided as number")
          return
      }
  
      if(length < 8){
          alert ("Password must be at least 8 characters")
          return
      }
  
      if(length > 128){
          alert ("Password cannot be longer than 128")
          return
      }
  
      var hasSpecialCharacters = confirm("Click OK to confirm including special characters")
  
      var hasNumericCharacters = confirm("Click OK to confirm including numeric characters")
  
      var hasLowerCaseCharacters = confirm("Click OK to confirm including lower case characters")
  
      var hasUpperCaseCharacters = confirm("Click OK to confirm including upper case characters")
  
      if(hasSpecialCharacters === false && hasNumericCharacters === false && hasLowerCaseCharacters === false && hasUpperCaseCharacters === false){
          alert ("Must select at least one character type")
          return
      }
  
      var passwordOptions = {
          length: length,
          hasSpecialCharacters: hasSpecialCharacters,
          hasNumericCharacters: hasNumericCharacters,
          hasLowerCaseCharacters: hasLowerCaseCharacters,
          hasUpperCaseCharacters: hasUpperCaseCharacters
      }
  
      return passwordOptions
  
  }
  
  function getRandom(arr){
      var randomIndex = Math.floor(Math.random() * arr.length);
      var randomElement = arr[randomIndex]
      return randomElement;
  
  }
  
  
  function generatePassword() {
      var options = getPasswordOptions();
      
      var result = [];
     
      
      var possibleCharacters = [];
     
      
      var guaranteedCharacters = [];
     
      
      if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
      }
     
      
      if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
      }
     
      
      if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
      }
         
          if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
      }
     
      
      for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
     
      result.push(possibleCharacter);
      }
     
      
      for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
      }
     
      
      return result.join("");
     }
     
     
     var copyBtn = document.querySelector("#copy");
     var generateBtn = document.querySelector("#generate");
     
        function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
     
      passwordText.value = password;
     
      copyBtn.removeAttribute("disabled");
      copyBtn.focus();
     }
     
     function copyToClipboard() {
      var passwordText = document.querySelector("#password");
     
      passwordText.select();
      document.execCommand("copy");
     
      alert(
      "Your password " + passwordText.value + " was copied to your clipboard."
      );
     }
     
     
     generateBtn.addEventListener("click", writePassword);
        
     copyBtn.addEventListener("click", copyToClipboard);
     