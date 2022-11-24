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
            
            <MarqueeBanner />
            <Announcement />
            
            <TopCoinChart />
            <div className="home-inner to-grey">
                <div className="side-price-news">
                    <PriceSearching />
                    <News />
                </div>
            </div>
            <GetStart />
            <Benefit />
            <WhyKub />
            <ReacommendPost />
            <SignUp />
            <Sponsor />
        </main>
    )
}