import './profile.css'
import kidsImage from '../../images/kids.png'


export default function KidsProfile() {
    return (
        <>
            <div className="profile">
                <div className="container">
                    <div className="p-wrapper">
                        <div className="p-left">
                            <img src={kidsImage} />
                        </div>
                        <div className="p-right">
                            <h1>Create profiles for kids.</h1>
                            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}