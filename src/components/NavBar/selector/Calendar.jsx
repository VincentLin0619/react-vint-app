import React from "react";
import { DateRange } from "react-date-range"; // 日期選取表單
import * as locales from "react-date-range/dist/locale"; //翻譯
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const Calendar = () => {
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  return (
    <section className="modal hidden">
      <div className="overlay"></div>
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
    </section>
  );
};
