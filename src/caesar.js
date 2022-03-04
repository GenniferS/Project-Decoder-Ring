// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0| shift < -25 || shift > 25) 
      return false;
    //to decode the message
    if (!encode) shift *= -1; 
      return input.toLowerCase().split('').map((letter) =>{
        if (letter.charCodeAt(0) < 97){
          return letter;
      };
      const coded = letter.charCodeAt(0);
      let shifted = coded + shift;
        //to code the message and limit to lower case letters
      if (shifted > 122){
        shifted -= 26
      } else{
        if (shifted < 97){
          shifted += 26
        }
      }
      return String.fromCharCode(shifted)
    }).join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
