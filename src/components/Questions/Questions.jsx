import './questions.css'
import QuestionsList from '../QuestionsList/QuestionsList'
import questionsList from '../../data/questions.json'
import { useContext, useState } from 'react'
import { Context } from '../../App'

export default function Questions() {
  const [questions, setQuestions] = useState(questionsList)

  const { selectedLanguage } = useContext(Context)

  function openAnswer(question) {
    setQuestions(
      questions.map((q) => {
        if (q.text === question) {
          q.open = !q.open
        } else {
          q.open = false
        }
        return q
      })
    )
  }

  return (
    <div className="questions">
      <div className="container">
        <h1>{selectedLanguage.frequentQuestions}</h1>

        <QuestionsList questions={questions} openAnswer={openAnswer} />
      </div>
    </div>
  )
}
