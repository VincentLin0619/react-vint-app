import React from "react";
import "./Discount.scss";

export const Discount = () => {
  return (
    <div className="discountContainer">
      <div className="left">
        <img
          src="https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h2>省15%或更多</h2>
        <span>
          這個夏天，讓夢想之旅成真｜2022年09月30日前預訂並住房就可省一筆
        </span>
        <button>逛逛優惠</button>
      </div>
    </div>
  );
};
