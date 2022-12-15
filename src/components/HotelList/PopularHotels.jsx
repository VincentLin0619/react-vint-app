import React from "react";
import "./PopularHotels.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PopularHotels = ({ dataArray, title, des }) => {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
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
    <div className="popularHotels">
      <div className="title">
        <h1>人氣民宿、公寓類型住宿</h1>
      </div>

      <Slider {...settings}>
        {dataArray.map((item, index) => (
          <div className="pItem" key={index}>
            <img src={item.img} alt="" />
            <div className="itemInfo">
              <div className="pTitle">{item.name}</div>
              <div className="pSubTitle">{item.place}</div>
              <div className="pPrice">TWD: {item.price} 起</div>
              <div className="pRate">
                <button>{item.rate}</button>
                <span>{item.rate >= 9.5 ? "好極了" : "傑出"}</span>
                <p>{item.comment.toLocaleString()}則評論</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
