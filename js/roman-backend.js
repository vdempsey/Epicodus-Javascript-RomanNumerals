function RomanNumeral() {
  this.numerals =  ["M","CM","D","CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];
  this.numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
}

RomanNumeral.prototype.solve = function(input) {
  input = Math.round(input);
  if (input < 1 || input >= 4000) {
    return false;
  }
  var output = "";
  while (input > 0) {
    for ( var i=0; i < 13; i++){
      var currentNumb = this.numbers[i];
      if (input >= currentNumb) {
        output = output + this.numerals[i];
        input = input - currentNumb;
        break;
      }
    }
  }
  return output;
}

exports.romanModule = RomanNumeral;
