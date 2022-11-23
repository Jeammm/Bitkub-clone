import React, { useState } from "react"
import newsData from "./newsData"
import NewsComponent from "./NewsComponent"
import "./news-section.css"

export default function NewsList() {

    const [toggleTab, setToggleTab] = useState("announcement")

    const newsToShow = newsData[toggleTab].map( (news) => {
        return <NewsComponent {...news}/>
    } )


    function selectTab(tab) {
        setToggleTab(tab)
    }

    const underlineTab = {
        borderBottom: "2px solid #21D46C"
    }

    return (
        <div className="news-container">
            <div className="news-tab-selector">
                <p onClick={() => selectTab("announcement")} style={toggleTab === "announcement"? underlineTab : {}}>ANNOUNCEMENT</p>
                <p onClick={() => selectTab("bitkub")} style={toggleTab === "bitkub"? underlineTab : {}} >BITKUB</p>
                <p onClick={() => selectTab("siamblockchain")} style={toggleTab === "siamblockchain"? underlineTab : {}} >SIAM BLOCKCHAIN</p>
            </div>
            <div className="scroll-view">
                {newsToShow}
            </div>
        </div>
    )
}