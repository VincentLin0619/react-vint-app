import React from "react";
import "./GlobalDiscount.scss";

const GlobalDiscount = () => {
  return (
    <div className="GlobalBanner">
      <div className="BannerImg">
        <img
          src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop@2x/1f5a273d871549f00bf6692f7ff612b5e8eda038.png"
          alt=""
        />
      </div>
      <div className="BannerInfoDes">
        {/* InfoDes不跟上面打架不然會共用 */}
        <h2>優惠立即享</h2>
        <span>
          登入您的 Booking.com 帳戶，尋找藍色的 Genius
          圖標，輕鬆省一筆，鐵人挑戰後面會越來越難，加油！
        </span>
        <div className="BannerBtn">
          <button>登入</button>
          <button>註冊</button>
        </div>
      </div>
    </div>
  );
};

export default GlobalDiscount;
