import React, { Fragment, useState } from "react";
import "./orderSearchComponent.css";

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
      className="row"
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
        className="col-lg-7 searchOrderContainer  h-100 py-2 "
        style={{ marginLeft: -10, marginRight: 0 }}
      >
          <div className="row  ">
            <div className=" col-lg-6 d-flex  px-1 align-items-center  ">
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
              className=" col-lg-6 d-flex   "
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
              className="col-lg-6 col-md-12 d-flex align-items-center h-100"
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
                <select
                  id={"selectedOfficeOrderList"}
                  value={office}
                  name="office"
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
                {/* <Selection
                  options={options}
                  selected={0}
                  divComponentId={"divComponentId"}
                  id={"selectOrderId"}
                  // customStyleSelect=" w-100 d-flex justify-content-center"
                ></Selection> */}
              </div>

              <button
                className="button-order-search border"
                type="input"
                onClick={() => {
                  console.log(projectTitle, orderNo, customerName, office);
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
