import Question from "../Question/Question";
import './questions-list.css'
export default function QuestionsList({ questions, openAnswer }) {
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
                Finish Sign Up <i className="fa-solid fa-chevron-right"></i>
            </a>
        </>

    )
}