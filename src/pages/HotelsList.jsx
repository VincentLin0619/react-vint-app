import React, { useState } from 'react';
import MainMenu from '../components/NavBar/MainMenu';
import Footer from '../components/Footer/Footer';
import { format } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';
import { DateRange } from 'react-date-range';
import './HotelsList.scss';
import { SearchItem } from '../components/ListItem/SearchItem';

const HotelsList = () => {
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
  return (
    <div>
      <MainMenu />
      <div className="listContainer">
        <div className="listLeft">
          <div className="listSearch">
            <h1 className="listTitle">搜尋</h1>
            <div className="listItem">
              目的地/住宿名稱
              <br />
              <input
                type="input"
                placeholder="想要去哪裡？"
                className="searchInput"
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
            <div className="listItem">
              入住/退房日期:
              <br />
              <span
                className="selectorText"
                onClick={() => setOpenCalendar(true)}
              >
                {format(dates[0].startDate, 'yy/MM/dd')} -{'  '}
                {format(dates[0].endDate, 'yy/MM/dd')}
              </span>
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
                        {'  '}共{' '}
                        {selectRage(dates[0].startDate, dates[0].endDate)} 晚
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
              <span className="selectorResult">
                {format(dates[0].startDate, 'yy/MM/dd')} -{'  '}
                {format(dates[0].endDate, 'yy/MM/dd')}
                {'  '}共 {selectRage(dates[0].startDate, dates[0].endDate)} 晚
              </span>
            </div>
            <div className="listItem">
              每晚最高價格:
              <br />
              <input type="text" className="highestPrice" />
            </div>
            <div className="listItem">
              每晚最低價格:
              <br />
              <input type="text" className="lowestPrice" />
            </div>
            <div className="listItem">
              訂房資訊：
              <br />
              <span
                className="searchText"
                onClick={() => setOpenConditions(true)}
              >
                成人 {conditions.adult} 位，小孩 {conditions.child} 位，房間{' '}
                {conditions.room}
              </span>
              {openConditions && (
                <div className="conditionsContainer">
                  <button
                    className="close"
                    onClick={() => setOpenConditions(false)}
                  >
                    X
                  </button>
                  <div className="condition">
                    成人
                    <div className="conditionCounter">
                      <button
                        onClick={() => handleCounter('adult', 'increase')}
                      >
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
                      <button
                        onClick={() => handleCounter('child', 'increase')}
                      >
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
            <div className="listItem">
              <button className="searchBtn">搜尋</button>
            </div>
          </div>
        </div>
        <div className="listRight">
          <div className="listResult">
            <div className="resultTitle">
              <h2>在台北找到505間房間</h2>
            </div>
            <div className="map">
              <button className="mapBtn">在地圖上顯示</button>
            </div>
          </div>
          <SearchItem active="active" />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelsList;
