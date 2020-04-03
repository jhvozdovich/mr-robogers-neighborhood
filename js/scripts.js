//Business Logic



//User Interface Logic
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#number").val());
    
    console.log(typeof(userInput));
    $("#results").html("<li>" + userInput + "</li>");
    $(".results").show();
  })
})