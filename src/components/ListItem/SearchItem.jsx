import React from 'react';
import './SearchItem.scss';

export const SearchItem = () => {
  return (
    <div className="infoContainer">
      <div className="infoTitle">
        <div className="infoTitle_left">
          <h1>台南微醺文旅</h1>
        </div>
        <div className="infoTitle_right">
          <div className="infoTitle_right-count">
            <span>傑出</span>
            <span>幾則評論</span>
          </div>
          <button>9.5</button>
        </div>
      </div>
      <div className="infoDes">
        <a href="#">中西區 台南 400公尺遠</a>
        <span>免費專機接送</span>
      </div>
      <div className="infoFooter">
        <div className="infoFooter_L">
          <div className="infoFooter_L-top">
            <b>標準單人房 － 附共用衛浴</b>
            <p>一張單人床</p>
          </div>
          <div className="infoFooter_L-bottom">
            <h4>免費取消</h4>
            <p>立即搶下優惠價−可取消</p>
            <span>此價格的客房在本站僅剩 1 間</span>
          </div>
        </div>
        <div className="infoFooter_R">
          <div className="infoFooter_R-top"></div>
          <div className="infoFooter_R-medium"></div>
          <div className="infoFooter_R-bottom"></div>
        </div>
      </div>
    </div>
  );
};
