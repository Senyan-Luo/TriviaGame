$(document).ready(function(){
     let number = 61
     let intervalId
     $(".form-check").hide()
$("#startButton").on("click", function(){
    $(this).hide()
    $(".form-check").show()
    //var submitButton = $("<button>submit</butotn>")
    //$(submitButton).on("click", stop())
   intervalId = setInterval(decrement, 1000)
  
    })

   

function decrement(){
    number--
    $("#time-left").text("You have " + number + " seconds left")
    console.log(number) 
    if (number === 0){ 
    stop()
    }
}

function stop(){
    clearInterval(intervalId)
    $("#time-left").hide()
    $("#time-up").html("<h2>"+ "Time is up!" + "</h2>")
    $("#q1").text("Correct answers")
}

})