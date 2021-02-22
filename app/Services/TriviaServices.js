
import { ProxyState } from "../AppState.js";
import TriviaQuestion from "../Models/TriviaQuestion.js";
import { api } from "./AxiosServices.js";


export class TriviaServices {
    constructor() {
        this.getTriviaQuestions();
        console.log('linked to the Trivia Services!');
    }

    getTriviaQuestions() {
        api.get('').then(res => {
            console.log(res);
            ProxyState.questions = res.data.results.map(rawTriviaQuestion => new TriviaQuestion(rawTriviaQuestion))

            console.log(ProxyState.questions)
        })
    }

    answerQuestion() {
        let button = document.querySelector("button")

    }

}


export const triviaServices = new TriviaServices();