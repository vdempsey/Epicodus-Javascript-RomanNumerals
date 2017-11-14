var RomanNumeral = require("./../js/roman-backend.js").romanModule;

var converter

beforeEach(function() {
  converter = new RomanNumeral();
});

describe("RomanNumeral", function() {
  it("should convert a number into a roman numeral", function(){
    var output = "";
    var output = converter.solve(100);
    expect(output).toEqual("C");
  });

  it("Should not convert a number less than 0", function(){
    var output = "";
    output = converter.solve(-20);
    expect(output).toEqual(false);
  });
});
