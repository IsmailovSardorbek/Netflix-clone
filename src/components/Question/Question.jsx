import './question.css'

export default function Question({ question, index, openAnswer}) {
    return (
        <>
            <li key={index} className='question'>
                <span>
                    {question.text}
                </span>
                <button onClick={() => openAnswer(question.text)} className={`open-answer ${question.open ? 'rotate' : ''}`}>+</button>
            </li>
            <div className={`answer ${question.open ? 'active' : ''}`}>
                {question.answer}
            </div>
        </>

    )
}