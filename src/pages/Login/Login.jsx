import React, { Fragment, useState } from "react";
import "./login.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LOGIN } from "../../theme/configApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const navigative = useNavigate();

  const [stateLogin, setStateLogin] = useState({
    userID: "3",
    Password: "2222222@",
  });
  const [isShownPwd, setIsShownPwd] = useState(false);

  const { userID, Password } = stateLogin;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [errorMsg, setError] = useState({
    errorUserID: "",
    errorPassword: "",
  });

  function validateInput(data) {
    const { userID, Password } = data;
    const errors = {};
    if (userID.trim() === "") {
      errors.errorUserID = process.env.REACT_APP_LOGIN_REQUIRED_ID + "BEFORE";
    }

    if (Password.trim() === "") {
      errors.errorPassword =
        process.env.REACT_APP_LOGIN_REQUIRED_PASSWORD + "BEFORE";
    }

    return errors;
  }

  const signIn = async () => {
    let errorInput = validateInput(stateLogin);
    setError(errorInput);

    if (Object.keys(errorInput).length === 0) {
      // if( true) {
      try {
        const errors = {};

        const response = await axios.post(LOGIN, {
          userID,
          Password,
        });

        let resData = response.data;

        switch (resData) {
          case "UserID and PasswordLogin are required": {
            errors.errorUserID = process.env.REACT_APP_LOGIN_REQUIRED_ID;
            errors.Password = process.env.REACT_APP_LOGIN_REQUIRED_PASSWORD;
            break;
          }
          case "UserIDLogin is not exist": {
            errors.errorUserID = process.env.REACT_APP_LOGIN_ERROR_ID_NOT_EXIST;
            break;
          }
          case "PasswordLogin is required": {
            errors.Password = process.env.REACT_APP_LOGIN_REQUIRED_PASSWORD;
            break;
          }
          case "UserIDLogin is not exist": {
            errors.errorUserID = process.env.REACT_APP_LOGIN_ERROR_ID_NOT_EXIST;
            break;
          }
          case "UserID is not available": {
            errors.errorUserID =
              process.env.REACT_APP_LOGIN_ERROR_ID_NOT_AVAILABLE;
            break;
          }
          case "Password is incorrect": {
            errors.errorPassword = process.env.REACT_APP_LOGIN_ERROR_PW_WRONG;
            break;
          }
        }
        setError(errors);

        // Neu thanh khong co loi nao
        const mesengerSus = resData?.message || "";
        if (
          Object.keys(errors).length === 0 &&
          mesengerSus === "Successfully"
        ) {
          localStorage.setItem("IDLoginUser", resData?.IDLoginUser);
          localStorage.setItem("username", resData?.username || "");
          navigative("/home");
        }
      } catch (error) {}
    }
  };

  return (
    <Fragment>
      <Header isLoginPage={true}></Header>
      <div className="container-fluid   d-flex flex-column align-items-center ">
        <div className="loginConponent ">
          <h3 className="titleHeaderLogin">ログイン画面</h3>

          <div className="row  justify-content-center ">
            <div className=" col-10 col-lg-2  labelText">
              <label>ユーザーID</label>
            </div>

            <div className="col-10 col-lg-4">
              <input
                className="inputText"
                name="userID"
                type="text"
                value={userID}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row no-gutters justify-content-center">
            <div className="col-10 col-lg-2 "></div>

            <div className="col-10  col-lg-4 errorDiv">
              <span className="errorText">{errorMsg.errorUserID}</span>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div className="col-10 col-lg-2  labelText">
              <label>パスワード</label>
            </div>

            <div className="col-10  col-lg-4 " style={{ position: "relative" }}>
              <input
                style={{ paddingRight: 50 }}
                className="inputText "
                value={Password}
                onChange={handleChange}
                name="Password"
                type={isShownPwd ? "text" : "password"}
              />
              <div className="div-password-toggle ">
                <FontAwesomeIcon
                  className="password-eye"
                  onClick={() => setIsShownPwd(!isShownPwd)}
                  icon={isShownPwd ? faEye : faEyeSlash}
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10 col-lg-2"></div>

            <div className="col-10  col-lg-4 errorDiv">
              <span className="errorText"> {errorMsg.errorPassword}</span>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div className="col-10 col-lg-2"></div>

            <div className="col-10  col-lg-4">
              <button
                type="button"
                onClick={signIn}
                className="btn buttonLogin "
              >
                ログイン
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}
