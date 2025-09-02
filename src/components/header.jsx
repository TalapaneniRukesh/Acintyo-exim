import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "/assets/images/company-logo.png";
import CompanyLogo1 from "/assets/images/company-logo1.png";
import Constants from "../constants/constants";
import User from "/assets/images/user.png";
import UserWhite from "/assets/images/user-white.png";
import UserSelected from "/assets/images/userselected.png";
import Deals from "/assets/images/deals.png";
import DealsWhite from "/assets/images/deals-white.png";
import DealSelected from "/assets/images/dealselected.png";
import Bell from "/assets/images/bell.png";
import BellWhite from "/assets/images/bell-white.png";
import BellSelected from "/assets/images/bellselected.png";
import { LogoutOutlined } from "@ant-design/icons";

function Header({ setSelectedTab, selectedTab }) {
  const [isScroll, setIsScroll] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();
  const tabs = [
    Constants.TAB1_TEXT,
    Constants.TAB2_TEXT,
    Constants.TAB3_TEXT,
    Constants.TAB4_TEXT,
    Constants.TAB5_TEXT,
    Constants.TAB6_TEXT,
    Constants.TAB7_TEXT,
    Constants.TAB8_TEXT,
  ];

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    setActiveTab(selectedTab);
  }, [selectedTab]);

  return (
    <div
      className={`pt1 height-50 fixed-header ${
        isScroll || activeTab !== 0 ? "bg-white header-box-shadow" : ""
      } ${isScroll ? "posFix" : "posAbs"}`}
    >
      <div className="flx justify-between align-center mr4 ml4">
        <img
          onClick={() => {
            setSelectedTab(0);
            setActiveTab(0);
          }}
          className="cursor"
          src={isScroll || activeTab !== 0 ? CompanyLogo1 : CompanyLogo}
          width="150"
          height="40"
        />
        <div className="flx gap-30">
          {tabs.map((tab, idx) => (
            <div
              onClick={() => {
                setActiveTab(idx);
                setSelectedTab(idx);
              }}
              className={`tab ${
                activeTab === idx ? "tab-active-clr tab-active-bdr" : ""
              }
                ${
                  isScroll || activeTab !== 0
                    ? "tab-color-black"
                    : "tab-color-white"
                }`}
              key={idx}
            >
              {idx === 7 ? isAuthenticated && tab : tab}
            </div>
          ))}
        </div>
        {isAuthenticated ? (
          <div className="flx gap-20">
            <div
              className="flx flx-col align-center"
              onClick={() => {
                setActiveTab(tabs.length + 1);
                setSelectedTab(tabs.length + 1);
              }}
            >
              <img
                src={
                  activeTab === tabs.length + 1
                    ? BellSelected
                    : !isScroll && activeTab === 0
                    ? BellWhite
                    : Bell
                }
                width="22"
                height="25"
              />
              <span
                className={`font11 ${
                  activeTab === tabs.length + 1
                    ? "tab-active-clr"
                    : !isScroll && activeTab === 0
                    ? "white-clr"
                    : ""
                }`}
              >
                Notification
              </span>
            </div>
            <div
              className="flx flx-col align-center"
              onClick={() => {
                setActiveTab(tabs.length + 2);
                setSelectedTab(tabs.length + 2);
              }}
            >
              <img
                src={
                  activeTab === tabs.length + 2
                    ? DealSelected
                    : !isScroll && activeTab === 0
                    ? DealsWhite
                    : Deals
                }
                width="30"
                height="25"
              />
              <span
                className={`font11 ${
                  activeTab === tabs.length + 2
                    ? "tab-active-clr"
                    : !isScroll && activeTab === 0
                    ? "white-clr"
                    : ""
                }`}
              >
                Deals
              </span>
            </div>
            <div
              className="flx flx-col align-center"
              onClick={() => {
                setActiveTab(tabs.length + 3);
                setSelectedTab(tabs.length + 3);
              }}
            >
              <img
                src={
                  activeTab === tabs.length + 3
                    ? UserSelected
                    : !isScroll && activeTab === 0
                    ? UserWhite
                    : User
                }
                width="25"
                height="25"
              />
              <span
                className={`font11 ${
                  activeTab === tabs.length + 3
                    ? "tab-active-clr"
                    : !isScroll && activeTab === 0
                    ? "white-clr"
                    : ""
                }`}
              >
                Profile
              </span>
            </div>
            <div
              className="flx flx-col align-center"
              onClick={() => {
                localStorage.clear("isAuthenticated");
                navigate("/home")
                setActiveTab(0);
                setSelectedTab(0);
              }}
            >
              <LogoutOutlined
                className={`font25 ${
                  !isScroll && activeTab === 0 ? "white-clr" : "login-txt-clr"
                }`}
              />

              <span
                className={`font11 ${
                  !isScroll && activeTab === 0 ? "white-clr" : ""
                }`}
              >
                Log out
              </span>
            </div>
          </div>
        ) : (
          <div
            className="btn-container cursor"
            onClick={() => {
              navigate("/login");
            }}
          >
            <div className="align-center tac login-text">
              {Constants.LOGIN_TEXT}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
