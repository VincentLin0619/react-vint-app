import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PostCard.scss";

export const PostCard = ({ dataArray }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const settings1 = {
    arrows: false,
    dots: false,
    infinite: false,
    adaptiveHeight: true,
    className: "postCardList",
    speed: 1000,
    slidesToShow: 2, // 一次顯示幾張
    slidesToScroll: 2, // 按下一頁的時候，要跑幾張
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const settings2 = {
    arrows: false,
    dots: false,
    infinite: false,
    adaptiveHeight: true,
    className: "postCardList",
    speed: 1000,
    slidesToShow: 3, // 一次顯示幾張
    slidesToScroll: 3, // 按下一頁的時候，要跑幾張
    initialSlide: 0,
    centerPadding: "60px",

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
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="section-2">
      <Slider {...settings1} asNavFor={nav1} ref={(slider) => setNav1(slider)}>
        {dataArray.slice(0, 2).map((item, index) => (
          <div className="postCard" key={index}>
            <img src={item.img} alt="" />
            <div className="cardInfo">
              <h1>
                {item.name}
                <img className="cardFlag" src={item.flag} alt="" />
              </h1>
              <span>{item.amount}</span>
            </div>
          </div>
        ))}
      </Slider>
      <Slider {...settings2} asNavFor={nav2} ref={(slider) => setNav2(slider)}>
        {dataArray.slice(2, 5).map((item, index) => (
          <div className="postCard" key={index}>
            <img src={item.img} alt="" />
            <div className="cardInfo">
              <h1>
                {item.name}
                <img className="cardFlag" src={item.flag} alt="" />
              </h1>
              <span>{item.amount}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
