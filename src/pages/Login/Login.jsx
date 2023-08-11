import React, { Fragment } from "react";
import "./login.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigative = useNavigate();
  const signIn = () => {
    navigative("/home");
  };
  return (
    <Fragment>
      <Header></Header>
      <div className="container-fluid  ">
        <div className="loginConponent">
          <h3 style={{ fontWeight: "bold", paddingTop: 20, marginLeft: 30 }}>
            ログイン画面
          </h3>

          <div className="row justify-content-center">
            <div className="col-2  labelText">
              <label>ユーザーID</label>
            </div>

            <div className="col-4">
              <input className="inputText" type="text" />
              <span className="error" style={{ display: "flex", marginTop: 8 }}>
                エラーメッセージXXXX
              </span>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div className="col-2  labelText">
              <label>パスワード</label>
            </div>

            <div className="col-4">
              <input
                className="inputText "
                // id="password"
                // name="password"
                type="text"
                // value=""
              />
              <span className="error">エラーメッセージXXXX</span>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div className="col-2"></div>

            <div className="col-4">
              <button
                type="button"
                onClick={signIn}
                className="border buttonLogin"
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
