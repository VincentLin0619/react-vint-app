import React from "react";
import "./MainMenu.scss";
import HamMenu from "./HamMenu";
import { ScrollToTop } from "./ScrollToTop";

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
      </div>
      <ScrollToTop />
      <HamMenu />
    </div>
  );
};

export default MainMenu;
