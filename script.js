const question = document.querySelector("#question");
const quizStartButton = document.querySelector("#startButton");
const quizNextButton = document.querySelector("nextButton");
const quizPreviousButton =document.querySelector("previousButton");
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");

//the quiz array with the questions and answers
const quiz = [
    {
        question1: "What is 4 + 6?",
        optionA: "5",
        optionB:"11",
        optionC:"2",
        correct:"10"
},{
  question1: "How many sides does a triangle have?",
        optionA: "4",
        correct:"3" ,
        optionB:"5",
        optionC:"2",
        
},{
    question1: "Which word starts with the letter B?",
        optionA: "cup",
        optionB:"apple",
        optionC:"lamp",
        correct:"Banana"
},{question1: "Which sentence is correct?",
        optionA: "this is a boy",
        optionB:"I am going to the market?",
         optionC:"i like to Learn",
        correct:"We like to play."},{
        question1: "what's the odd man out?",
        optionA: "Boy",
        optionB:"Girl",
         optionC:"Man",
        correct:"Flower"}
];
let random = Math.floor(Math.random()*quiz.length)
let currentQuestion = quiz[random];

function loggedQuiz() {
question.innerText =  currentQuestion.question1;
option1.innerText = currentQuestion.optionA;
option2.innerText = currentQuestion.optionB;
option3.innerText = currentQuestion.correct;
option4.innerText = currentQuestion.optionA;
}
loggedQuiz();