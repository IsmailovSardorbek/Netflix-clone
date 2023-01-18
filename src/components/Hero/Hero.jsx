import './hero.css'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                        <div className="container">
                            <h1 className='hero-subtitle'>Welcome back, user !</h1>
                            <h1 className='hero-title'>
                                Unlimited movies, TV <br/> shows, and more.
                            </h1>
                            <p className='hero-text'>Watch anywehere. Cancel anytime.</p>
                            <a href="#" className='finish-sign-up'>
                                Finish Sign Up <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Hero