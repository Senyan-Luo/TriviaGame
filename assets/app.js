$(document).ready(function(){
     let number = 60
     let intervalId

$("#startButton").on("click", function(){
    $(this).hide()
    var submitButton = $("<button>submit</butotn>")
    $(submitButton).on("click", stop())
    setInterval(decrement(), 1000)
     if (number === 0){ 
        stop()
    }
    $("#time-left").append("<h2>" + number + " seconds left" + "</h2>")

})

function decrement(){
    number --
}

function stop(){
    //clearInterval(intervalId)
    $("#time-left").html("<h2>"+ "Time is up!" + "</h2>")
    $("#q1").text("Correct answers")
}

})