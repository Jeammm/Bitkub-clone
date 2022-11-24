import React from "react"
import chartData from "../assets/data/priceChart.jsx"

export default function TopCoinChart() {


    return (
        <div className="home-inner to-grey">

            <div className="price-charts info-container">
                <div className="split top-two-chart">
                    <div className="price-charts--item">
                        <h5>{chartData[0].coin}</h5>
                        <div className="info-top">
                            <h3>{chartData[0].price}</h3><span> ฿</span>
                            {chartData[0].chart}
                        </div>
                        <div className="info-bottom">

                            <p className={chartData[0].increase? "green":"red"}>{chartData[0].change}%</p>
                            <p className="vol">Volume:{chartData[0].volume}</p>
                        </div>
                    </div>

                    <div className="price-charts--item bottom-chart-section">
                        <h5>{chartData[1].coin}</h5>
                        <div className="info-top">
                            <h3>{chartData[1].price}</h3><span> ฿</span>
                            {chartData[1].chart}
                        </div>
                        <div className="info-bottom">
                            <p className={chartData[1].increase? "green":"red"}>{chartData[1].change}%</p>
                            <p className="vol">Volume:{chartData[1].volume}</p>
                        </div>
                    </div>
                </div>

                <div className="split bottom-two-chart">
                    <div className="price-charts--item">
                        <h5>{chartData[2].coin}</h5>
                        <div className="info-top">
                            <h3>{chartData[2].price}</h3><span> ฿</span>
                            {chartData[2].chart}
                        </div>
                        <div className="info-bottom">
                            <p className={chartData[2].increase? "green":"red"}>{chartData[2].change}%</p>
                            <p className="vol">Volume:{chartData[2].volume}</p>
                        </div>
                    </div>

                    <div className="price-charts--item bottom-chart-section">
                        <h5>{chartData[3].coin}</h5>
                        <div className="info-top">
                            <h3>{chartData[3].price}</h3><span> ฿</span>
                            {chartData[3].chart}
                        </div>
                        <div className="info-bottom">
                            <p className={chartData[3].increase? "green":"red"}>{chartData[3].change}%</p>
                            <p className="vol">Volume:{chartData[3].volume}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}