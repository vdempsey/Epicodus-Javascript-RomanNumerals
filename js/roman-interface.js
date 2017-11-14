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
