import './footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <p>Questions? Contact us.</p>
                <div className="links-grid">
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Investor Relations
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Speed Test
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Cookie Preferences
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Legal Notices
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    Account
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Ways to Watch
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Corporate Information
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Only on Netflix
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-grid-column">
                        <ul className='links-list'>
                            <li>
                                <a href="#">
                                    Media Center
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
                    <option value="Russian">Russian</option>
                </select>
                <p>Netflix Uzbekistan</p>
            </div>
        </footer>
    )
}