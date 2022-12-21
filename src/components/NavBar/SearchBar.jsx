import React from "react";

import { DateRange } from "react-date-range";
import { useState } from "react";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import * as locales from "react-date-range/dist/locale";
//用它來叫出不同版本的語言翻譯，把日曆換成中文

export const SearchBar = () => {
  // 日期狀態開關、資料
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  // 人數狀態開關、資料、計算
  const [openConditions, setOpenConditions] = useState(false);
  const [conditions, setConditions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });
  const handleCounter = (name, sign) => {
    // 第一個參數判斷是誰要被計算
    // 第二個參數判斷是加還是減
    setConditions((prev) => {
      return {
        ...prev, // 解構為 [name]: sign
        [name]:
          sign === "increase" ? conditions[name] + 1 : conditions[name] - 1,
      };
    });
  };
  // 想要去哪input
  const [destination, setDestination] = useState("");
  return (
    <div className="headerSearchBar">
      <div className="searchBarItem-1">
        <FontAwesomeIcon icon={faBed} />
        <input
          type="input"
          placeholder="想要去哪裡？"
          className="searchInput"
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
      </div>
      <div className="searchBarItem-2">
        <FontAwesomeIcon
          icon={faPeopleGroup}
          onClick={() => setOpenConditions(!openConditions)}
        />
        <span
          className="searchText"
          onClick={() => setOpenConditions(!openConditions)}
        >
          成人 {conditions.adult} 位，小孩 {conditions.child} 位，房間{" "}
          {conditions.room}
        </span>
        {openConditions && (
          <div className="conditionsContainer">
            <div className="condition">
              成人
              <div className="conditionCounter">
                <button onClick={() => handleCounter("adult", "increase")}>
                  +
                </button>
                <span>{conditions.adult}</span>
                <button
                  onClick={() => handleCounter("adult", "decrease")}
                  disabled={conditions.adult <= 1}
                >
                  -
                </button>
              </div>
            </div>
            <div className="condition">
              小孩
              <div className="conditionCounter">
                <button onClick={() => handleCounter("child", "increase")}>
                  +
                </button>
                <span>{conditions.child}</span>
                <button
                  onClick={() => handleCounter("child", "decrease")}
                  disabled={conditions.child <= 0}
                >
                  -
                </button>
              </div>
            </div>
            <div className="condition">
              房間
              <div className="conditionCounter">
                <button onClick={() => handleCounter("room", "increase")}>
                  +
                </button>
                <span>{conditions.room}</span>
                <button
                  onClick={() => handleCounter("room", "decrease")}
                  disabled={conditions.room <= 1}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="searchBarItem-3">
        <FontAwesomeIcon
          icon={faCalendar}
          onClick={() => setOpenCalendar(true)}
        />
        {openCalendar && (
          <div className="modal">
            <button onClick={() => setOpenCalendar(false)} id="close">
              close
            </button>
            <DateRange
              editableDateInputs={true} //可以讓日期被選取並輸入等等的
              onChange={(item) => setDates([item.selection])}
              //onChange把紀錄到的改動都紀錄到state date 裡面我們暫存器就會有選好的日期範圍，等於是輸入到暫存器
              //item.selection的概念就是讓他選擇上傳到key=selection的部分，因為
              moveRangeOnFirstSelection={false}
              className="calendar" //並記得classname scss styling導入
              minDate={new Date()}
              ranges={dates} //才可以選範圍並範圍更改會re-render useState的date等於這是個抓取date範圍並顯示在日曆上，等於是從暫存器輸入到日曆顯示上面
              locale={locales["zhTW"]}
              //最後這邊就是語言版本使用繁體中文zhTW概念
              //就可以用到上面的import * as locales from 'react-date-range/dist/locale';
            />
          </div>
        )}

        <span className="searchText" onClick={() => setOpenCalendar(true)}>
          {format(dates[0].startDate, "MM/dd/yy")} -{" "}
          {format(dates[0].endDate, "MM/dd/yy")}
        </span>
      </div>
      <button className="searchBarBtn">搜尋</button>
    </div>
  );
};
