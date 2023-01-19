import Question from "../Question/Question";
import './questions-list.css'
import {useContext} from "react";
import {Context} from "../../App";
export default function QuestionsList({ questions, openAnswer }) {

    const {selectedLanguage} = useContext(Context)

    return (
        <>
            <ul className='questions-list'>
                {
                    questions.map((question, index) => (
                        <Question question={question} index={index} key={index} openAnswer={openAnswer}/>
                    ))
                }
            </ul>
            <a href="#" className='finish-sign-up'>
                {selectedLanguage.finishSignUp} <i className="fa-solid fa-chevron-right"></i>
            </a>
        </>

    )
}