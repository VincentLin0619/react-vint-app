import React from "react";
import "./Feature.scss";

const Feature = ({ dataArray, title, des }) => {
  return (
    <div className="feature">
      <div className="listTitle">
        <h2>{title}</h2>
        <span>{des}</span>
      </div>
      <div className="container">
        {dataArray.map((item, index) => (
          <div className="item" key={index}>
            <div className="itemInfo">
              <img src={item.img} alt="" />
              <div className="title">{item.name}</div>
              <div className="desc">{item.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
