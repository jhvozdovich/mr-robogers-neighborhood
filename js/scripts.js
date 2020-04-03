//Business Logic
function countArray(number) {
  var numbers = [];

  for (var i = 0; i < number + 1; i++) {
    var numberString = i.toString();
    numbers.push(numberString);
  }
  return numbers;
}


//User Interface Logic
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#number").val());

    var numberArray = countArray(userInput);
    
    console.log(typeof(numberArray[1]));
    $("#results").html("<li>" + numberArray + "</li>");
    $(".results").show();
  })
})