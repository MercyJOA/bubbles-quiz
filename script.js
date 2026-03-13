const question = document.querySelector("#question");
const quizStartButton = document.querySelector("#startButton");
const quizNextButton = document.getElementById("nextButton");
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
let score = 0;
let currentQuestionIndex = 0;

function loggedQuiz() {
const currentQuestionData = quiz[currentQuestionIndex]
question.innerText =  currentQuestionData.question1;
option1.innerText = currentQuestionData.optionA;
option2.innerText = currentQuestionData.optionB;
option3.innerText = currentQuestionData.correct;
option4.innerText = currentQuestionData.optionA;
}

function handleAnswer(e){
        const selectedAnswer=e.target.innerText;
        const correctAnswer=quiz[currentQuestionIndex].correct;
//check if answer is correct.
if (selectedAnswer===correctAnswer) {
        score++;
        console.log("correct answer!");
}else{
        console.log(`wrong! The correct answer is ${correctAnswer.toUpperCase()}`);
}

currentQuestionIndex++

if (currentQuestionIndex<quiz.length) {
    loggedQuiz();    
} else {
   document.getElementById("quizContainer").innerHTML=`<h2>You Finished!</h2>
   <p>Your final score is ${score}out of ${quiz.length}</p>
   <button onclick="location.reload>Restart Quiz</button>`;
}   
}

const options = document.querySelectorAll(".answerButton");
for(let option of options){
        option.addEventListener("click",handleAnswer);
}

loggedQuiz();
