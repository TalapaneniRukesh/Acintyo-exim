import React from "react";
import AboutExporter from "./jsonfiles/aboutexporter.json";

function Awardssection({ tab }) {
  return (
    <div
      className={`pt2 poppins-family flx justify-center gap-50 align-center ${
        tab === 11 ? "txt-clr" : "company-details"
      }`}
    >
      {AboutExporter.map((details) => (
        <div
          className={`about-exporter-container ${
            tab === 11
              ? "awards-bdr about-exporter-container-profile"
              : "bordWhite"
          }`}
        >
          <div
            className={`badge-container posAbs ${
              tab === 11
                ? "capri-breeze-bg badge-container-profile"
                : "bg-white"
            }`}
          >
            <img
              src={tab === 11 ? details.img1 : details.img}
              width="40"
              height="40"
              className="posAbs badge-img"
            />
          </div>
          <div className="fntBold font22 tac pt7">{details.title}</div>
          <div className="ptb1 plr1-5 font15">
            {details.title === "AWARDS" ? (
              <ul>
                {details.desc.map((list) => (
                  <li>{list}</li>
                ))}
              </ul>
            ) : (
              <div className="pt1-5 plr2">{details.desc}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Awardssection;
