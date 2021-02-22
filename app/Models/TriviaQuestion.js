export default class TriviaQuestion {
    constructor(data) {
        this.question = data.question
        this.incorrectAnswer = data.incorrectAnswer || data.incorrect_answer
        this.correctAnswer = data.correctAnswer || data.correct_answer
    }

    get Template() {
        return /*html*/ `
        <div class="row">
        <div class="col-3">
            <div class="card">
                <p>${this.question}</p>
                <button class="btn btn-success" onclick="app.triviaController.answerQuestion()">Show the Correct Answer</button>
                        <p>${this.correctAnswer} </p> 
                </div>
                </div>
            </div>
                `
    }
}