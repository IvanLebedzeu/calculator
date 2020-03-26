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


$(document).ready(function() {
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var calc1 = parseInt($("#calc1").val()); 
    var calc2 = parseInt($("#calc2").val()); 
    var operator = $("input:radio[name=operator]:checked").val();
    var result;

    switch (operator) {
      case "add":
        result = add(calc1, calc2);
        break;
      case "subtract":
        result = subtract(calc1, calc2);
        break;
      case "multiply":
        result = multiply(calc1, calc2);
        break;
      case "divide":
        result = divide(calc1, calc2);
        break;
      default:
        result = alert("Invalid Input - Try again");
    }

    $("#output").text(result);
    
  });
});

