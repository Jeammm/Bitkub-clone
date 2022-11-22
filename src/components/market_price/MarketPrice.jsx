import React from "react"
import "./MarketPrice.css"
import coinData from "../../assets/data/coindata"
import Price from "./Price"

export default function MarketPrice() {

    const coinDataToShow = []
    const name = Object.keys(coinData)
    for (let i = 0; i<name.length; i++) {
        const priceComponents = <Price coinName={name[i]} coinPrice={coinData[name[i]]}/>
        coinDataToShow.push(priceComponents)
    }


    return (
        <div className="priceTable">
            <div className="price-column-header">
                <p className="coin-name-header">สกุลเงิน</p>
                <p className="last-price">ราคาล่าสุด (THB)</p>
                <p className="volume24">ซื้อขาย/วัน</p>
                <p className="high24">สูงสุด/วัน (THB)</p>
                <p className="low24">ต่ำสุด/วัน (THB)</p>
            </div>
            {coinDataToShow}
        </div>
    )
}