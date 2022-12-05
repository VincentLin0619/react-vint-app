import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faToriiGate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./MainMenu.scss";

const MainMenu = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="lineOne">
          <div className="left">
            <span>DEMO.BOOKING</span>
          </div>
          <div className="right">
            <div className="navBtnFlag"></div>
            <div className="navNotify">zh-TW</div>
            <div className="navBtn">註冊</div>
            <div className="navBtn">登入</div>
          </div>
        </div>
        <div className="lineTwo">
          <div className="item active">
            <FontAwesomeIcon icon={faBed} />
            <span>住宿</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPlane} />
            <span>航班</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCar} />
            <span>租車</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faToriiGate} />
            <span>景點/活動</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>機場計程車</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
