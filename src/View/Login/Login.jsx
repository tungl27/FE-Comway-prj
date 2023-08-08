import React from "react";
import "./login.css";
import Footer from "../../Components/Footer/Footer";

export default function Login() {
  return (
    <div className="container-fluid  ">
      <div className="loginConponent">
        <h3 style={{ fontWeight: "bold", paddingTop: 20, marginLeft: 30 }}>
          ログイン画面
        </h3>

        <form className="form mt-5">
          <div className="row justify-content-center">
            <div className="col-2  labelText">
              <label>ユーザーID</label>
            </div>

            <div className="col-4">
              <input
                className="inputText"
                // id="username"
                // name="username"
                type="text"
                // value=""
              />
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
              <button type="button " className="border buttonLogin">
                ログイン
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

{
  /* <div className="container border searchContainer">
        <form className="form">
          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label d-flex align-items-center"
              htmlFor="email"
            >
              氏名
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <span className="error">fsdfsdfdf sdfsdfsdfsdf</span>
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label d-flex align-items-center"
              htmlFor="email"
            >
              職制
            </label>
            <div className="col-sm-6">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>

            <div className="col-sm-3 ">
              <button className="searchBtn">検索</button>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <span className="error">fsdfsdfdf sdfsdfsdfsdf</span>
            </div>
          </div>
        </form>
      </div> */
}
