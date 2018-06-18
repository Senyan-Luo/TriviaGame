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
        
    if($("#question1-4").is(":checked")){
    correctAnswer ++
}
    if($("#question2-1").is(":checked")){
    correctAnswer ++
}
    if($("#question3-3").is(":checked")){
    correctAnswer ++
}
    wrongAnswer = (3-correctAnswer)
    stop()

    

    $("#submitButton").hide()
    })
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
    $(".form-check").hide()
    $("#time-up").html("<h2>"+ "Finished! View your results" + "</h2>")
    $("#correctResult").html("Correct answers: " + correctAnswer)
    $("#incorrectResult").html("Incorrect answer: " + wrongAnswer)
    console.log(correctAnswer)
    console.log(wrongAnswer)
}

})