import './header.css'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="dark-overlay">
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </>
    )
}