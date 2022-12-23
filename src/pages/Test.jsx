import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import * as locales from "react-date-range/dist/locale";
import "./Test.scss";

const Test = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  function selectRage(date1, date2) {
    const dateSelected = (date2 - date1) / 1000 / 60 / 60 / 24;
    return dateSelected;
  }
  const entries = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];

  const [dates, setDates] = useState(entries);

  return (
    <div>
      <FontAwesomeIcon
        icon={faCalendar}
        onClick={() => setOpenCalendar(true)}
      />
      <span className="searchText" onClick={() => setOpenCalendar(true)}>
        {format(dates[0].startDate, "yy/MM/dd")} -{" "}
        {format(dates[0].endDate, "yy/MM/dd")}
        {"  "}共 {selectRage(dates[0].startDate, dates[0].endDate)} 晚
      </span>
      {openCalendar && (
        <div className="modalTest">
          <div className="modalContainer">
            <DateRange
              editableDateInputs={true} //可以讓日期被選取並輸入等等的
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              className="calendarTest"
              minDate={new Date()}
              ranges={dates}
              locale={locales["zhTW"]}
              onShownDateChange={true}
              preventSnapRefocus={true}
            />
            <span className="searchText" onClick={() => setOpenCalendar(true)}>
              {format(dates[0].startDate, "yy/MM/dd")} -{"  "}
              {format(dates[0].endDate, "yy/MM/dd")}
              {"  "}共 {selectRage(dates[0].startDate, dates[0].endDate)} 晚
            </span>
            <button onClick={() => setOpenCalendar(false)} className="Finished">
              完成
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
