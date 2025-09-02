import React, { useState } from "react";
import { Input, Modal } from "antd";
import Constants from "../constants/constants";
import ComplaintsList from "./jsonfiles/complaints.json";

const { TextArea } = Input;

function Complaints() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="exporters-bg">
      <div className="complaint-header tac fntBold ptb1">
        {Constants.COMPLAINT_HEADER_TEXT}
      </div>
      <div className="p30">
        <div className="flx justify-center gap-30 pb2 complaint-section-divider">
          <img
            src="/assets/images/complaints.png"
            alt="Complaint icon"
            height="400"
          />
          <div className="complaint-container ptb5 plr3 align-self-center">
            <div>
              <span className="font14">
                {" "}
                Please Provide the required information our excutive will assist
                you shortly{" "}
              </span>
              <TextArea
                placeholder="Type Here"
                autoSize={{ minRows: 3, maxRows: 3 }}
                className="mt0-5"
              />
            </div>
            <div className="flx justify-between ptb2">
              <div className="width-250">
                <span className="font14">E-mail</span>
                <Input placeholder="Email Address" />
              </div>
              <div className="width-250">
                <span className="font14">Phone number (optional)</span>
                <Input prefix="+91" />
              </div>
            </div>
            <div className="tac mt1">
              <span
                className="tac white-clr btn-clr-bg ptb0-8 plr2-5 bdr-radius-5 font14 cursor"
                onClick={() => setVisible(true)}
              >
                {Constants.REQUEST_CALL_TEXT}
              </span>
            </div>
          </div>
        </div>
        <div className="ptb1-5 plr2">
          <div>{Constants.ACTIVE_COMPLAINTS_TEXT}</div>
          {ComplaintsList.map((complaint, idx) => (
            <div
              className="mt1-5 flx justify-between gap-30 font14 complaint-list-container ptb1 plr2-5 align-center"
              key={idx}
            >
              <div>{complaint.type}</div>
              <div>{complaint.id}</div>
              <div>Date- {complaint.date}</div>
              {/* <div className="flx">
                <div className="tac">
                  <Badge count={1} color="#18374E" />
                  <span className="text-darkGray">sent</span>
                </div>
                <div><Progress percent={100} style={{width: "100px"}} strokeColor="#18374E" strokeLinecap="butt" trailColor="#D7D6D6" showInfo={false} /></div>
                <div className="tac">
                  <Badge count={2} color="#18374E" />
                  <div className="text-darkGray">Review</div>
                </div>
                <div><Progress percent={100} style={{width: "100px"}} strokeColor="#18374E" strokeLinecap="butt" trailColor="#D7D6D6" showInfo={false} /></div>
                <div className="tac">
                  <Badge count={3} color="#18374E" />
                  <div className="text-darkGray">initiating</div>
                </div>
                <div><Progress percent={100} style={{width: "100px"}} strokeColor="#18374E" strokeLinecap="butt" trailColor="#D7D6D6" showInfo={false} /></div>
                <div className="tac">
                  <Badge count={4} color="#18374E" />
                  <div className="text-darkGray">Processing</div>
                </div>
                <div><Progress percent={100} style={{width: "100px"}} strokeColor="#18374E" strokeLinecap="butt" trailColor="#D7D6D6" showInfo={false} /></div>
                <div className="tac">
                  <Badge count={5} color="#18374E" />
                  <div className="text-darkGray">Received</div>
                </div>
              </div> */}
              <div className="flx steps flx-auto">
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon">1</div>
                  </div>
                  <span className="text-darkGray">sent</span>
                </div>
                <div
                  className={`step ${
                    ["Review", "initiating", "Processing", "Received"].includes(
                      complaint.status
                    ) && "completed"
                  }`}
                >
                  <div className="step-icon-wrap">
                    <div className="step-icon">2</div>
                  </div>
                  <span className="text-darkGray">Review</span>
                </div>
                <div
                  className={`step ${
                    ["initiating", "Processing", "Received"].includes(
                      complaint.status
                    ) && "completed"
                  }`}
                >
                  <div className="step-icon-wrap">
                    <div className="step-icon">3</div>
                  </div>
                  <span className="text-darkGray">initiating</span>
                </div>
                <div
                  className={`step ${
                    ["Processing", "Received"].includes(complaint.status) &&
                    "completed"
                  }`}
                >
                  <div className="step-icon-wrap">
                    <div className="step-icon">4</div>
                  </div>
                  <span className="text-darkGray">Processing</span>
                </div>
                <div
                  className={`step ${
                    ["Received"].includes(complaint.status) && "completed"
                  }`}
                >
                  <div className="step-icon-wrap">
                    <div className="step-icon">5</div>
                  </div>
                  <span className="text-darkGray">Received</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={visible}
        className="request-modal"
        centered
        closable={false}
        footer={null}
        width="450px"
      >
        <div className="posRel">
          <img src="/assets/images/modal-bg.png" alt="flowers" width="450" />
          <div className="posAbs tac poppins-family complaint-content">
            <div className="fntBold font22">Complaint has been filed</div>
            <div>Our Executive will reach you shortly</div>
            <div
              className="btn-clr-bg bdr-radius-5 mtb3 mlr5 p1 cursor"
              onClick={() => setVisible(false)}
            >
              <span className="fntBold white-clr">{Constants.DONE_TEXT}</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Complaints;
