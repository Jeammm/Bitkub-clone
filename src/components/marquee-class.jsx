import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class MarqueeClass extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
              <div className="banner-item-container">
                <img className="banner--item" src="https://www.bitkub.com/_next/image?url=https%3A%2F%2Fpublic-bitkub.s3-ap-southeast-1.amazonaws.com%2Fweb_banner%2F20220912190910Telegram%2520promo%2520on%2520SCM_web.png&w=640&q=75" alt="" />
              </div>
          </div>
          <div className="banner-item-container">
            <img className="banner--item" src="https://www.bitkub.com/_next/image?url=https%3A%2F%2Fpublic-bitkub.s3-ap-southeast-1.amazonaws.com%2Fweb_banner%2F20221118135628TRON%2520x%2520APEC_Web.png&w=640&q=75" alt="" />
          </div>
          <div className="banner-item-container">
            <img className="banner--item" src="https://www.bitkub.com/_next/image?url=https%3A%2F%2Fpublic-bitkub.s3-ap-southeast-1.amazonaws.com%2Fweb_banner%2F20221112180644Delist%2520FTT_all%2520notice_WEB.png&w=640&q=75" alt="" />
          </div>
          <div className="banner-item-container">
            <img className="banner--item" src="https://www.bitkub.com/_next/image?url=https%3A%2F%2Fpublic-bitkub.s3-ap-southeast-1.amazonaws.com%2Fweb_banner%2F20221010195249Bitkub%2520x%2520Circle%2520-%2520Drop%2520to%2520Earn%2520%25E0%25B8%259D%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%259A%2520Bitkub%2520%25E0%25B8%2594%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B9%2580%25E0%25B8%259A%25E0%25B8%25B4%25E0%25B9%2589%25E0%25B8%25A5%25E0%25B8%2584%25E0%25B8%25B8%25E0%25B9%2589%25E0%25B8%25A1_WEB.jpg&w=640&q=75" alt="" />
          </div>
          <div className="banner-item-container">
            <img className="banner--item" src="https://www.bitkub.com/_next/image?url=https%3A%2F%2Fpublic-bitkub.s3-ap-southeast-1.amazonaws.com%2Fweb_banner%2F20221110190217OTP%2520New%2520design_web.png&w=640&q=75" alt="" />
          </div>
          <div className="banner-item-container">
            <img className="banner--item" src="https://www.bitkub.com/_next/image?url=https%3A%2F%2Fpublic-bitkub.s3-ap-southeast-1.amazonaws.com%2Fweb_banner%2F20210623162345image.png&w=640&q=75" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}