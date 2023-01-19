import './header.css'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

export default function Header({onSelect}) {
    return (
        <>
            <div className="header">
                <div className="dark-overlay">
                    <Navbar onSelect={onSelect} />
                    <Hero />
                </div>
            </div>
        </>
    )
}