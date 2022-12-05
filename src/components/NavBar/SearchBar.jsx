import React from "react";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";
import { useState } from "react";

export const SearchBar = () => {
  const [destination, setDestination] = useState("");
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
        <FontAwesomeIcon icon={faCalendar} />
        <span className="searchText">12/12/2022-12/12/2023</span>
      </div>
      <div className="searchBarItem">
        <FontAwesomeIcon icon={faPeopleGroup} />
        <span
          className="searchText"
          onClick={() => setOpenCalendar(!openCalendar)}
        >
          3位成人，兩位小孩，1間房
        </span>
      </div>
      <button className="searchBarBtn">搜尋</button>
    </div>
  );
};
