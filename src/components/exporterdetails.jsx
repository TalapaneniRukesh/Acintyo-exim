import React from "react";
import { Carousel, Input } from "antd";
import ExporterDetailsImage from "/assets/images/exporters/exporter-details.png";
import Constants from "../constants/constants";
import CardComponent from "./common/card";
import ExporterDetails from "./jsonfiles/exporterdetails.json";
import Awardssection from "./awardssection";

const { Search } = Input;

function Exporterdetails({ setSelectedTab }) {
  return (
    <div>
      <div>
        <Carousel dots={false}>
          <div className="details-background-linear">
            <div>
              <img src={ExporterDetailsImage} height="300" width="100%" />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flx">
        <div className="tac ptb4 details-img-container">
          <div>
            <img
              src="/assets/images/exporters/image1.png"
              width="250"
              height="80"
            />
          </div>
        </div>
        <div className="company-name poppins-family">
          <div className="bordbtmWhite1 fntBold pb0-5 font18">
            JAY KESHAV EXPORTS PRIVATE LIMITED
          </div>
          <div className="font12 pt0-5">
            NO.15, KIADB INDUSTRIAL AREA 2ND PHASE PIN-560074
          </div>
        </div>
        <div className="flx posAbs exporter-btns gap-10">
          <Search placeholder={Constants.SEND_ENQUIRY_TEXT} />
          <div className="send-btn white-clr ptb0-5 plr1-5 font13">
            {Constants.SEND_TEXT}
          </div>
          <div className="call-me-btn white-clr ptb0-5 plr1-5 font13">
            {Constants.CALL_ME_BACK_TEXT}
          </div>
          <div className="like-btn white-clr ptb0-5 plr1-5 font13">
            {Constants.LIKE_TEXT}
          </div>
        </div>
      </div>
      <div className="pt3">
        <CardComponent
          setSelectedTab={setSelectedTab}
          exporters={true}
          Products={ExporterDetails}
        />
      </div>
      <Awardssection />
    </div>
  );
}

export default Exporterdetails;
