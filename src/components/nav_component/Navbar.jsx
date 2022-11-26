import React, {useState} from "react"
import logo1 from "../../assets/images/logo.svg"
import logo2 from "../../assets/images/logo-white.svg"
import "./Navbar.css"

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
            <div className={color? "nav-color nav-bar small-nav" : "nav-no-color nav-bar small-nav"}>
                <nav >
                    <img src={logo1} className="first-logo1"/>
                    <img src={logo2} className="first-logo2"/>
                    <button className="hamburger">
                        <span className="material-icons">menu</span>
                    </button>
                </nav>
            </div>

            <div className={color? "nav-color nav-bar med-nav" : "nav-no-color nav-bar med-nav"}>
                <nav >
                    <img src={color? logo2: logo1} className="first-logo1"/>
                    <img src={color? logo1: logo2} className="first-logo2"/>
                    <button className="hamburger">
                        <span className="material-icons">menu</span>
                    </button>
                </nav>
            </div>

            <div className={color? "nav-color nav-bar big-nav" : "nav-no-color nav-bar big-nav"}>
                <nav >
                    <img src={color? logo2: logo1} className="first-logo1"/>
                    <img src={color? logo1: logo2} className="first-logo2"/>
                    <ul className={color? "navbar-menu black-menu": "navbar-menu"}>
                        <li className="button-menu">
                            <p className="menu--item">ตลาดซื้อขาย</p>
                        </li>
                        <li className="button-menu invite-friend">
                           
                            <p className="menu--item">ชวนเพื่อน รับเงินคืน 20%</p>
                        </li>
                        <li className="drop-down-menu language-switch">
                            <p className="menu--item">TH</p>
                        </li>
                        <li className={color? "box-hover-black button-menu" : "box-hover-white button-menu"}>
                            <p className="menu--item">เข้าสู่ระบบ</p>
                        </li>
                        <li className={color? "box-hover-black button-menu" : "box-hover-white button-menu"}>
                            <p className="menu--item">สมัครสมาชิก</p>
                        </li>
                    </ul>
                </nav>
            </div>




            <div className="floater">
                <div className="chatbox float">
                    <p>Chatbox</p>
                    <span className="material-icons">person</span>
                </div>
                <div className="support float">
                <span className="material-icons">chat</span>
                    <p>ช่วยเหลือ</p>
                </div>
            </div>
        </header>
    )
}