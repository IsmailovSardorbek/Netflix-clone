import './question.css'
import { useContext } from 'react'
import { Context } from '../../App'

export default function Question({ question, index, openAnswer }) {
  const { selectedLanguage } = useContext(Context)

  return (
    <>
      <li key={index} className="question">
        <span>{selectedLanguage[`${question.text}`]}</span>
        <button
          onClick={() => openAnswer(question.text)}
          className={`open-answer ${question.open ? 'rotate' : ''}`}
        >
          +
        </button>
      </li>
      <div className={`answer${question.open ? ' active' : ''}`}>
        {selectedLanguage[`${question.answer}`]}
      </div>
    </>
  )
}
