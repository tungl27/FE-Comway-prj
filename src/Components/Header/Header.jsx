import { Fragment, useEffect } from "react";
import "./header.css";
import logoutImg from "../../images/logout.png";
import userImg from "../../images/user.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ account, isLoginPage = false }) {
  useEffect(() => {});

  const navigative = useNavigate();
  const logoutAction = () => {
    localStorage.removeItem("IDLoginUser");
    localStorage.removeItem("username");
    navigative("/login");
  };
  return (
    <Fragment>
      <div className="header">
        <p className="titleHeader">オーダー実績管理システム</p>

        <div
          className="div-container-button-header "
          style={{ display: !isLoginPage ? "flex" : "none" }}
        >
          <div className="div-button-header">
            <div
              className="button-label  "
              style={{ cursor: "pointer" }}
              onClick={logoutAction}
            >
              <img className="logoutImg" src={logoutImg} alt="" />
              <div className="">ログアウト</div>
            </div>

            <div className=" button-label">
              <img className="logoutImg" src={userImg} alt="" srcSet="" />
              <div className="label-name-user">
                sdfsdlfjsdjfdspfjpdfpodsjfposdjfpodsfjdspofsdojfsdfdsf
                {/* {localStorage.getItem("username") || ""} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
