// Back end logic

var add = function(calc1, calc2) {
	return (calc1 + calc2);
}

var subtract = function(calc1, calc2) {
  return (calc1 - calc2);
}


var multiply = function(calc1, calc2) {
  return (calc1 * calc2);
}

var divide = function(calc1, calc2) {
  return (calc1 / calc2);
}
// front end logic

$(document).ready(function() {
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var calc1 = parseInt($("#calc1").val()); // tells it to go look for thing with id="add1" then return that value as an integer
    var calc2 = parseInt($("#calc2").val()); // tells it to go look for thing with id="add2" then return that value as an integer

    $("button").click(function() {
      if (this.id === "addition") {
          var result = add(calc1, calc2);
          $("#output").text(result);
      } else if (this.id === "subtraction") {
          var result = subtract(calc1, calc2);
          $("#output").text(result);
      } else if (this.id === "multiplication") {
          var result = multiply(calc1, calc2);
          $("#output").text(result);
      } else if (this.id === "division") {
          var result = divide(calc1, calc2);
          $("#output").text(result);
      }
      
    });
  });
});

