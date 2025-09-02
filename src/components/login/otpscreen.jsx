import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input, Statistic } from "antd";
import Constants from "../../constants/constants";

const { Countdown } = Statistic;

function OtpScreen(props) {
  const { setValue, register, setOtp, otp, otpError, reset } = props;
  const [showResend, setShowResend] = useState(false);

  const focusOnNextField = (event, id) => {
    if (
      event.key === Constants.BACKSPACE_TEXT ||
      event.key === Constants.ARROWLEFT_TEXT
    ) {
      if (id === 2) {
        id = 1;
      } else {
        id = id - 2;
      }
    }
    const fieldToFocus = document.querySelector(`input[id='${id}']`);
    if (fieldToFocus !== null) {
      fieldToFocus.focus();
    }
  };

  const otpValue = (value, id) => {
    setOtp({ ...otp, [id]: value });
  };

  return (
    <div>
      <div>
        <ArrowLeftOutlined
          className="cursor login-txt-clr font18"
          onClick={() => {
            setValue(false);
            setShowResend(false);
            reset();
          }}
        />
      </div>
      <div className="tac ptb3 font22 fntBold">
        {register ? "Verification" : "Login through OTP"}
      </div>
      {register ? (
        <>
          <div className="tac  shadowed-steel-clr">
            Enter OTP sent to
            <span className="fntBold shadowed-steel-clr">
              {" "}
              +91 0000000000 /
            </span>
          </div>
          <span
            style={{ paddingLeft: "32px" }}
            className="fntBold plr1-5 shadowed-steel-clr"
          >
            eximram@gmail.com
          </span>
        </>
      ) : (
        <>
          <div className="tac font12 shadowed-steel-clr">
            OTP has been sent to your registered mobile number
          </div>
          <span className="font12 fntBold plr1-5 shadowed-steel-clr">
            {" "}
            +91 0000000000
          </span>
        </>
      )}
      <div className="otp-container tac ptb2">
        <Input
          id="1"
          autoFocus
          size="large"
          maxLength="1"
          onKeyUp={(e) => focusOnNextField(e, 2)}
          onChange={(e) => otpValue(e.target.value, 1)}
        />
        <Input
          id="2"
          size="large"
          maxLength="1"
          onKeyUp={(e) => focusOnNextField(e, 3)}
          onChange={(e) => otpValue(e.target.value, 2)}
        />
        <Input
          id="3"
          size="large"
          maxLength="1"
          onKeyUp={(e) => focusOnNextField(e, 4)}
          onChange={(e) => otpValue(e.target.value, 3)}
        />
        <Input
          id="4"
          size="large"
          maxLength="1"
          onKeyUp={(e) => focusOnNextField(e, 5)}
          onChange={(e) => otpValue(e.target.value, 4)}
        />
        <Input
          id="5"
          size="large"
          maxLength="1"
          onKeyUp={(e) => focusOnNextField(e, 6)}
          onChange={(e) => otpValue(e.target.value, 5)}
        />
        <Input
          id="6"
          size="large"
          maxLength="1"
          onKeyUp={(e) => focusOnNextField(e, 7)}
          onChange={(e) => otpValue(e.target.value, 6)}
        />
      </div>
      {otpError && <div className="red-clr tac pb1">{otpError}</div>}
      <div className="tac flx justify-center align-baseline gap-10 font15 dhusar-grey-clr">
        Resend OTP in
        {showResend ? (
          <div
            className="active-deal fntBold cursor"
            onClick={() => setShowResend(false)}
          >
            Resend
          </div>
        ) : (
          <>
            <Countdown
              className="fntBold bauhaus-clr"
              value={Date.now() + 26 * 1000}
              format="ss"
              onFinish={() => setShowResend(true)}
            />
            <div className="fntBold bauhaus-clr">Sec</div>
          </>
        )}
      </div>
    </div>
  );
}

export default OtpScreen;
