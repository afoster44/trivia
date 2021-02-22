import { ProxyState } from "../AppState.js";
import { triviaServices, TriviaServices } from "../Services/TriviaServices.js";


function _draw() {
    let triviaQuestions = ProxyState.questions
    let template = ''
    triviaQuestions.forEach(tq => template += tq.Template)
    document.getElementById('trivia').innerHTML = template
}

export default class TriviaController {
    constructor() {
        ProxyState.on('questions', _draw)
        console.log('linked to the trivia controller');
    }
    getTriviaQuestions() {
        triviaServices.getTriviaQuestions();
    }

    answerQuestion() {
        triviaServices.answerQuestion();
    }
}