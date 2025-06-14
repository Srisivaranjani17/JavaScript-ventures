import { Quiz } from "./quiz.js";
import { UI } from "./ui.js";
import { questions } from "./data.js";


const quiz=new Quiz(questions);
const ui=new UI();
let timer;
let timeLeft=15;


document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');
    startQuiz();
});



function startQuiz(){
    renderCurrent();

    timer=setInterval(()=>{
        timeLeft--;
        ui.updateTimer(timeLeft);
        if(timeLeft === 0){
            nextQuestion();
        }
    },1000);
}


function renderCurrent(){
    timeLeft=15;
    ui.updateTimer(timeLeft);
    const q=quiz.getCurrentQuestion();


    ui.onAnswer=(answer)=>{
        quiz.checkAnswer(answer);
        nextQuestion();
    };

    ui.renderQuestions(q,quiz.currentIndex,questions.length);
}

function nextQuestion(){
    clearInterval(timer);
    if(quiz.isFinished()){
        ui.showResult(quiz.score,questions.length);
    }else{
        startQuiz();
    }
}

// startQuiz();