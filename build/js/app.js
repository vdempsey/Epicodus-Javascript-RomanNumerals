(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function RomanNumeral() {
  this.numerals =  ["M","CM","D","CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];
  this.numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
}

RomanNumeral.prototype.solve = function () {
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

},{}],2:[function(require,module,exports){
var RomanNumeral = require("./../js/roman-backend.js").romanModule;

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userinput = parseInt($("#user-input").val());

    if (userinput < 1 || userinput >= 4000) {
      $("#output").text("Please enter a number greater than 0 and less than 4000");
    } else {
      var solver = new RomanNumeral();
      var output = solver.Solve(userinput);
      $("#output").text(output);
    }
  });
});

},{"./../js/roman-backend.js":1}]},{},[2]);
