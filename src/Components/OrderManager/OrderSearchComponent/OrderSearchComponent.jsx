import React, { useState } from "react";
import "./orderSearchComponent.css";
import { Link } from "react-router-dom";

export default function OrderSearchComponent({
  setSearchFiller,
  fetchData,
  setActivePage,
  totalRecords,
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
    setActivePage(1);
  };

  return (
    <div className="row component-order-search">
      <div id="left-component-order-search" className=" col-no-padding ">
        <span className="header-order">オーダー一覧画面</span>

        <Link to={"/order/new"}>
          <button className="regisBtn regis-btn-order">新規登録</button>
        </Link>

        <div style={{ fontSize: 14 }}>検索件数：{totalRecords || 0} 件</div>
      </div>

      <div
        id="center-component-order-search"
        className="searchOrderContainer  h-100 py-2 "
      >
        <div className="row  ">
          <div className="col-md-12  col-lg-6 d-flex   align-items-center  ">
            <label className="col-md-12 col-lg-4">オーダーNo.</label>
            <input
              value={orderNo}
              name="orderNo"
              onChange={handleChange}
              type="text"
              placeholder=""
              title=""
              className="inputText col-md-12 col-lg-8"
            />
          </div>
          <div className="col-md-12 col-lg-6 d-flex align-items-center   ">
            <label className="col-md-12 col-lg-4">顧客名</label>
            <input
              type="text"
              placeholder=""
              name="clientName"
              value={clientName}
              onChange={handleChange}
              className="inputText col-md-12 col-lg-8"
            />
          </div>
        </div>

        <div className="row mt-2  ">
          <div
            className=" col-lg-6 d-flex h-100"
            style={{
              alignItems: "center",
            }}
          >
            <label className="col-md-12 col-lg-4">案件名</label>
            <input
              type="text"
              name="projectName"
              value={projectName}
              onChange={handleChange}
              placeholder=""
              className="inputText col-md-12 col-lg-8"
              title=""
            />
          </div>

          <div className="col-lg-6 col-md-12 d-flex align-items-center h-100">
            <label className="col-md-12 col-lg-4">ステータス</label>
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
        </div>
      </div>

      <div
        id="right-component-order-search"
        className=" d-flex justify-content-center align-items-center border  "
      >
        <button
          style={{ backgroundColor: "#929292", color: "red" }}
          className="button-order-search border"
          type="input"
          onClick={() => {
            setStateSearch({
              orderNo: "",
              clientName: "",
              projectName: "",
              status: "",
            });
          }}
        >
          クリア
        </button>

        <button
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
  );
}
