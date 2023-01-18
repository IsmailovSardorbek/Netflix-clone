import './questions.css'
import QuestionsList from "../QuestionsList/QuestionsList";
import questionsList from '../../data/questions.json'
import {useState} from "react";

export default function Questions() {

    const [questions, setQuestions] = useState(questionsList)

    function openAnswer(question) {
        setQuestions(questionsList.map(q => {
                if(q.text === question) {
                    q.open = !q.open
                } else {
                    q.open = false
                }
                return q
            })
        )
    }

    return (
        <div className='questions'>
            <div className="container">
                <h1>Frequently Asked Questions</h1>

                <QuestionsList questions={questions} openAnswer={openAnswer}/>

            </div>
        </div>
    )
}