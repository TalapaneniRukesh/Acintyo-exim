import React, { useState } from "react";
import { Avatar, List, Rate } from "antd";
import Leftnav from "../leftnav";
import ProfileData from "../jsonfiles/profiles.json";
import ListOfCountries from "../jsonfiles/listofcountries.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Agentstab() {
  const [active, setActive] = useState("India");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  const scrollFlags = (type) => {
    if (type === "prev") {
      setStartIndex(startIndex - 8);
      setEndIndex(endIndex - 8);
    }
    if (type === "next") {
      setStartIndex(startIndex + 8);
      setEndIndex(endIndex + 8);
    }
  };

  return (
    <div>
      <div className="flx">
        <div className="fixed-leftnav">
          <Leftnav className="height-100" />
        </div>
        <div className="p30" style={{ width: "calc(100% - 250px)" }}>
          <div className="posRel">
            {startIndex !== 0 && (
              <LeftOutlined
                className="posAbs left0 top50percent cursor"
                onClick={() => scrollFlags("prev")}
              />
            )}
            <div className="flx justify-center gap-20">
              {ListOfCountries.map(
                (flag, idx) =>
                  idx >= startIndex &&
                  idx < endIndex && (
                    <div
                      onClick={() => setActive(flag.name)}
                      className={`flag-container cursor ${
                        active === flag.name && "active-flag"
                      }`}
                      key={idx}
                    >
                      <div className="tac pt1-5">
                        <img
                          src={flag.img}
                          alt={flag.name}
                          width="50"
                          height="50"
                        />
                        <div className="font11">{flag.name}</div>
                      </div>
                    </div>
                  )
              )}
            </div>
            {endIndex <= ListOfCountries.length &&
              ListOfCountries.length > 8 && (
                <RightOutlined
                  className="posAbs right0 top50percent cursor"
                  onClick={() => scrollFlags("next")}
                />
              )}
          </div>
          <div className="pt5">
            <div className="agents-container">
              <List
                bordered
                dataSource={ProfileData}
                renderItem={(profile) => (
                  <List.Item>
                    <Avatar src={profile.img} />
                    <div className="profile">{profile.name}</div>
                    <div>
                      <img src={profile.flag} alt="flag" width="45" />
                    </div>
                    <div className="profile">{profile.city}</div>
                    <div className="profile">{profile.phone}</div>
                    <div style={{ width: "175px" }}>{profile.email}</div>
                    <div>{profile.rating}</div>
                    <Rate allowHalf defaultValue={profile.rating} disabled />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agentstab;
