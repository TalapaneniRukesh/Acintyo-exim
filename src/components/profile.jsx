import React, { useRef } from "react";
import { Rate, Row } from "antd";
import Awardssection from "./awardssection";

function ProfileTab() {
  const ref = useRef();
  return (
    <div className="p30">
      <div className="flx justify-center gap-50">
        <div className="bg-white box-shadow bdr-radius-5 p40">
          <Row className="poppins-family gap-20">
            <div className="posRel">
              <img
                src="/assets/images/profile.png"
                alt="profile"
                height="200"
              />
              <div
                className="posAbs top-5 right10"
                onClick={() => {
                  ref?.current?.click();
                }}
              >
                <img src="/assets/images/edit.png" alt="edit" height="15" />
              </div>
              <input type="file" style={{ display: "none" }} ref={ref} />
            </div>
            <div>
              <div className="flx gap-15 align-baseline">
                <div>
                  <div className="font22 fntBold">Jay Keshav</div>
                  <div className="exports-pvt-txt">Exports Pvt.limited</div>
                </div>
                <div>
                  <img
                    src="/assets/images/map-indicator.png"
                    alt="location"
                    height="15"
                  />
                  <span className="location-txt pl1">Hyderabad</span>
                </div>
              </div>
              <div className="pt3">
                <div className="rating-txt font16">Ratings</div>
                <div>
                  <span className="font22 fntBold pr1">4.0</span>
                  <Rate
                    className="star-color"
                    allowHalf
                    defaultValue={4}
                    disabled
                  />
                </div>
              </div>
            </div>
          </Row>
          <div className="p1">
            <div className="profile-bdr-btm ptb2">
              <div className="pb1">
                <span>
                  <img
                    src="/assets/images/contact.png"
                    alt="contact"
                    height="8"
                  />
                </span>
                <span className="plr1 fntBold contact-profile-text">
                  CONTACT
                </span>
                <span>
                  <img
                    src="/assets/images/edit-colored.png"
                    alt="edit"
                    height="15"
                  />
                </span>
              </div>
              <table className="font14">
                <tbody>
                  <tr>
                    <td className="fntBold zircon-blue pb0-5">
                      Mobile Number:
                    </td>
                    <td className="pl6 txt-clr pb0-5">9876543233</td>
                  </tr>
                  <tr>
                    <td className="fntBold zircon-blue">Email:</td>
                    <td className="pl6 txt-clr">mahesh@4gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="ptb1">
                <span>
                  <img
                    src="/assets/images/profile-icon.png"
                    alt="profile"
                    height="15"
                  />
                </span>
                <span className="plr1 fntBold contact-profile-text">
                  PROFILE
                </span>
                <span>
                  <img
                    src="/assets/images/edit-colored.png"
                    alt="edit"
                    height="15"
                  />
                </span>
              </div>
              <table className="font14">
                <tbody>
                  <tr>
                    <td className="fntBold zircon-blue pb0-5">Address:</td>
                    <td className="pl3 txt-clr pb0-5">
                      1-83 madhapur, Lingal, Telangana 509401
                    </td>
                  </tr>
                  <tr>
                    <td className="fntBold zircon-blue pb0-5">
                      Currency type:
                    </td>
                    <td className="pl3 txt-clr pb0-5">Rupee</td>
                  </tr>
                  <tr>
                    <td className="fntBold zircon-blue pb0-5">Country code:</td>
                    <td className="pl3 txt-clr pb0-5">+91</td>
                  </tr>
                  <tr>
                    <td className="fntBold zircon-blue pb0-5">
                      Organisation name:
                    </td>
                    <td className="pl3 txt-clr pb0-5">Kisan FPO</td>
                  </tr>
                  <tr>
                    <td className="fntBold zircon-blue">Language:</td>
                    <td className="pl3 txt-clr">English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white box-shadow bdr-radius-5 p40">
          <div className="profile-bdr-btm pb2">
            <img
              src="/assets/images/revenue-details.png"
              alt="revenue-details"
              height="200"
            />
          </div>
          <div className="pt5">
            <Awardssection tab={11} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
