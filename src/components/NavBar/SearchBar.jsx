import React from "react";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import format from "date-fns/format";

export const SearchBar = () => {
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [openCalendar, setOpenCalendar] = useState(false);
  return (
    <div className="headerSearchBar">
      <div className="searchBarItem">
        <FontAwesomeIcon icon={faBed} />
        <input
          type="input"
          placeholder="想要去哪裡？"
          className="searchInput"
        />
      </div>
      <div className="searchBarItem">
        <FontAwesomeIcon
          icon={faCalendar}
          onClick={() => setOpenCalendar(!openCalendar)}
        />
        {/* {openCalendar ? false : <DateRange />} */}
        {openCalendar && (
          <DateRange
            editableDateInputs={true} //可以讓日期被選取並輸入等等的
            onChange={(item) => setDates([item.selection])}
            //onChange把紀錄到的改動都紀錄到state date 裡面我們暫存器就會有選好的日期範圍，等於是輸入到暫存器
            //item.selection的概念就是讓他選擇上傳到key=selection的部分，因為
            moveRangeOnFirstSelection={false}
            className="calendar" //並記得classname scss styling導入
            minDate={new Date()}
            ranges={dates} //可以選範圍並範圍更改會re-render useState的date等於這是個抓取date範圍並顯示在日曆上，等於是從暫存器輸入到日曆顯示上面
            locale={locales["zhTW"]}
            //最後這邊就是語言版本使用繁體中文zhTW概念
            //就可以用到上面的import * as locales from 'react-date-range/dist/locale';
          />
        )}
        <span
          className="searchText"
          onClick={() => setOpenCalendar(!openCalendar)}
        >
          {format(dates[0].startDate, "MM/dd/yy")} -{" "}
          {format(dates[0].endDate, "MM/dd/yy")}
        </span>
      </div>
      <div className="searchBarItem">
        <FontAwesomeIcon icon={faPeopleGroup} />
        <span className="searchText">3位成人，兩位小孩，1間房</span>
      </div>
      <button className="searchBarBtn">搜尋</button>
    </div>
  );
};
