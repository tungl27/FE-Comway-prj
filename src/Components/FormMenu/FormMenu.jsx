import { Fragment } from "react";
import "./form-menu.css";
import { Link } from "react-router-dom";

export default function Formmenu() {
  return (
    <Fragment>
      <div className="container">
        <div className="form-menu">
          <p className="form-title">メニュー画面</p>
          <div className="d-flex flex-column mb-3 mt-5 text-center">
            <Link to={"/staff/list"}>
              <button type="button" className="btn btn-primary button mt-3">
                スタッフ管理
              </button>
            </Link>
            <Link to={"/order/list"}>
              <button type="button" className="btn btn-primary button mt-3">
                オーダー管理
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
