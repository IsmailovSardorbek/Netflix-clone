import './watch.css'
import macImg from '../../images/imac.png'
import { Context } from '../../App'
import { useContext } from 'react'

export default function Watch() {
  const { selectedLanguage } = useContext(Context)

  return (
    <div className="watch-now">
      <div className="container">
        <div className="w-wrapper">
          <div className="w-left">
            <h1>{selectedLanguage.watchSectionTitle}</h1>
            <p>{selectedLanguage.watchSectionDescription}</p>
          </div>
          <div className="w-right">
            <img src={macImg} />
          </div>
        </div>
      </div>
    </div>
  )
}
