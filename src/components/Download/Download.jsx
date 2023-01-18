import './download.css'
import mobileImg from '../../images/mobile.jpg'
import bookImage from '../../images/boxshot.png'
import downloadGIF from '../../images/download-icon.gif'
export default function Download() {
    return (
        <div className='download'>
            <div className="container">
                <div className="d-wrapper">
                    <div className="d-left">
                        <div className="download-box">
                            <div className="box-left">
                                <img src={bookImage} className='book-img'/>
                                <div className='box-title'>
                                    <p>Stranger things</p>
                                    <small className='downloading'>Downloading...</small>
                                </div>
                            </div>
                            <div className="box-right">
                                <img src={downloadGIF} className='download-gif'/>
                            </div>
                        </div>
                    </div>
                    <div className="d-right">
                        <h1>Download your shows to watch offline.</h1>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}