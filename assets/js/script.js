var questionTextEl = document.getElementById("question");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
var startPage = document.getElementById("start-page");


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
    chioceD:"square brackets",
    correctAnswer: "c"
},

];





var currentQuiz = 0;


// // test click function
// function startQuiz(){
//     var currentQuizData = questions[currentQuiz];
//     console.log(currentQuizData);

//     questionTextEl.innerHTML = currentQuizData.question;
//     console.log(questionTextEl.innerHTML);
//     answerA.innerHTML = currentQuizData.choiceA;
//     answerB.innerHTML = currentQuizData.choiceB;
//     answerC.innerHTML = currentQuizData.choiceC;
//     answerD.innerHTML = currentQuizData.choiceD;

//     currentQuiz++;
    
// };

function hideStart(){
    startPage.style.display="none";
}
hideStart();
// var startBtn = document.querySelector("#start-q");

// startBtn.addEventListener("click", startQuiz)