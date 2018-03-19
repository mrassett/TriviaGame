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
var questionsArray =  [" ","How are you?", "Fav Color?"];

let answerArray = [["fine", "well", "good","shitty"], 
                    ["blue","black","gold","gray"]];

let correctAnswers =["well","gold"];
let timer; 
let timeLeft = 20;
let questionNumber = 0;
let answered = "";
let questionUserisOn = 0;
//start button gets clicked, new page pops up with questions
//write new div with 3 questions
//timer starts
//function to count timer down starts


//Start button
$(document).ready(function(){    
    let startButton =  $('#start').on('click',function() {
    $("#start").hide();
    showQuestions();
    })
})

//New question & answer slide
function showQuestions() {
    $('#right-wrong').empty();
    answered = true;
    var triviaBox = $("#questionbox").html(`<h2>${questionsArray[+1]}<br></h2>
    <button type="button" id="answer-button">${answerArray[questionUserisOn][0]}</button><br>
    <button type="button" id="answer-button">${answerArray[questionUserisOn][1]}</button><br>
    <button type="button" id="answer-button">${answerArray[questionUserisOn][2]}</button><br>
    <button type="button" id="answer-button">${answerArray[questionUserisOn][3]}</button><br>`)
    countDownBegins ();
    };
//timer function
    function countDownBegins (){
        timer = setInterval(function(){
        $("#countdown").html(timeLeft);
        if (timeLeft === 0){
        clearInterval(timer);
       } else{
        timeLeft--;
        }
        }, 2000);
        console.log(countDownBegins);
    }
        

// for (let i = 0; i <= questionsArray.length; i++) {
//     let question = questionsArray[i].question
//     let someting = questionsArray[i].answers
//     $('#questionbox').append(`<div>${question}</div>`)

// person = { name: "Bob", gender: "?"}

//var personsName = person.name

