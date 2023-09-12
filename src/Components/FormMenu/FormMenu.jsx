import { Fragment, useContext } from "react";
import "./form-menu.css";
import { useNavigate } from "react-router-dom";

export default function Formmenu() {
  const navigative = useNavigate();
  return (
    <Fragment>
      <div className="container">
        <div className="form-menu">
          <p className="form-title">メニュー画面</p>
          <div className="d-flex flex-column mb-3 mt-5 text-center">
            <button
              type="button"
              onClick={() => {
                navigative("/staff/list");
              }}
              className="btn btn-primary button mt-3"
            >
              スタッフ管理
            </button>

            <button
              type="button"
              onClick={() => {
                navigative("/order/list");
              }}
              className="btn btn-primary button mt-3"
            >
              オーダー管理
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
