import React, { Fragment, useState } from "react";
import "./orderSearchComponent.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { SEARCH_ORDER_LIST } from "../../../theme/configApi";

export default function OrderSearchComponent({
  searchFillter,
  setSearchFiller,
  fetchData,
  setActivePage

}) {
  const options = [
    { label: "", value: "" },
    { label: "実行中", value: 0 },
    { label: "非活性", value: 1 },
    { label: "保留", value: 2 },
    { label: "完了", value: 3 },
    { label: "キャンセル", value: 4 },
  ];

  const [stateSearch, setStateSearch] = useState({
    orderNo: "",
    clientName: "",
    projectName: "",
    status: "",
  });
  const { orderNo, clientName, projectName, status } = stateSearch;

  // const updateFilter = (data) =>
  // setStateSearch((prevData) => ({ ...prevData, ...data }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateSearch((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const actionSearch = () => {
    setSearchFiller(stateSearch);
    fetchData(stateSearch);
    setActivePage(1)
  };

  return (
    <div
      className="row"
      style={{ fontSize: 13, marginLeft: 0, marginRight: 0 }}
    >
      <div className="col-lg-3 col-no-padding ">
        <h4
          style={{
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          オーダー一覧画面
        </h4>
        <Link to={"/order/new"}>
          <button className="regisBtn" style={{ marginTop: 10 }}>
            新規登録
          </button>
        </Link>
      </div>

      <div
        className="col-lg-7 searchOrderContainer  h-100 py-2 "
        style={{ marginLeft: -10, marginRight: 0 }}
      >
        <div className="row  ">
          <div className=" col-lg-6 d-flex  px-1 align-items-center  ">
            <label style={{ width: "33%", fontSize: 13 }}>オーダーNo.</label>
            <input
              value={orderNo}
              name="orderNo"
              onChange={handleChange}
              type="text"
              placeholder=""
              title=""
              className="inputText"
              style={{ width: "67%" }}
            />
          </div>
          <div
            className=" col-lg-6 d-flex align-items-center   "
            style={{
              paddingRight: 20,
              paddingLeft: 5,
            }}
          >
            <label className=" label_custom_right">顧客名</label>
            <input
              type="text"
              placeholder=""
              name="clientName"
              value={clientName}
              onChange={handleChange}
              className="inputText"
              style={{ width: "70%" }}
            />
          </div>
        </div>

        <div className="row mt-2  ">
          <div
            className=" col-lg-6 d-flex px-1 h-100"
            style={{
              alignItems: "center",
            }}
          >
            <label style={{ width: "33%" }}>案件名</label>
            <input
              type="text"
              name="projectName"
              value={projectName}
              onChange={handleChange}
              placeholder=""
              className="inputText"
              title=""
              style={{ width: "67%" }}
            />
          </div>

          <div
            className="col-lg-6 col-md-12 d-flex align-items-center h-100"
            style={{
              marginLeft: -3,
              padding: 0,
            }}
          >
            <label style={{ fontSize: 12, width: "25%" }}>ステータス</label>
            <div
              style={{
                width: "50%",
              }}
            >
              <select
                id={"selectedOfficeOrderList"}
                value={status}
                name="status"
                onChange={handleChange}
              >
                {options.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>

            <button
              style={{
                width: "25%",
              }}
              className="button-order-search border"
              type="input"
              onClick={() => {
                actionSearch();
              }}
            >
              検索
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-2  d-flex justify-content-end align-items-end  ">
        <span style={{ fontSize: 15 }}>検索件数：27件</span>
      </div>
    </div>
  );
}
