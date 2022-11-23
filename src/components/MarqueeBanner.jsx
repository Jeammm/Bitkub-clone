import React from "react"
import MarqueeClass from "./marquee-class"


export default function MarqueeBanner() {
    return (
        <div className="marquee-container-container">
            <div className="marquee-container">
                <div className="marquee-banner">
                    <MarqueeClass />
                </div>
            </div>
        </div>
    )
}