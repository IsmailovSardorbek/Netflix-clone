import './enjoy.css'
import tvImage from '../../images/tv.png'
const Enjoy = () => {
    return (
        <>
            <div className="enjoy">
                <div className="container">
                    <div className="e-wrapper">
                        <div className="enjoy-l">
                            <h1>Enjoy on your TV.</h1>
                            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
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