import React, { useState } from "react";
import { Input } from "antd";
import Vector from "/assets/images/vector.png";
import Constants from "../constants/constants";
import Map from "/assets/images/map.png";
import Leftnav from "./leftnav";
import Products from "./jsonfiles/products.json";
import CardComponent from "./common/card";
import WorldMap from "https://cdn.skypack.dev/react-world-map@2.3.0";

const { Search } = Input;

function BuyerSeller({ tab, className }) {
  const [active, setActive] = useState("buy");

  return (
    <div className={className && className}>
      <div
        className={`justify-between pt1 buysell-header ${
          tab === "product" ? "d-none" : "flx"
        }`}
      >
        <div className="flx gap-30 plp28">
          <div className="flx flx-col gap-10" onClick={() => setActive("buy")}>
            <div>{Constants.FIND_BUYERS_TEXT}</div>
            <div className={active === "buy" ? "buysell-bdr" : "d-none"}></div>
          </div>
          <div className="flx flx-col gap-10" onClick={() => setActive("sell")}>
            <div>{Constants.FIND_SELLERS_TEXT}</div>
            <div className={active === "sell" ? "buysell-bdr" : "d-none"}></div>
          </div>
        </div>
        <div className="position-relative mr100">
          <Search placeholder="HSN code search" />
          <img
            src={Vector}
            width="15px"
            height="15px"
            className="position-absolute vector"
          />
        </div>
      </div>
      <div className={`flx ${tab === "product" ? "" : "gap-200"}`}>
        <div>
          <Leftnav className="height-100" />
        </div>
        {tab === "product" ? (
          <CardComponent Products={Products} />
        ) : (
          // <img src={Map} height="450" />
          <div className="flx flx-col pt2 gap-20">
            <WorldMap multiple={true} selected={["na", "oc"]} />
            <div className="align-self-end txt-clr">
              <ul>
                <li>5 - USA</li>
                <li>10 - Australia</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuyerSeller;
