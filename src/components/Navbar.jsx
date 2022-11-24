import React, {useState} from "react"
import logo1 from "../assets/images/logo.svg"
import logo2 from "../assets/images/logo-white.svg"

export default function Navbar() {

    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 30) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <header>
            <div className={color? "nav-color nav-bar" : "nav-no-color nav-bar"}>
                <nav >
                    <img src={logo1} className="first-logo1"/>
                    <img src={logo2} className="first-logo2"/>
                    <button className="hamburger">
                        <span className="material-icons">menu</span>
                    </button>
                </nav>
            </div>
            <div className="floater">
                <div className="chatbox float">
                    <p>Chatbox</p>
                    <span className="material-icons">person</span>
                </div>
                <div className="support float">
                <span className="material-icons">chat</span>
                    <p>Support</p>
                </div>
            </div>
        </header>
    )
}