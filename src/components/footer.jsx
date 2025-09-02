import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Avatar, Input } from "antd";
import React from "react";
import Constants from "../constants/constants";

function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div onClick={backToTop}>
        <div className="tac back-top-bg ptb1 white-clr font18 cursor">
          {Constants.BACK_TO_TOP_TEXT}
        </div>
      </div>
      <div className="footer-bg">
        <div className="flx justify-around">
          <div className="flx flx-col ptb3 plr6 white-clr">
            <div className="flx gap-100">
              <div>
                <div className="fntBold font18 pb1">
                  {Constants.CONTACT_INFO_TEXT}
                </div>
                <div className="pb1">{Constants.CONTACT_US_TEXT}</div>
                <div className="pb1">(091) 81210 - 28970</div>
                <div>(091) 96525 - 97911</div>
              </div>
              <div>
                <div className="fntBold font18 pb1">
                  {Constants.REGISTERED_OFFICE_TEXT}
                </div>
                <div style={{ width: "350px" }}>
                  Acintyo Local Oriented Customer Applications Pvt. Ltd, B-4,
                  IDA Gandhi Nagar, Kukatpally, Hyderabad - 500037
                </div>
              </div>
            </div>
            <div className="flx pt4 gap-35">
              <div>
                <div className="fntBold font18 pb1">
                  {Constants.SOCIAL_MEDIA_TEXT}
                </div>
                <div className="flx gap-20">
                  <Avatar
                    size="large"
                    style={{ background: "#4A9CB9" }}
                    icon={<InstagramOutlined size={30} />}
                  />
                  <Avatar
                    size="large"
                    style={{ background: "#4A9CB9" }}
                    icon={<FacebookOutlined size={30} />}
                  />
                  <Avatar
                    size="large"
                    style={{ background: "#4A9CB9" }}
                    icon={<TwitterOutlined size={30} />}
                  />
                  <Avatar
                    size="large"
                    style={{ background: "#4A9CB9" }}
                    icon={<LinkedinOutlined size={30} />}
                  />
                </div>
              </div>
              <div className="flx align-flexEnd gap-30">
                <img
                  src="/assets/images/playstore.png"
                  width="150"
                  height="40"
                />
                <img
                  src="/assets/images/appstore.png"
                  width="150"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div className="bordLWhite mtb3"></div>
          <div className="ptb3 plr6 white-clr">
            <div className="fntBold font18 pb1">Get in touch</div>
            <Input className="mb2" placeholder="Name" />
            <Input className="mb2" placeholder="Enter your e-mail" />
            <div className="ptb1 mb2 plr1-5 send-msg-btn fntBold width-fit">
              <div>{Constants.SEND_MESSAGE_TEXT}</div>
            </div>
            <div>About us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
