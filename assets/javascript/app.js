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
    for (let i = 0; i <= questionsArray.length; i++) {
        var question = questionsArray[i].question
        var someting = questionsArray[i].answers
        $('#container').append(`<div>${question}</div>`)
        
    }

    person = { name: "Bob", gender: "?"}

   var personsName = person.name

// Questions for Travis - what is code like - "json object"
questions = [
    {
        numbers: [1,2,3],
        class : 'something',
        value : 'random',

        Question: [1,2,3],
        rightanswer: 'something',
        otheranswers : 'random',
    },
    {},
    {},
];

