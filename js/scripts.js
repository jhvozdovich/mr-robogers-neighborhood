//Business Logic
function verifyInput(number) {
  if (number < 0) {
    return false;
  } else {
    return true;
  }
}

function mrRoboger(number) {
  var finalArray = [];
  for (var i = 0; i < number + 1; i++) {
    var numberString = i.toString();
    var digitArray = numberString.split("");
    if (digitArray.includes("3")) {
      finalArray.push("Won't you be my neighbor?");
    } else if (digitArray.includes("2")) {
      finalArray.push("Boop!");
    } else if (digitArray.includes("1")) {
      finalArray.push("Beep!");
    } else {
      finalArray.push(parseInt(digitArray.join("")));
    }
  }
  return finalArray;
}



//User Interface Logic
$(document).ready(function() {
  var buttonPressed
  $(".btn").click(function(){
    buttonPressed = $(this).attr("name");
  })

  $("#user-input").submit(function(event) {
    event.preventDefault();

    $("#resultList").empty();
    
    var userInput = parseInt($("#number").val());

    if (verifyInput(userInput) === true ) {
      var numberArray = mrRoboger(userInput);
      if (buttonPressed === "count-forward") {
        numberArray.forEach(function(value) {
          $("#resultList").append("<p>" + value + "</p>");
        })
      } else if (buttonPressed === "count-backward") {
        numberArray.forEach(function(value) {
          $("#resultList").prepend("<p>" + value + "</p>");
        })
      }
      $(".intro").hide();
      $(".results").fadeIn(1000);
    } else {
      $("#negativeError").modal({
        modal: true,
        autoOpen: false,
      })
      $(".results").fadeOut();
      $("#close").click(function() {
        $("#negativeError").modal("hide");
      })
    }

    if (userInput % 2 !== 0) {
      $(".odd-number").fadeIn(1000);
      $(".even-number").hide();
    } else if (userInput % 2 === 0) {
      $(".even-number").fadeIn(1000);
      $(".odd-number").hide();
    }
  })

  $("#rules-button").click(function() {
    $(".rules").slideToggle();
  })
  
  $(".refresh").click(function() {
    $(".rules").hide();
    $(".results").hide();
    $(".intro").fadeIn(1000);
  })
})