import { Fragment, useEffect } from "react";
import "./header.css";
import circle from "../../images/u5.svg";
import stick from "../../images/u6.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ account, isLoginPage = false }) {
  useEffect(() => {});

  const navigative = useNavigate();
  const logoutAction = () => {
    localStorage.removeItem("IDLoginUser");
    navigative("/login");
  };
  return (
    <Fragment>
      <div className="header">
        <p className="titleHeader">オーダー実績管理システム</p>

        <div
          className={`logoutButton`}
          style={{ display: !isLoginPage ? "flex" : "none" }}
          onClick={logoutAction}
        >
          <div className="iconLogout">
            <img className="circle" src={circle} alt="" srcSet="" />
            <img className="stick" src={stick} alt="" srcSet="" />
          </div>

          <div className="logoutLable">ログアウト</div>
        </div>
      </div>
    </Fragment>
  );
}
// import { Fragment } from "react";
// import './header.css'
// import circle from '../../images/u5.svg'
// import stick from '../../images/u6.svg'

// export default function Header({ account }) {
//     return (
//         <Fragment>
//             <div className="header">
//                 <p className="title">
//                     オーダー実績管理システム
//                 </p>
//                 <img className="circle" src={circle} alt="" srcSet="" />
//                 <img className="stick" src={stick} alt="" srcSet="" />
//                 <div className="logout">ログアウト</div>
//             </div>
//         </Fragment>
//     )}
