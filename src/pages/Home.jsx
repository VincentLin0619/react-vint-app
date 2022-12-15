import React from "react";
import MainMenu from "../components/NavBar/MainMenu";
import SubMenu from "../components/NavBar/SubMenu";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Feature from "../components/HotelList/Feature";
import {
  Attractions,
  CategoriesCities,
  CategoriesType,
  PopularHotelsData,
} from "../data";
import { PopularHotels } from "../components/HotelList/PopularHotels";
import { PostCard } from "../components/HotelList/PostCard";

const Home = () => {
  return (
    <div>
      <MainMenu />
      <SubMenu />
      <div className="announcementContainer">
        <div className="checkContainer">
          <input type="checkbox" name="checkbox" id="checkbox" />
          此為出差行程
        </div>
        <div className="infoContainer">
          <FontAwesomeIcon icon={faInfoCircle} />
          獲得所需建議。在出發之前，查看最新的新冠肺炎（COVID-19）相關限制。瞭解更多
        </div>
        <div className="discountContainer">
          <div className="left">
            <img src="" alt="" />
          </div>
          <div className="right">
            <h2>省15%或更多</h2>
            <span>
              這個夏天，讓夢想之旅成真｜2022年09月30日前預訂並住房就可省一筆
            </span>
            <button>逛逛優惠</button>
          </div>
        </div>
      </div>
      <div className="">
        <Feature dataArray={CategoriesType} title="依住宿類型瀏覽" />
        <Feature
          dataArray={CategoriesCities}
          title="探索台灣"
          des="這些熱門目的地魅力無窮，等你來體驗！"
        />
      </div>
      <div>
        <PopularHotels dataArray={PopularHotelsData} />
        <PostCard dataArray={Attractions} />
      </div>
    </div>
  );
};

export default Home;
