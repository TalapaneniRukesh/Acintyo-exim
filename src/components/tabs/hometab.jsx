import React, { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "antd";
import BuyerSeller from "../buyerseller";
import Exporterdetails from "../exporterdetails";
import Subscriptionstab from "../subscriptionstab";
import Listofexporters from "../listofexporters";

function Hometab({ tab, setSelectedTab }) {
  let images = [
    "/assets/images/carousel1.jpg",
    "/assets/images/carousel2.jpg",
    "/assets/images/carousel3.jpg",
  ];
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <Exporterdetails setSelectedTab={setSelectedTab} />
      ) : (
        <div>
          <div className="posRel">
            <div>
              <Carousel
                autoplay
                pauseOnHover={false}
                pauseOnFocus={false}
                dots={false}
              >
                {images.map((img, idx) => (
                  <div className="background-linear">
                    <div>
                      <img key={idx} src={img} className="vh" width="100%" />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="posAbs content-container">
              <div className="img-text">Connecting traders worldwide.</div>
              <div className="bordWhite mtb3"></div>
              <span className="img-btn ptb1 plr3">
                <span>know more</span>
              </span>
            </div>
          </div>
          <BuyerSeller />
          <Listofexporters setSelectedTab={setSelectedTab} setShow={setShow} />
          <Subscriptionstab />
        </div>
      )}
    </div>
  );
}

export default Hometab;
