var Numerals = ["M","CM","D","CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];
var Numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

var makeRomanNumeral = function(input) {
  var output = "";
  while (input > 0) {
    for ( var i=0; i < 13; i++){
      var currentNumb = Numbers[i];
      if (input >= currentNumb) {
        output = output + Numerals[i];
        input = input - currentNumb;
        break;
      }
    }
    // if (input >= 1000) {
    //   input = input - 1000;
    //   output = output + "M";
    // } else if (input >= 900) {
    //   input = input - 900;
    //   output = output + "CM";
    // } else if (input >= 500) {
    //   input = input - 500;
    //   output = output + "D";
    // } else if (input >= 400) {
    //   input = input - 400;
    //   output = output + "CD";
    // } else if ( input >= 100 ) {
    //   input = input - 100;
    //   output = output + "C"
    // }  else if (input >= 90) {
    //   input = input - 90
    //   output = output + "LC"
    // } else if ( input >= 50 ) {
    //   input = input - 50;
    //   output = output + "L"
    // } else if ( input >= 40) {
    //   input = input - 40;
    //   output = output + "XL";
    // } else if ( input >= 10 ) {
    //   input = input - 10;
    //   output = output + "X"
    // } else if (input >= 9) {
    //   input = input - 9;
    //   output = output + "IX";
    // } else if ( input >= 5 ) {
    //   input = input - 5;
    //   output = output + "V"
    // } else if (input >= 4) {
    //   input = input - 4;
    //   output = output + "IV";
    // } else {
    //   input = input - 1;
    //   output = output + "I"
    // }
  }
  return output
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userinput = parseInt($("#user-input").val());

    if (userinput < 1 || userinput >= 4000) {
      $("#output").text("Please enter a number greater than 0 and less than 4000");
    } else {
      var output = makeRomanNumeral(userinput);
      $("#output").text(output);
    }
  });
});
