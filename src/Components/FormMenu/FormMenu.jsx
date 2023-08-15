import { Fragment, useContext } from "react";
import "./form-menu.css";
import { Link } from "react-router-dom";
import {
  BreadcrumbsContext,
  SetBreadcrumbsContext,
} from "../../State/BreadcrumbContext";

export default function Formmenu() {
  const SetBreadcrumbs = useContext(SetBreadcrumbsContext);
  const BreadCrumbs = useContext(BreadcrumbsContext);
  const moveToStaffList = () => {
    BreadCrumbs.push({
      title: "スタッフ一覧",
      url: "/staff/list",
    });
    SetBreadcrumbs(BreadCrumbs);
  };
  const moveToOrderList = () => {
    BreadCrumbs.push({
      title: "オーダー一覧",
      url: "/order/list",
    });
    SetBreadcrumbs(BreadCrumbs);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="form-menu">
          <p className="form-title">メニュー画面</p>
          <div className="d-flex flex-column mb-3 mt-5 text-center">
            <Link to={"/staff/list"}>
              <button
                type="button"
                className="btn btn-primary button mt-3"
                onClick={() => moveToStaffList()}
              >
                スタッフ管理
              </button>
            </Link>
            <Link to={"/order/list"}>
              <button
                type="button"
                className="btn btn-primary button mt-3"
                onClick={() => moveToOrderList()}
              >
                オーダー管理
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
