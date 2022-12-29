import "./SubMenu.scss";
import { React } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "../SearchBar/SearchBar.scss";

const SubMenu = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">尋找下趟住宿</h1>
        <p className="headerDes">
          搜尋飯店、民宿及其他住宿類型的優惠…
          <br />
          Booking.com clone挑戰
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default SubMenu;
