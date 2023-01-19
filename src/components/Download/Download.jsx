import './download.css'
import mobileImg from '../../images/mobile.jpg'
import bookImage from '../../images/boxshot.png'
import downloadGIF from '../../images/download-icon.gif'
import {useContext} from "react";
import {Context} from "../../App";
export default function Download() {

    const {selectedLanguage} = useContext(Context)

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
                        <h1>{selectedLanguage.downloadSectionTitle}</h1>
                        <p>{selectedLanguage.downloadSectionDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}