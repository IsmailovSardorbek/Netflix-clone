import './hero.css'
import {useContext} from "react";
import {Context} from "../../App";

const Hero = () => {

    const {selectedLanguage} = useContext(Context)

    return (
        <>
            <div className="hero">
                <div className="hero-content">
                        <div className="container">
                            <h1 className='hero-subtitle'>{selectedLanguage.welcomeBack}, Sardorbek !</h1>
                            <h1 className='hero-title'>
                                {selectedLanguage.heroTitle}
                            </h1>
                            <p className='hero-text'>{selectedLanguage.heroText}</p>
                            <a href="#" className='finish-sign-up'>
                                {selectedLanguage.finishSignUp} <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Hero