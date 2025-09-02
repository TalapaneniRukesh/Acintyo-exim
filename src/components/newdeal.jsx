import React, { useState } from "react";
import {
  Button,
  Collapse,
  DatePicker,
  Input,
  Select,
  Slider,
  Space,
  Switch,
} from "antd";
import NewDeals from "./jsonfiles/newdeal.json";
import Constants from "../constants/constants";

const { Panel } = Collapse;
const { TextArea } = Input;

function NewDeal() {
  const [activeKey, setActiveKey] = useState(1);
  return (
    <div className="flx justify-center gap-50 p30">
      <div className="new-deal-boxshadow width-800 bg-white p20">
        <div className="flx gap-30">
          <img src={NewDeals.img} alt={NewDeals.product} height="130" />
          <div className="pt2 txt-clr">
            <div className="fntBold font18 pr6 pb0-5 new-deal-bdr-btm">
              {NewDeals.product}
            </div>
            <div className="font15 pt0-5">
              <span>Qty </span>
              <span>{NewDeals.qty}</span>
            </div>
          </div>
        </div>
        <div className="new-deal-items-bdr-btm txt-clr pt2 pb1">
          <div className="fntBold pb0-7">Estimated Price</div>
          <div className="font15">{NewDeals.price}</div>
        </div>
        <div className="new-deal-items-bdr-btm txt-clr pt1 pb1">
          <div className="fntBold pb0-7">About this deal</div>
          <div className="font15">{NewDeals.about}</div>
        </div>
        <div className="new-deal-items-bdr-btm txt-clr pt1 pb1">
          <div className="flx align-center gap-10 fntBold pb0-7">
            <img
              src="/assets/images/red-location.png"
              alt="location-icon"
              height="18"
            />
            <span>{NewDeals.country}</span>
          </div>
          <div className="font15">{NewDeals.address}</div>
        </div>
        <div className="new-deal-items-bdr-btm txt-clr pt1 pb1">
          <div className="fntBold pb0-7">Delivery Date</div>
          <div className="font15">{NewDeals.date}</div>
        </div>
        <div className="txt-clr pt1 pb1">
          <div className="fntBold pb0-7">Shipping mode</div>
          <div className="font15">{NewDeals.mode}</div>
        </div>
      </div>
      <div
        style={{ width: "450px" }}
        className="bg-white height-100 box-shadow"
      >
        <Collapse
          className="poppins-family"
          bordered={false}
          accordion
          activeKey={[activeKey]}
        >
          <Panel showArrow={false} header="1. Choose Products" key="1">
            <div className="plr2">
              <div>
                <div>Product category</div>
                <div>
                  <Select
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <div>
                <div>Quantity</div>
                <Space.Compact
                  style={{
                    width: "100%",
                  }}
                >
                  <Button className="txt-clr-bg white-clr poppins-family width80">
                    ton
                  </Button>
                  <Input className="newdeal-input" defaultValue="00" />
                </Space.Compact>
              </div>
              <div>
                <div>Estimated Price per unit</div>
                <Space.Compact
                  style={{
                    width: "100%",
                  }}
                >
                  <Button className="txt-clr-bg white-clr poppins-family width80">
                    $
                  </Button>
                  <Input className="newdeal-input" defaultValue="0.00" />
                </Space.Compact>
              </div>
              <div>
                <Slider marks={{ 0: "min", 100: "max" }} />
              </div>
              <div className="tac pt2">
                <span
                  className="cursor ptb0-5 plr3 txt-clr-bg white-clr bdr-radius-5"
                  onClick={() => setActiveKey(2)}
                >
                  {Constants.CONTINUE_TEXT}
                </span>
              </div>
            </div>
          </Panel>
          <Panel showArrow={false} header="2. About this deal" key="2">
            <div className="plr2">
              <div>
                <div>
                  Write any Specification or instructions about this deal
                </div>
                <TextArea
                  style={{ height: 120, resize: "none" }}
                  placeholder="Type your Text here"
                />
              </div>
              <div className="tac pt2">
                <span
                  className="cursor ptb0-5 plr3 txt-clr-bg white-clr bdr-radius-5"
                  onClick={() => setActiveKey(3)}
                >
                  {Constants.CONTINUE_TEXT}
                </span>
              </div>
            </div>
          </Panel>
          <Panel showArrow={false} header="3. Delivery Location" key="3">
            <div className="plr2">
              <Input placeholder="H.no/flat .no" />
              <Input placeholder="Street" className="mt1" />
              <Input placeholder="City" className="mt1" />
              <Input placeholder="Zip" className="mt1" />
              <Input placeholder="State" className="mt1" />
              <Input placeholder="Country" className="mt1" />
              <div className="tac pt2">
                <span
                  className="cursor ptb0-5 plr3 txt-clr-bg white-clr bdr-radius-5"
                  onClick={() => setActiveKey(4)}
                >
                  {Constants.CONTINUE_TEXT}
                </span>
              </div>
            </div>
          </Panel>
          <Panel showArrow={false} header="4. Time" key="4">
            <div className="plr2">
              <div>
                <div>Expected Delivery</div>
                <DatePicker placeholder="DD/MM/YYYY" />
              </div>
              <div className="tac pt2">
                <span
                  className="cursor ptb0-5 plr3 txt-clr-bg white-clr bdr-radius-5"
                  onClick={() => setActiveKey(5)}
                >
                  {Constants.CONTINUE_TEXT}
                </span>
              </div>
            </div>
          </Panel>
          <Panel showArrow={false} header="5. Transport" key="5">
            <div className="plr2">
              <div>
                <div>
                  <span>Logistics </span>
                  <Switch />
                </div>
                <div className="ptb1-5">
                  <div>Shipping Mode</div>
                  <Input placeholder="Select mode of shipping" />
                </div>
                <div className="flx gap-15 align-center">
                  <span>Packaging Mode</span>
                  <span>
                    <Input
                      style={{ width: "130px" }}
                      placeholder="25 Kg Bag / 100"
                    />
                  </span>
                </div>
              </div>
              <div className="tac pt2">
                <span
                  className="cursor ptb0-5 plr3 txt-clr-bg white-clr bdr-radius-5"
                  onClick={() => setActiveKey(6)}
                >
                  {Constants.CONTINUE_TEXT}
                </span>
              </div>
            </div>
          </Panel>
          <Panel showArrow={false} header="6. Payment" key="6">
            <div className="plr2">
              <div>
                <div>Payment Mode</div>
                <div>
                  <Select
                    style={{
                      width: 120,
                    }}
                  />
                </div>
              </div>
              <div className="tac pt2">
                <span className="cursor ptb0-5 plr3 txt-clr-bg white-clr">
                  {Constants.SUBMIT_TEXT}
                </span>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default NewDeal;
