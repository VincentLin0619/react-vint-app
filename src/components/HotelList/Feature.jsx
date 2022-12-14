import React from "react";
import "./Feature.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feature = ({ dataArray, title, des }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 5, // 一次顯示幾張
    slidesToScroll: 3, // 按下一頁的時候，要跑幾張
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
        <span>{des}</span>
      </div>

      <Slider {...settings}>
        {dataArray.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt="" />
            <div className="itemInfo">
              <p className="itemTitle">{item.name}</p>
              <span className="itemDesc">{item.amount}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feature;
