//Business Logic
function countArray(number) {
  var numbers = [];

  for (var i = 0; i < number + 1; i++) {
    var numberString = i.toString();
    var digitArray = numberString.split("");
    console.log(digitArray);
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

    var userInput = parseInt($("#number").val());

    var numberArray = countArray(userInput);
    
    console.log(typeof((numberArray[1])[0]));
    $("#results").html("<li>" + numberArray + "</li>");
    $(".results").show();
  })
})