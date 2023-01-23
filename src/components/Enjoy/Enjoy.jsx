import './enjoy.css'
import tvImage from '../../images/tv.png'
import { useContext } from 'react'
import { Context } from '../../App'
const Enjoy = () => {
  const { selectedLanguage } = useContext(Context)

  return (
    <>
      <div className="enjoy">
        <div className="container">
          <div className="e-wrapper">
            <div className="enjoy-l">
              <h1>{selectedLanguage.enjoySectionTitle}</h1>
              <p>{selectedLanguage.enjoySectionDescription}</p>
            </div>
            <div className="enjoy-r">
              <img src={tvImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enjoy
