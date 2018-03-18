//append html elements to the DOM 
//when start button is clicked, the page should be updated with timer & quiz questions.
//wrap the timer fuction in the click event "on.click - start time,"
//use jquery to delete html elements & add html elements
//h1, div holding button, acts as a container for all elements moving forward
//targeting that containing element. Use .append or .prepend, inside of the append function 
//create the div element inside of the append element, it should be dynamic
//.remove use to delete existing button, when delete button you inject the other elements that are needed
//container, container, elements (for the second slide)
//iterate over array, "for each questions " append an element to the DOM containing the questions and answers
questionsArray = [{
    question: "How are you?",
    answers : ["fine","okay","good"],
    rightAnswer: 1,
},{   
    question: "What's your favorite color?",
    answers : ["blue","gray","green"],
    rightAnswer: 2,
},{
    question: "What's your favorite animal?",
    answers : ["goat","cow","llama"],
    rightAnswer: 3,
    
},
]
//start button gets clicked, new page pops up with questions
//write new div with 3 questions
//timer starts
//function to count timer down starts



$(document).ready(function(){    
    let startButton =  $('#start').on('click',function() {
    $("#start").hide();
        
    function generateHTML() {
        gameHTML =  $('#questionbox').append(`<div>${questionsArray[1].question}</div>`)
        
        // "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p>
        // <p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        // $(".mainArea").html(gameHTML);
        // }

    }
});




// for (let i = 0; i <= questionsArray.length; i++) {
//     let question = questionsArray[i].question
//     let someting = questionsArray[i].answers
//     $('#questionbox').append(`<div>${question}</div>`)

// person = { name: "Bob", gender: "?"}

//    var personsName = person.name

