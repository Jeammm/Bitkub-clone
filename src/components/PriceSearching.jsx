import React from "react"
import MarketPrice from "./market_price/MarketPrice"

export default function PriceSearching() {
    return (
        <div className="info-container market-price-section">
            <div className="price-list">
                <div className="price-table-header">
                    <div className="dashboard-title">
                        <h2>ราคาตลาด</h2>
                    </div>
                    <div className="search-box-container">
                        <span className="material-icons inside-form-box"><span className="material-symbols-outlined">search</span></span>
                        <input type="text" className="coin-search-box input" placeholder="ค้นหา..."/>
                    </div>
                </div>
                <MarketPrice />
            </div>
        </div>
    )
}