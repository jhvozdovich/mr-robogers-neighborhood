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

  var finalArray = [];
  numbers.forEach(function(digitArray) {
    if (digitArray.includes("3")) {
      finalArray.push("Won't you be my neighbor?");
    } else if (digitArray.includes("2")) {
      finalArray.push("Boop!");
    } else if (digitArray.includes("1")) {
      finalArray.push("Beep");
    } else {
      finalArray.push(parseInt(digitArray.join("")));
    }
  })
  return finalArray;
}


//User Interface Logic
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    $("#resultList").empty();
    
    var userInput = parseInt($("#number").val());

    if (verifyInput(userInput) === true) {
      var numberArray = mrRoboger(userInput);
      
      console.log(numberArray);
      numberArray.forEach(function(value) {
        console.log(value);
        $("#resultList").append("<li>" + value + "</li>");
      })
      
      $(".results").show();
    }
  })
})