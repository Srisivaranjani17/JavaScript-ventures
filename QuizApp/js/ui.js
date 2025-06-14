export class UI{
    constructor(){

        this.questionBox=document.getElementById('question-box');
        this.choicesList=document.getElementById('choices');
        this.questionIndex=document.getElementById('question-index');
        this.timerDisplay=document.getElementById('timer');
        this.resultBox=document.getElementById('result-box');
        this.finalScore=document.getElementById('final-score');
        this.highScore=document.getElementById('high-score');

    }

    renderQuestions(q,index,total){
        this.questionBox.innerText=q.question;
        this.choicesList.innerHTML='';
        this.questionIndex.innerText=`Q${index+1} / ${total}`;

        q.choices.forEach(choice => {

            const li = document.createElement('li');
            li.textContent=choice;
            li.onclick=()=>this.onAnswer(choice);
            this.choicesList.appendChild(li);
        });
    }

    showResult(score,total){
        document.getElementById('quiz-box').classList.add('hidden');
        this.resultBox.classList.remove('hidden');
        this.finalScore.textContent=`${score} / ${total}`;

        const previous=localStorage.getItem('highScore') || 0;
        const best=Math.max(score,previous);
        this.highScore.textContent=best;
    }

    updateTimer(time){
        this.timerDisplay.innerText=`⏱ ${time}s`;
    }
}