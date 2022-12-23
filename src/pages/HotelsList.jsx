import React from "react";
import MainMenu from "../components/NavBar/MainMenu";

const HotelsList = () => {
  return (
    <div>
      <MainMenu />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">搜尋區塊</div>
          <div className="listResult">搜尋結果</div>
        </div>
      </div>
    </div>
  );
};

export default HotelsList;
