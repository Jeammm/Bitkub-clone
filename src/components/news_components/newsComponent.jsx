import React from "react"

export default function NewsComponent(props) {
    return (
        <div className="news-item">
            <img src={props.banner} className="news-banner" />
            <div className="news-detail">
                <h4>{props.header}</h4>
                <p>{props.date}</p>
            </div>
        </div>
    )
}