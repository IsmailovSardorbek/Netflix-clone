import './watch.css'
import macImg from '../../images/imac.png'

export default function Watch() {
    return (
        <div className="watch-now">
            <div className="container">
                <div className="w-wrapper">
                    <div className="w-left">
                        <h1>Watch everywhere.</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                    </div>
                    <div className="w-right">
                        <img src={macImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}