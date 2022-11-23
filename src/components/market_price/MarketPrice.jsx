import React, { useState } from "react"
import "./MarketPrice.css"
import coinDataWithFav from "./coinDataWithFav"
import Price from "./Price"

export default function MarketPrice() {

    const coinComponentsArray = []
    const [coinDetail, setCoinDetail] = useState(coinDataWithFav)

    function toggleFavorite(coinName) {
        
        let k = -1
        for (let i=0; i<coinDetail.length; i++) {
            k++
            if (Object.keys(coinDetail[i])[0] === coinName){
                break
            }
        }
        setCoinDetail(prevState => {
            const coinName = Object.keys(prevState[k])[0]
            const coinData = {...prevState[k][coinName], isFavorite: !prevState[k][coinName].isFavorite}
            const newState = [...prevState]
            newState[k] = {[coinName]: {...coinData}}
            return newState
        })

    }


    const [toggleState, setToggleState] = useState(2)

    const selectTab = (tab) => {
        setToggleState(tab)
    }

    const underlineTab = {
        borderBottom: "2px solid #21D46C"
    }

    for (let i = 0; i<coinDetail.length; i++) {
        const [key, value] = Object.entries(coinDetail[i])
        const priceComponent = <Price coinName={key[0]} coinPrice={key[1]} handleClick={toggleFavorite}/>

        if (toggleState === 2 || key[1].isFavorite === true) {
            coinComponentsArray.push(priceComponent)      
        }

    }

    return (
        <div className="price-table-container">

            <div className="tab-selector">
                <div 
                className="tab-button favorite-tab" 
                onClick={() => selectTab(1)}
                style={toggleState === 1? underlineTab : {}}
                >
                    <span className="material-icons inside-form-box"><span className="material-symbols-outlined" style={{color:"gold"}} >grade</span></span>
                    <p>ชื่นชอบ</p>
                </div>
                <div 
                className="tab-button all-tab" 
                onClick={() => selectTab(2)}
                style={toggleState === 2? underlineTab : {}}
                >
                    <p>ตลาด THB</p>
                </div>
            </div>

            <div className="priceTable">

            <div className="price-column-header">
                <p className="coin-name-header">สกุลเงิน</p>
                <p className="last-price">ราคาล่าสุด (THB)</p>
                <p className="volume24">ซื้อขาย/วัน</p>
                <p className="high24">สูงสุด/วัน (THB)</p>
                <p className="low24">ต่ำสุด/วัน (THB)</p>
            </div>

            <div className={toggleState === 1 ? "tab active-tab" :  "tab"}>
                {coinComponentsArray}
            </div>

            <div className={toggleState === 2 ? "tab active-tab" :  "tab"}>
                {coinComponentsArray}
            </div>

            </div>
        </div>
        
    )
}