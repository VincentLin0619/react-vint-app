import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterTop">
        <h2 className="FooterTitle">省時又省錢！</h2>
        <p className="FooterContent">現在訂閱，我們將寄送最佳訂房優惠給您。</p>
        <div className="FooterSubContainer">
          <input type="text" placeholder="您的電子郵件" />
          <button>訂閱</button>
        </div>
        <div className="subCheckBox">
          <input type="checkbox" />
          <span>請發送最新優惠及消息給我</span>
        </div>
      </div>
      <div className="FooterBottom">
        <button>將你的住宿註冊</button>
      </div>
      <hr />
      <div className="FooterInfo">
        <ul>
          <li>手機版</li>
          <li>您的帳戶</li>
          <li>線上修改訂單</li>
          <li>客服支援</li>
          <li>加入聯盟行銷</li>
          <li>企業差旅服務</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
