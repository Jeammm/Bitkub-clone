import React, {useState} from "react"
import logo from "../assets/images/logo.svg"

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
            <nav className={color? "nav-color" : "nav-no-color"}>
                <img src={logo} />
                <button class="hamburger">
                    <span class="material-icons">menu</span>
                </button>
            </nav>
            <div className="floater">
                <div className="chatbox float">
                    <p>Chatbox</p>
                    <span class="material-icons">person</span>
                </div>
                <div className="support float">
                <span class="material-icons">chat</span>
                    <p>Support</p>
                </div>
            </div>
        </header>
    )
}