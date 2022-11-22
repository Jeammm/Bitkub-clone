import React from "react"
import MarketPrice from "./market_price/MarketPrice"

export default function PriceSearching() {
    return (
        <div className="info-container">
            <div className="price-list">
                <div className="dashboard-title">
                    <h2>ราคาตลาด</h2>
                </div>
                <MarketPrice />
            </div>
        </div>
    )
}