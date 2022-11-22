import React from "react"
import MarqueeBanner from "./MarqueeBanner"
import Announcement from "./Announcement"
import TopCoinChart from './TopCoinChart'
import PriceSearching from './PriceSearching'
import News from "./News"
import GetStart from "./GetStart"
import Benefit from "./Benefit"
import WhyKub from "./WhyKub"
import SignUp from "./SignUp"
import Sponsor from "./Sponsor"
import ReacommendPost from "./RecommendPost"

export default function MainContnet() {
    return (
        <main>
            <div className="top-slogan">
                <div className="top-slogan--brag">
                    <h1>เว็บไซต์เทรดเหรียญดิจิทัล</h1>
                    <h1>ชั้นนำของประเทศไทย</h1>
                </div>
                <div className="top-slogan--detail">
                    <p>Bitkub เป็นแพลตฟอร์มยุคใหม่ของการซื้อขาย</p>
                    <p>และเก็บเหรียญต่าง ๆ ด้วยเงินบาท</p>
                </div>
            </div>
            <MarqueeBanner />
            <Announcement />
            <TopCoinChart />
            <PriceSearching />
            <News />
            <GetStart />
            <Benefit />
            <WhyKub />
            <ReacommendPost />
            <SignUp />
            <Sponsor />
        </main>
    )
}