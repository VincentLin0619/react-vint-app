import React from "react";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";
import { useState } from "react";

import format from "date-fns/format";

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
          icon={faCalendar}
          onClick={() => setOpenCalendar(true)}
        />
        {""}

        <span className="searchText">
          {format(dates[0].startDate, "MM/dd/yy")} -{" "}
          {format(dates[0].endDate, "MM/dd/yy")}
        </span>
      </div>
      <div className="searchBarItem-3">
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
      <button className="searchBarBtn">搜尋</button>
    </div>
  );
};
