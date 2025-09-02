import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import Constants from "../../constants/constants";
import RegisterCards from "../jsonfiles/registercards.json";
import OtpScreen from "./otpscreen";
import RegisterScreen from "./registerscreen";

const { Password } = Input;

function Login() {
  const [isForgotPass, setIsForgotPass] = useState(false);
  const [active, setActive] = useState("login");
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [errorText, setErrorText] = useState({
    username: "",
    password: "",
    otpVal: "",
  });
  const [otp, setOtp] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const navigate = useNavigate();

  const authentication = () => {
    let usernameError = "";
    let passwordError = "";
    let otpError = "";
    if (isForgotPass) {
      if (Object.values(otp).join("") === Constants.OTP_VALUE) {
        authenticatedTrue();
      } else {
        otpError = "Invalid OTP";
      }
    } else {
      if (
        !(loginDetails.username === Constants.TEST_USERNAME) ||
        !loginDetails.username
      ) {
        usernameError = "Invalid Username";
      }
      if (
        !(loginDetails.password === Constants.TEST_PASSWORD) ||
        !loginDetails.password
      ) {
        passwordError = "Invalid Password";
      }
      if (
        loginDetails.username === Constants.TEST_USERNAME &&
        loginDetails.password === Constants.TEST_PASSWORD
      ) {
        authenticatedTrue();
      }
    }
    setErrorText({
      ...errorText,
      username: usernameError,
      password: passwordError,
      otpVal: otpError,
    });
  };

  const authenticatedTrue = () => {
    localStorage.setItem("isAuthenticated", true);
    navigate("/home");
  };

  const forgotPassword = () => {
    let errorMsg = "";
    if (loginDetails.username) {
      if (loginDetails.username === Constants.TEST_USERNAME) {
        setIsForgotPass(true);
      } else {
        errorMsg = "Invalid Username";
      }
    } else {
      errorMsg = "Enter your Username for Otp";
    }
    setErrorText({ ...errorText, username: errorMsg });
  };

  const reset = () => {
    setLoginDetails({
      username: "",
      password: "",
    });
    setErrorText({
      username: "",
      password: "",
      otpVal: "",
    });
  };

  return (
    <div
      className={`login-bg ${
        active === "register" ? "register-bg-gradient" : "login-bg-gradient"
      } flx justify-center align-center`}
    >
      <img
        src="/assets/images/company-logo.png"
        width="150"
        height="40"
        alt="acintyo-logo"
        className="posAbs top-50 left50"
      />
      {active === "login" ? (
        <div className="login-card-shadow width-350 bg-white plr4 pt5 login-txt-clr pb2">
          {isForgotPass ? (
            <OtpScreen
              otp={otp}
              setOtp={setOtp}
              setValue={setIsForgotPass}
              otpError={errorText.otpVal}
              reset={reset}
            />
          ) : (
            <>
              <div className="tac txt-clr fntBold pb5">
                <div className="font30"> Welcome </div>
                <div>to Acintyo EXIM!</div>
                <div className="pt0-5">LOGIN & Start trading now!</div>
              </div>
              <div className="txt-clr font15">
                <div>{Constants.USERNAME_TEXT}</div>
                <Input
                  size="large"
                  placeholder={`${Constants.ENTER_TEXT} ${Constants.USERNAME_TEXT}`}
                  onChange={(e) =>
                    setLoginDetails({
                      ...loginDetails,
                      username: e.target.value,
                    })
                  }
                />
                {errorText.username && (
                  <span className="red-clr font12">{errorText.username}</span>
                )}
                <div className="pt1">{Constants.PASSWORD_TEXT}</div>
                <Password
                  size="large"
                  placeholder={`${Constants.ENTER_TEXT} ${Constants.PASSWORD_TEXT}`}
                  onChange={(e) =>
                    setLoginDetails({
                      ...loginDetails,
                      password: e.target.value,
                    })
                  }
                />
                {errorText.password && (
                  <span className="red-clr font12">{errorText.password}</span>
                )}
                <div className="tar pt0-5 font12">
                  <span className="cursor" onClick={forgotPassword}>
                    {" "}
                    {Constants.FORGOT_PASSWORD_TEXT}
                  </span>
                </div>
              </div>
            </>
          )}
          <div className="tac pt3 pb2">
            <span
              onClick={authentication}
              className="cursor ptb0-8 plr7 login-txt-clr-bg white-clr fntBold login-continue-btn-shadow bdr-radius-10"
            >
              {Constants.CONTINUE_TEXT}
            </span>
          </div>
          <div className="tac">
            {!isForgotPass && (
              <div className="font15 ptb2">
                New to Acintyo EXIM?
                <span
                  className="active-deal cursor fntBold"
                  onClick={() => setActive("register")}
                >
                  {" "}
                  {Constants.REGISTER_TEXT}
                </span>
              </div>
            )}
            <div className="font13">
              By continuing, you agree to Acintyo EXIM's
            </div>
            <div className="font13">
              <span className="link-highlighter">Privacy </span>&
              <span className="link-highlighter"> Terms of use</span>
            </div>
          </div>
        </div>
      ) : active === "register" ? (
        <div className="flx justify-center align-center">
          <div>
            <div className="tac white-clr fntBold font30">Register as</div>
            <div className="flx gap-40 register-cards-filter ptb5">
              {RegisterCards.map((cards, idx) => (
                <div
                  onClick={() => setActive("details")}
                  className="register-cards bg-white tac pt3 cursor flx flx-col justify-end"
                >
                  <img
                    src={cards.img}
                    alt={cards.title}
                    height="130"
                    width="100%"
                  />
                  <div className="card-title-radius font18 fntBold login-txt-clr-bg white-clr ptb1">
                    {cards.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="tac white-clr font22 pt2">
              Existing User?{" "}
              <span
                className="maya-blue-clr fntBld txt-dcr-underline cursor"
                onClick={() => {
                  reset();
                  setActive("login");
                }}
              >
                {" "}
                Login
              </span>
            </div>
          </div>
        </div>
      ) : (
        <RegisterScreen setActive={setActive} />
      )}
    </div>
  );
}

export default Login;
