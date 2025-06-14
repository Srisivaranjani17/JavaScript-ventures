export class Quiz{
    constructor(questions){
        this.questions=questions;
        this.score=0;
        this.currentIndex=0;
    }

    getCurrentQuestion(){
        return this.questions[this.currentIndex];
    }

    checkAnswer(answer){
        const isCorrect=this.getCurrentQuestion().answer === answer;

        if(isCorrect) this.score++;
        this.currentIndex++;
        return isCorrect;
    }

    isFinished(){
        return this.currentIndex >= this.questions.length;
    }
}