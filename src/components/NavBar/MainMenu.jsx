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
          <input type="checkbox" id="nav-toggle" />
          <label htmlFor="nav-toggle" className="ham">
            <span className="ham-origin">
              {/* 塞三條線 */}
              <span className="ham-bar ham-bar-1"></span>
              <span className="ham-bar ham-bar-2"></span>
              <span className="ham-bar ham-bar-3"></span>
            </span>
          </label>
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <FontAwesomeIcon icon={faBed} />
                  <span>住宿</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <FontAwesomeIcon icon={faCar} />
                  <span>租車</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <FontAwesomeIcon icon={faToriiGate} />
                  <span>景點/活動</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>機場計程車</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
