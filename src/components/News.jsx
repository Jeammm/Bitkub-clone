import React from "react"
import NewsList from "./news_components/NewsList"

export default function News() {
    return (
        <div className="info-container news-side-section">
            <div className="news">
                <div className="dashboard-title">
                    <h2>ข่าว</h2>
                </div>

                <NewsList />

            </div>
        </div>
    )
}