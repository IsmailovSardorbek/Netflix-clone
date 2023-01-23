import './profile.css'
import kidsImage from '../../images/kids.png'
import { useContext } from 'react'
import { Context } from '../../App'

export default function KidsProfile() {
  const { selectedLanguage } = useContext(Context)

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="p-wrapper">
            <div className="p-left">
              <img src={kidsImage} />
            </div>
            <div className="p-right">
              <h1>{selectedLanguage.profileSectionTitle}</h1>
              <p>{selectedLanguage.profileSectionDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
