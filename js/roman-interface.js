var RomanNumeral = require("./../js/roman-backend.js").romanModule;

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userinput = parseInt($("#user-input").val());
    var solver = new RomanNumeral();
    var output = solver.solve(userinput);

    if ( !output ) {
      $("#output").text("Please enter a number greater than 0 and less than 4000");
    } else {
      $("#output").text(output);
    }
  });
});
