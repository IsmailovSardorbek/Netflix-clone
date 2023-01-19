import './footer.css'
import {useContext} from "react";
import {Context} from "../../App";

export default function Footer() {

    const {selectedLanguage} = useContext(Context)

    return (
        <footer className='footer'>
            <div className="container">
                <p>{selectedLanguage.footerQuestion}</p>
                <div className="links-grid">
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    {selectedLanguage.faq}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.investors}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.privacy}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.speedTest}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    {selectedLanguage.helpCenter}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.jobs}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.cookies}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.notices}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    {selectedLanguage.account}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.waysToWatch}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.info}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectedLanguage.netflix}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    {selectedLanguage.media}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <select className='language-select border-gray'>
                    <option value="English">English</option>
                    <option value="Russian">Русский</option>
                </select>
                <p>Netflix Uzbekistan</p>
            </div>
        </footer>
    )
}