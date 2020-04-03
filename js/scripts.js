//Business Logic
function verifyInput(number) {
  if (number < 0) {
    alert("Please enter a non-negative number!");
    return false;
  } else {
    return true;
  }
}

function mrRoboger(number) {
  var numbers = [];

  for (var i = 0; i < number + 1; i++) {
    var numberString = i.toString();
    var digitArray = numberString.split("");
    numbers.push(digitArray);
  }

  numbers.forEach(function(digitArray) {
    var index = numbers.indexOf(digitArray);
    if (digitArray.includes("3")) {
      numbers[index] = "Won't you be my neighbor?";
    } else if (digitArray.includes("2")) {
      numbers[index] = "Boop!";
    } else if (digitArray.includes("1")) {
      numbers[index] = "Beep";
    } else {
      numbers[index] = parseInt(digitArray.join(""));
    }
  })
  return numbers;
}


//User Interface Logic
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    
    var userInput = parseInt($("#number").val());

    if (verifyInput(userInput) === true) {
      var numberArray = mrRoboger(userInput);
      
      console.log(numberArray);
      numberArray.forEach(function(value) {
        $("#results").append("<li>" + value + "</li>");
      })
      
      $(".results").show();
    }
  })
})