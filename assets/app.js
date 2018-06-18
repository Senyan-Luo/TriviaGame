$(document).ready(function(){
     let number = 61
     let intervalId
     let correctAnswer = 0
     let wrongAnswer = 0
     $(".form-check").hide()
$("#startButton").on("click", function(){
    $(this).hide()
    $(".form-check").show()
    
    var submitButton = $("<button>submit</butotn>")
    $("#submitButton").append(submitButton)
    $(submitButton).on("click", function(){
        
    if($("#exampleRadios4").is(":checked")){
    correctAnswer ++
}
    else{
    wrongAnswer ++
}
    stop()

    $("#submitButton").hide()
    })
   intervalId = setInterval(decrement, 1000)

if($("#exampleRadios4").is(":checked")){
        correctAnswer ++
    }
    else{
        wrongAnswer ++
    }
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
    $(".form-check").hide()
    $("#time-up").html("<h2>"+ "Finished! View your results" + "</h2>")
    $("#results").html("Correct answers: " + correctAnswer)
    console.log(correctAnswer)
}

})