import React from "react"
import quoteIcon from "../assets/images/icons8-quote-left-24.png"

export default function RecommendPost() {
    return (
        <div className="post-container">
            <div className="post">
                <div className="quote-icon"><img src={quoteIcon} /></div>
                <div className="info">
                    <p>Great service protect customer security thank you</p>
                    <div className="stars"><span className="material-icons inside-form-box"><span className="material-symbols-outlined">grade</span><span className="material-symbols-outlined">grade</span><span className="material-symbols-outlined">grade</span><span className="material-symbols-outlined">grade</span><span className="material-symbols-outlined">grade</span></span></div>
                    
                    <div className="post-author">
                        <div className="post-author--name">
                            <h4>Tanya</h4>
                            <div className="view-post">
                                <p>view post</p>
                                <img src="https://widgets.thereviewsplace.com/2.0/images/15x15/logo-repuso.png" alt="" />
                            </div>
                        </div>
                        <div className="post-author-picture"><p>TA</p></div>
                    </div>

                </div>
            </div>
            <button>More posts...</button>
            <p className="byRepuso">Powered by Repuso</p>
        </div>
    )
}