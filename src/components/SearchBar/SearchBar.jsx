import React from 'react';

import { DateRange } from 'react-date-range';
import { useState } from 'react';
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';
import { useNavigate } from 'react-router-dom';
//用它來叫出不同版本的語言翻譯，把日曆換成中文

export const SearchBar = () => {
  // 使用useNavigate傳輸資料與跳轉
  const navigate = useNavigate();
  const handleSearchBarSubmit = () => {
    navigate('/HotelsList', { state: { destination, dates, conditions } });
  };
  // 日期狀態開關、資料
  const [openCalendar, setOpenCalendar] = useState(false);
  // 計算選擇的天數，共有幾個晚上
  function selectRage(date1, date2) {
    const dateSelected = (date2 - date1) / 1000 / 60 / 60 / 24;
    return dateSelected;
  }
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
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
          sign === 'increase' ? conditions[name] + 1 : conditions[name] - 1,
      };
    });
  };
  // 想要去哪input
  const [destination, setDestination] = useState('');
  console.log(destination, dates, conditions);
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
          成人 {conditions.adult} 位，小孩 {conditions.child} 位，房間{' '}
          {conditions.room}
        </span>
        {openConditions && (
          <div className="conditionsContainer-homepage">
            <button className="close" onClick={() => setOpenConditions(false)}>
              X
            </button>
            <div className="condition">
              成人
              <div className="conditionCounter">
                <button onClick={() => handleCounter('adult', 'increase')}>
                  +
                </button>
                <span>{conditions.adult}</span>
                <button
                  onClick={() => handleCounter('adult', 'decrease')}
                  disabled={conditions.adult <= 1}
                >
                  -
                </button>
              </div>
            </div>
            <div className="condition">
              小孩
              <div className="conditionCounter">
                <button onClick={() => handleCounter('child', 'increase')}>
                  +
                </button>
                <span>{conditions.child}</span>
                <button
                  onClick={() => handleCounter('child', 'decrease')}
                  disabled={conditions.child <= 0}
                >
                  -
                </button>
              </div>
            </div>
            <div className="condition">
              房間
              <div className="conditionCounter">
                <button onClick={() => handleCounter('room', 'increase')}>
                  +
                </button>
                <span>{conditions.room}</span>
                <button
                  onClick={() => handleCounter('room', 'decrease')}
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
        <span className="searchText" onClick={() => setOpenCalendar(true)}>
          {format(dates[0].startDate, 'yy/MM/dd')} -{' '}
          {format(dates[0].endDate, 'yy/MM/dd')}
        </span>
      </div>
      {openCalendar && (
        <div className="modal">
          <div
            className="modalMask"
            onClick={() => setOpenCalendar(false)}
          ></div>
          <div className="modalContainer">
            <DateRange
              editableDateInputs={true} //可以讓日期被選取並輸入等等的
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              className="calendarTest"
              minDate={new Date()}
              ranges={dates}
              locale={locales['zhTW']}
              onShownDateChange={true}
              preventSnapRefocus={true}
            />
            <div className="searchFooter">
              <span
                className="selectorText"
                onClick={() => setOpenCalendar(true)}
              >
                {format(dates[0].startDate, 'yy/MM/dd')} -{'  '}
                {format(dates[0].endDate, 'yy/MM/dd')}
                {'  '}共 {selectRage(dates[0].startDate, dates[0].endDate)} 晚
              </span>
              <button
                onClick={() => setOpenCalendar(false)}
                className="Finished"
              >
                完成
              </button>
            </div>
          </div>
        </div>
      )}
      <button className="searchBarBtn" onClick={handleSearchBarSubmit}>
        搜尋
      </button>
    </div>
  );
};
