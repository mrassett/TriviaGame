"use strict"
let timer; 
let timeLeft = 30;
let questionNumber = 0;
let questionUserisOn = 0;
let numberofCorrectAnswers = 0;

$(document).ready(function(){
    $("#myform").hide();
    $("#right").hide();
    $("#wrong").hide();
    $("#answerpage").hide();
})

let startButton =  $('#start').on('click',function startsUp() {
    $("#start").hide();
    $("#myform").show();
    countDownBegins();
});
let submitButton =  $('#submit').on('click',function(event) {
    event.preventDefault();
    $("#start").hide();
    $("#myform").hide();
    $("#answerpage").show();
    $("#right").show();
    $("#right").html(numberofCorrectAnswers);
    
});

//function that displays questions
function check(){
let question1 = $("input[name='quizquestion']:checked").val();
if (question1 == "correct") {numberofCorrectAnswers++} 
let question2 = $("input[name='quizquestion2']:checked").val();
if (question2 == "correct") {numberofCorrectAnswers++} 
let question3 = $("input[name='quizquestion3']:checked").val();
if (question3 == "correct") {numberofCorrectAnswers++} 
let question4 = $("input[name='quizquestion4']:checked").val();
if (question4 == "correct") {numberofCorrectAnswers++} 
let question5 = $("input[name='quizquestion5']:checked").val();
if (question5 == "correct") {numberofCorrectAnswers++} 

console.log(question1,question2,question3,question4,question5);
console.log(numberofCorrectAnswers);
}

function countDownBegins (){
    timer = setInterval(function(){
    $("#countdown").html(timeLeft);
    if (timeLeft === 0){
    timeout();
    clearInterval(timer);
   } else{
    timeLeft--;
    }
    }, 1000);
    console.log(countDownBegins);
}
function timeout(){
        $("#start").hide();
        $("#myform").hide();
        $("#right").show();
        $("#right").html(numberofCorrectAnswers);
        $("#answerpage").show();
    }

