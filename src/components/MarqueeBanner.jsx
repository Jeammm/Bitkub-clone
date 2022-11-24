import React from "react"
import MarqueeClass from "./marquee-class"


export default function MarqueeBanner() {
    return (
        <div className="most-top-part">
            <div className="top-slogan">
                <div className="top-slogan-quote-container">
                    <div className="top-slogan--brag">
                        <h1>เว็บไซต์เทรดเหรียญดิจิทัล</h1>
                        <h1>ชั้นนำของประเทศไทย</h1>
                    </div>
                    <div className="top-slogan--detail">
                        <p>Bitkub เป็นแพลตฟอร์มยุคใหม่ของการซื้อขาย</p>
                        <p>และเก็บเหรียญต่าง ๆ ด้วยเงินบาท</p>
                        <div className="desktop-sign-up-button">
                            <div className="free-sign-up top-sign-up-button">
                                <h4>สมัครสมาชิกฟรี</h4>
                                <span class="small-circle-for-arrow"><svg class="right-arrow-in-circle green" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></span>
                            </div>
                            <div className="market top-sign-up-button">
                                <h4>MARKET</h4>
                                <span class="small-circle-for-arrow"><svg class="right-arrow-in-circle" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="marquee-container-container">
                    <div className="marquee-container">
                        <div className="marquee-banner">
                            <MarqueeClass />
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    )
}