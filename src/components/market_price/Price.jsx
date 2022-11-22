import React from "react"
import "./MarketPrice.css"

export default function Price(props) {

    const name = props.coinName.slice(4)
    const lastPrice = props.coinPrice.last.toLocaleString()
    const volume = props.coinPrice.baseVolume.toLocaleString()
    const high = props.coinPrice.high24hr.toLocaleString()
    const low = props.coinPrice.low24hr.toLocaleString()

    
    const percentChange = props.coinPrice.percentChange
    function trend(percentChange) {
        if (percentChange < 0){
            return (
                <span class="material-icons inside-form-box"><span class="material-symbols-outlined trending-arrow">arrow_drop_down</span></span>
            )
        } else {
            return (
                <span class="material-icons inside-form-box"><span class="material-symbols-outlined trending-arrow">arrow_drop_up</span></span>
            )
        }
    }

    const trending = trend(percentChange)

    const styles = {
        color: percentChange>=0 ? "green" : "red"
    }

    const icon_name = name.toLowerCase()
    const icon_url = `https://coinicons-api.vercel.app/api/icon/${icon_name}`

    return (
        <div className="price">
            <div className="coin-name">
                <img src={icon_url} alt="" className="coin-icon"/>
                <p className="table-item">{name}</p>
            </div>
            <div className="last-price table-item" style={styles} >{lastPrice} ({trending}{percentChange}%)</div>
            <div className="volume24 table-item">{volume} {name}</div>
            <div className="high24 table-item">{high}</div>
            <div className="low24 table-item">{low}</div>
        </div>
    )
}