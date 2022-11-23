import React, { useState } from "react"
import "./MarketPrice.css"

export default function Price(props) {

    const name = props.coinName.slice(4)
    const lastPrice = props.coinPrice.last.toLocaleString()
    const volume = props.coinPrice.baseVolume.toLocaleString()
    const high = props.coinPrice.high24hr.toLocaleString()
    const low = props.coinPrice.low24hr.toLocaleString()


    // console.log(props)

    const percentChange = props.coinPrice.percentChange
    function trend(percentChange) {
        if (percentChange < 0){
            return (
                <span className="material-icons inside-form-box"><span className="material-symbols-outlined trending-arrow">arrow_drop_down</span></span>
            )
        } else {
            return (
                <span className="material-icons inside-form-box"><span className="material-symbols-outlined trending-arrow">arrow_drop_up</span></span>
            )
        }
    }

    const trending = trend(percentChange)

    const styles = {
        color: percentChange>=0 ? "#21D46C" : "red",
        fontWeight: 600
    }

    const icon_name = name.toLowerCase()
    const icon_url = `https://coinicons-api.vercel.app/api/icon/${icon_name}`

    const styles_star = {
        color: props.coinPrice.isFavorite? "gold" : "grey",
        fontSize: "18px"
    }

    return (
        <div className="price">
            <div className="coin-name">
                <span className="material-icons inside-form-box"><span className="material-symbols-outlined to-pointer" style={styles_star} onClick={() => props.handleClick(props.coinName)}>grade</span></span>
                <img src={icon_url} className="coin-icon"/>
                <p className="table-item">{name}</p>
            </div>
            <div className="last-price table-item" style={styles} >{lastPrice} ({trending}{percentChange}%)</div>
            <div className="volume24 table-item">{volume} {name}</div>
            <div className="high24 table-item">{high}</div>
            <div className="low24 table-item">{low}</div>
        </div>
    )
}