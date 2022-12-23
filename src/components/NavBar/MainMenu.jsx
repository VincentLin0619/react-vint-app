import React from "react";
import "./MainMenu.scss";
import HamMenu from "./Button/HamMenu";
import { ScrollToTop } from "./Button/ScrollToTop";

const MainMenu = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="lineOne">
          <div className="left">
            <a href="/">DEMO.BOOKING</a>
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
