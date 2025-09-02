import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  CheckCircleOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal, Select, Upload } from "antd";
import OtpScreen from "./otpscreen";
import Constants from "../../constants/constants";

function RegisterScreen({ setActive }) {
  const [status, setStatus] = useState({
    personalDetails: true,
    businessDetails: false,
    certification: false,
    active: "personal",
  });
  const [showOtp, setShowOtp] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const save = (text) => {
    let newStatus = status.active;
    let isBusiness = status.businessDetails;
    let iscertificate = status.certification;
    if (text === "verified") {
      setShowOtp(false);
      newStatus = "business";
      isBusiness = true;
    } else {
      if (status.active === "personal") {
        setShowOtp(true);
      } else if (status.active === "business") {
        newStatus = "certificate";
        iscertificate = true;
      } else {
        setShowModal(true);
      }
    }
    setStatus({
      ...status,
      businessDetails: isBusiness,
      certification: iscertificate,
      active: newStatus,
    });
  };

  return (
    <>
      {showOtp ? (
        <div className="login-card-shadow width-350 bg-white plr4 pt5 login-txt-clr pb2">
          <OtpScreen setValue={setShowOtp} register={true} />
          <div className="tac pt3 pb2">
            <span
              onClick={() => save("verified")}
              className="cursor ptb0-8 plr7 login-txt-clr-bg white-clr fntBold login-continue-btn-shadow bdr-radius-10"
            >
              {Constants.CONTINUE_TEXT}
            </span>
          </div>
          <div className="tac">
            <div className="font13">
              By continuing, you agree to Acintyo EXIM's
            </div>
            <div className="font13">
              <span className="link-highlighter">Privacy </span>&
              <span className="link-highlighter"> Terms of use</span>
            </div>
          </div>
        </div>
      ) : (
        !showModal && (
          <div className="login-card-shadow bg-white posRel pt2-5 pb4">
            <span className="posAbs pl2">
              <ArrowLeftOutlined
                className="cursor login-txt-clr font18"
                onClick={() => {
                  setActive("register");
                }}
              />
            </span>
            <span className="flx steps flx-auto justify-center">
              <div className="step completed">
                <div className="step-icon-wrap">
                  <div className="step-icon">1</div>
                </div>
                <span className="txt-clr">Personal Details</span>
              </div>
              <div className={`step ${status.businessDetails && "completed"}`}>
                <div className="step-icon-wrap">
                  <div className="step-icon">2</div>
                </div>
                <span className="txt-clr">Business Details</span>
              </div>
              <div className={`step ${status.certification && "completed"}`}>
                <div className="step-icon-wrap">
                  <div className="step-icon">3</div>
                </div>
                <span className="txt-clr">Certification</span>
              </div>
            </span>
            <div className="ptb3 plr150">
              <div className="active-deal fntBold pb1">
                {status.active === "personal"
                  ? "Personal Details"
                  : status.active === "business"
                  ? "Business Details"
                  : "Certification"}
              </div>
              <div className="flx flx-col gap-15">
                {status.active === "personal" ? (
                  <>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          Email <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter email" />
                      </div>
                      <div className="width-300">
                        <div>
                          Mobile number <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter Mobile number" />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          First Name <span className="red-clr">*</span>
                        </div>
                        <Input
                          size="large"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="width-300">
                        <div>
                          Last Name <span className="red-clr">*</span>
                        </div>
                        <Input
                          size="large"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          Business Address <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter your address" />
                      </div>
                      <div className="width-300">
                        <div>
                          City <span className="red-clr">*</span>
                        </div>
                        <Select
                          size="large"
                          style={{
                            width: "100%",
                          }}
                          options={[
                            {
                              value: "Hyderabad",
                              label: "Hyderabad",
                            },
                            {
                              value: "Bengaluru",
                              label: "Bengaluru",
                            },
                            {
                              value: "Chennai",
                              label: "Chennai",
                            },
                          ]}
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>Landmark</div>
                        <Input size="large" placeholder="Enter Landmark" />
                      </div>
                      <div className="width-300">
                        <div>
                          Country <span className="red-clr">*</span>
                        </div>
                        <Select
                          size="large"
                          style={{
                            width: "100%",
                          }}
                          options={[
                            {
                              value: "India",
                              label: "India",
                            },
                            {
                              value: "Dubai",
                              label: "Dubai",
                            },
                            {
                              value: "Canada",
                              label: "Canada",
                            },
                          ]}
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          State <span className="red-clr">*</span>
                        </div>
                        <Select
                          size="large"
                          style={{
                            width: "100%",
                          }}
                          options={[
                            {
                              value: "Telangana",
                              label: "Telangana",
                            },
                            {
                              value: "Tamilnadu",
                              label: "Tamilnadu",
                            },
                            {
                              value: "kerala",
                              label: "kerala",
                            },
                          ]}
                          placeholder="Select"
                        />
                      </div>
                      <div className="width-300">
                        <div>
                          Zipcode <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter Zip code" />
                      </div>
                    </div>
                  </>
                ) : status.active === "business" ? (
                  <>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          Firm <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter firm" />
                      </div>
                      <div className="width-300">
                        <div>
                          Registration number <span className="red-clr">*</span>
                        </div>
                        <Input
                          size="large"
                          placeholder="Enter Registration number"
                        />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          Bank <span className="red-clr">*</span>
                        </div>
                        <Select
                          size="large"
                          style={{
                            width: "100%",
                          }}
                          options={[
                            {
                              value: "SBI",
                              label: "SBI",
                            },
                            {
                              value: "Axis bank",
                              label: "Axis bank",
                            },
                            {
                              value: "Hdfc bank",
                              label: "Hdfc bank",
                            },
                          ]}
                          placeholder="Select"
                        />
                      </div>
                      <div className="width-300">
                        <div>
                          Bank account number <span className="red-clr">*</span>
                        </div>
                        <Input
                          size="large"
                          placeholder="Enter your bank account number"
                        />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          IFSC code <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter IFSC Code" />
                      </div>
                      <div className="width-300">
                        <div>
                          MICR Number * <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter MICR number" />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          PAN Number <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter PAN number" />
                      </div>
                      <div className="width-300">
                        <div>
                          TAN number <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter TAN number" />
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          GST Number <span className="red-clr">*</span>
                        </div>
                        <Input size="large" placeholder="Enter GST number" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>
                          IEC <span className="red-clr">*</span>
                        </div>
                        <div className="flx align-center gap-35">
                          <Input size="large" placeholder="Enter IEC number" />
                          <CheckCircleFilled className="font22 active-deal" />
                          <DeleteOutlined className="font22" />
                        </div>
                      </div>
                      <div className="width-300">
                        <div>
                          Export License <span className="red-clr">*</span>
                        </div>
                        <div className="flx align-center gap-10">
                          <Input
                            size="large"
                            placeholder="Enter  license number"
                          />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>EPC</div>
                        <div className="flx align-center gap-35">
                          <Input size="large" placeholder="Enter EPC number" />
                          <CheckCircleFilled className="font22 active-deal" />
                          <DeleteOutlined className="font22" />
                        </div>
                      </div>
                      <div className="width-300">
                        <div>Central Exchange</div>
                        <div className="flx align-center gap-10">
                          <Input size="large" placeholder="Enter CE" />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>ECGC</div>
                        <div className="flx align-center gap-10">
                          <Input size="large" placeholder="Enter ECGC number" />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                      <div className="width-300">
                        <div>DGFT</div>
                        <div className="flx align-center gap-10">
                          <Input size="large" placeholder="Enter DGFT number" />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>ICC</div>
                        <div className="flx align-center gap-10">
                          <Input
                            size="large"
                            placeholder="Upload ICC Certificate"
                          />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                      <div className="width-300">
                        <div>RCMC certificate</div>
                        <div className="flx align-center gap-10">
                          <Input size="large" placeholder="Enter RCMC number" />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                    <div className="flx gap-200">
                      <div className="width-300">
                        <div>BIN</div>
                        <div className="flx align-center gap-10">
                          <Input size="large" placeholder="Enter BIN number" />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                      <div className="width-300">
                        <div>Certificate of Incorporation</div>
                        <div className="flx align-center gap-10">
                          <Input size="large" placeholder="Enter CI number" />
                          <Upload>
                            <Button size="large" icon={<UploadOutlined />}>
                              Upload
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="tac pt1">
              <span
                onClick={save}
                className="new-deal-boxshadow btn-clr-bg white-clr bdr-radius-10 cursor fntBold ptb1 plr3"
              >
                Save and Proceed
              </span>
            </div>
          </div>
        )
      )}
      <Modal
        open={showModal}
        className="request-modal"
        centered
        closable={false}
        footer={null}
        width="1100px"
      >
        <div className="posRel">
          <img
            src="/assets/images/circles.png"
            className="posAbs"
            alt="flowers"
            width="1100"
            height="100%"
          />
          <img
            src="/assets/images/dots.png"
            className="pt9"
            alt="flowers"
            width="1100"
          />
          <div className="posAbs tac poppins-family complaint-content">
            <CheckCircleOutlined style={{ fontSize: "160px" }} />
            <div className="fntBold font22 ptb2">
              Your application is under process
            </div>
            <div className="font18">Your application number is 123456789</div>
            <div className="font18 pt5 pb1">
              You can check your application status by{" "}
              <span
                className="active-deal cursor"
                onClick={() => {
                  setActive("login");
                }}
              >
                Login
              </span>
            </div>
            <div className="fntBold font22">
              Your login Credentials have been sent to your mail ID
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default RegisterScreen;
