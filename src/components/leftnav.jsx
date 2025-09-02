import React, { useState } from "react";
import { Checkbox } from "antd";
import Constants from "../constants/constants";
import Data from "./jsonfiles/leftnav.json";

function Leftnav({ className }) {
  const [selected, setSelected] = useState("");
  return (
    <div className={`menu-bdr ${className && className}`}>
      <div className="bdr-rht">
        <div className="pt2-5 pl2-5 category-txt font16">
          {Constants.CATEGORY_TEXT}
        </div>
        {Data.map((d, idx) => (
          <div
            key={idx}
            className={`pt2-5 ctgry-list ${
              selected === idx ? "active-bg" : "pl2-5"
            }`}
          >
            <div
              className={`cursor flx align-center justify-between font15 ${
                selected === idx && "active-menu fntBold pl2 list-title-bdr"
              }`}
              onClick={() => setSelected(idx)}
            >
              {d.list}
              <div className={selected === idx && "active-bdr"}></div>
            </div>
            <div
              style={{ display: selected === idx ? "" : "none" }}
              className={`${selected === idx && "pl2-5"}`}
            >
              {d.subList.map((sub, id) => (
                <div
                  className={`flx align-start pt0-5 ptb1 mr4 ${
                    d.subList.length - 1 !== id && "bdr"
                  }`}
                  key={id}
                >
                  <Checkbox>{sub}</Checkbox>
                  <br></br>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default Leftnav;
