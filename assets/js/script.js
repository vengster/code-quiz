var questionTextEl = document.getElementById("question");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
var startPage = document.getElementById("start-page");
var mainPage = document.getElementById("main-container");


var questions = [{
    question:"Commonly used data types DO NOT include:",
    choiceA:"strings",
    choiceB:"booleans",
    choiceC:"alerts",
    choiceD:"numbers",
    correctAnswer: "c"
},
{
    question:"The condition if/else statement is enclosed with ______.",
    choiceA:"quotes",
    choiceB:"curly brackets",
    choiceC:"perenthesis",
    choiceD:"square brackets",
    correctAnswer: "c"
},
{
    question:"Arrays in javascript can be used to store _______.",
    choiceA:"numbers and strings",
    choiceB:"other arrays",
    choiceC:"booleans",
    choiceD:"all of the above",
    correctAnswer: "d"
},
{
    question:"String values must be enclosed within _____ when being assigned to variables",
    choiceA:"commas",
    choiceB:"curly brackets",
    choiceC:"quotes",
    choiceD:"parenthesis",
    correctAnswer: "c"
},
{
    question:"A very useful tool used during development and debugging for printing content to the debugger is ______.",
    choiceA:"javaScript",
    choiceB:"terminal/bash",
    choiceC:"for loops",
    choiceD:"console.log",
    correctAnswer: "d"
}];
console.log(questions);





var currentQuiz = 0;
console.log(currentQuiz);


// test click function
function startQuiz(){
    var currentQuizData = questions[currentQuiz];
    console.log(currentQuizData);

    questionTextEl.innerHTML = currentQuizData.question;
    console.log(questionTextEl.innerHTML);
    answerA.innerHTML = currentQuizData.choiceA;
    answerB.innerHTML = currentQuizData.choiceB;
    answerC.innerHTML = currentQuizData.choiceC;
    answerD.innerHTML = currentQuizData.choiceD;

    //currentQuiz++;
    
    function hideStart(){
        startPage.style.display="none";
        mainPage.style.display="block";
    }
    hideStart();
};


var p = document.createElement("p");
var comms = document.getElementById("comments")
function checkAnswer(){
    if (questions[0].choiceC){
        console.log(questions[0].choiceC);
        p.textContent = "Correct!";
        console.log(p);
        comms.appendChild(p);
        questions++;
    }
    else if(questions[0].choiceA){
        p.textContent = "Incorrect!";
        comms.appendChild(p);
    }
    if (currentQuiz < questions.length){
        currentQuiz++;
    }
    
}



answerC.addEventListener("click", checkAnswer);
answerA.addEventListener("click", checkAnswer);



var startBtn = document.querySelector("#start-q");

startBtn.addEventListener("click", startQuiz)