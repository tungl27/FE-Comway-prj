import React, { Fragment, useState } from "react";
import "./styles.css";
import Input from "../../Input/Input";
import Selection from "../../Selection/Selection";

export default function OrderSearchComponent() {
  const options = [
    { label: "社員", value: 1 },
    { label: "社員1", value: 2 },
    { label: "社員2", value: 3 },
    { label: "社員3", value: 4 },
  ];
  const [name, setName] = useState("山田");

  const [searchFillter, setSearchFiller] = useState({
    orderNo: "",
    customerName: "",
    projectTitle: "",
    office: "",
  });

  const { orderNo, customerName, projectTitle, office } = searchFillter;

  const updateFilter = (data) =>
    setSearchFiller((prevData) => ({ ...prevData, ...data }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFiller((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="row  "
      style={{ fontSize: 14, marginLeft: 0, marginRight: 0 }}
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
        <button className="regisBtn  " style={{ marginTop: 10 }}>
          新規登録
        </button>
      </div>

      <div
        className="col-lg-7 searchOrderContainer  "
        style={{ marginLeft: -10, marginRight: 0 }}
      >
        <form className="h-100 py-1">
          <div className="row h-50 ">
            <div
              className=" col-lg-6 d-flex  px-1 "
              style={{
                alignItems: "center",
              }}
            >
              <label style={{ width: "33%" }}>オーダーNo.</label>
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
              <label style={{ fontSize: 14, width: "20%" }}>顧客名</label>
              <input
                type="text"
                placeholder=""
                name="customerName"
                value={customerName}
                onChange={handleChange}
                className="inputText"
                style={{ width: "80%" }}
              />
            </div>
          </div>

          <div className="row h-50   ">
            <div
              className=" col-lg-6 d-flex px-1 h-100"
              style={{
                alignItems: "center",
              }}
            >
              <label style={{ width: "33%" }}>案件名</label>
              <input
                type="text"
                name="projectTitle"
                value={projectTitle}
                onChange={handleChange}
                placeholder=""
                className="inputText"
                title=""
                style={{ width: "67%" }}
              />
            </div>

            <div
              className="col-lg-6 d-flex align-items-center h-100"
              style={{
                paddingRight: 0,
                paddingLeft: 5,
              }}
            >
              <label style={{ fontSize: 14, width: "15%" }}>職制</label>
              <div
                style={{
                  width: "65%",
                }}
              >
                <Selection
                  id="selectOrderSearchId"
                  options={options}
                  selected={0}
                  customStyleSelect=" w-100 d-flex justify-content-center"
                ></Selection>
              </div>

              <button
                className="button-order-search"
                onClick={() => {
                  console.log(projectTitle, orderNo, customerName);
                }}
              >
                検索
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-lg-2  d-flex justify-content-end align-items-end  ">
        <span style={{ fontSize: 15 }}>検索件数：27件</span>
      </div>
    </div>
  );
}
