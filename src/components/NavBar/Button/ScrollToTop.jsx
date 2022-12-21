import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.scss";
export const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setShowBtn(true) : setShowBtn(false);
      // if (window.scrollY > 350) {
      //   setShowBtn(true);
      // } else {
      //   setShowBtn(false);
      // }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <input type="checkbox" id="icon-position" onClick={goToTop} />
      {showBtn && (
        <label htmlFor="icon-position" className="roll-top-btn">
          <FontAwesomeIcon icon={faArrowUp} />
        </label>
      )}
    </>
  );
};
