const question = document.querySelector("#question");
const quizStartButton = document.querySelector("#startButton");
const quizNextButton = document.getElementById("nextButton");
const quizPreviousButton =document.querySelector("#previousButton");
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");
const mainContainer = document.getElementById("quizContainer");
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
        optionA: "asset/Images/cup-unsplash.jpg",
        optionB:"asset/Images/apple-unsplash.jpg",
        optionC:"asset/Images/lamp-unsplash.jpg",
        correct:"asset/Images/bananas-unsplash.jpg"
},{question1: "Which sentence is correct?",
        optionA: "this is a boy",
        optionB:"I am going to the market?",
         optionC:"i like to Learn",
        correct:"We like to play."},{
        question1: "what's the odd man out?",
        optionA: "asset/Images/boy-unsplash.jpg",
        optionB:"asset/Images/girl-unsplash.jpg",
         optionC:"asset/Images/man-unsplash (1).jpg",
        correct:"asset/Images/flower-unsplash.jpg"}
];
let score = 0;
let currentQuestionIndex = 0;

function loggedQuiz() {
const currentQuestionData = quiz[currentQuestionIndex]
question.innerText = currentQuestionData.question1;
option1.innerHTML = `<img src="${currentQuestionData.optionA}" width="100"/>`;
option2.innerHTML = `<img src="${currentQuestionData.optionB}" width="100"/>`;
option3.innerHTML = `<img src="${currentQuestionData.optionC}" width="100"/>`;
option4.innerHTML = `<img src="${currentQuestionData.correct}" width="100"/>`;
}

//start button function.
quizStartButton.addEventListener("click",()=> {
        mainContainer.style.display = "block";
        quizStartButton.style.display = "none";
})
//listens to the click on the answer buttons.
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
   mainContainer.innerHTML=`<h2 style="background-color:green; color:white; padding:1rem; margin:0rem; border:none;">You Finished!</h2>
   <p style="background-color:green; color: white; padding: 1rem; margin:0rem;border:none;">Your final score is ${score} out of ${quiz.length}</p>
   <button onclick="location.reload()" style="background-color:white; color:green; padding:1rem; margin:0rem;border:none;font-size:1rem;">Restart Quiz</button>`;
}   
}

const options = document.querySelectorAll(".answerButton");
for(let option of options){
        option.addEventListener("click",handleAnswer);
}
quizNextButton.addEventListener("click",handleAnswer)
 currentQuestionIndex++;

  quizPreviousButton.addEventListener("click",()=>{
        if(currentQuestionIndex >= 0){
                currentQuestionIndex--;
                loggedQuiz();
                
        }else{
                console.log("you are at the beginning")
        }
  })


loggedQuiz();
