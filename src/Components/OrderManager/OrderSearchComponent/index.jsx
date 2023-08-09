import React, { Fragment, useState } from "react";
import "./OrderSearchComponent.css";
import Input from "../../Input/Input";
import Selection from "../../Selection/Selection";

export default function OrderSearchComponent() {
  const options = [{ label: "社員", value: 1 }];
  const [name, setName] = useState("山田");

  return (
    <Fragment>
      <div>
        <div
          className="row "
          style={{ fontSize: 14, marginLeft: 0, marginRight: 0 }}
        >
          <div className="col-lg-3 col-no-padding fontMain">
            <h4
              style={{
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              オーダー一覧画面
            </h4>
            <button className="regisBtn border fontMain">新規登録</button>
          </div>

          <div className="col-lg-7 border    ">
            <form className="h-100 w-100">
              <div className="row  h-50  ">
                <div
                  className=" col-lg-6 d-flex border px-1    "
                  style={{
                    alignItems: "center",
                  }}
                >
                  <label style={{ width: "33%" }}>オーダーNo.</label>
                  <input
                    type="text"
                    placeholder=""
                    title=""
                    style={{ width: "67%" }}
                  />
                </div>
                <div
                  className=" col-lg-6 d-flex border px-1 "
                  style={{
                    alignItems: "center",
                  }}
                >
                  <label style={{ fontSize: 14, width: "20%" }}>顧客名</label>
                  <input
                    type="text"
                    placeholder=""
                    title=""
                    style={{ width: "80%" }}
                  />
                </div>
              </div>

              <div className="row  h-50  ">
                <div
                  className=" col-lg-6 d-flex border px-1    "
                  style={{
                    alignItems: "center",
                  }}
                >
                  <label style={{ width: "33%" }}>案件名</label>
                  <input
                    type="text"
                    placeholder=""
                    title=""
                    style={{ width: "67%" }}
                  />
                </div>
                <div
                  className=" col-lg-6 d-flex border px-1 "
                  style={{
                    alignItems: "center",
                  }}
                >
                  {/* <label style={{ fontSize: 14, width: "20%" }}>職制</label> */}
                  {/* <input
                    type="text"
                    placeholder=""
                    title=""
                    style={{ width: "60%" }}
                  /> */}
                  <Selection 
                    title={"職制"}
                    options={options}
                    required={true}
                    selected={0}
                    customSelectStyle="wicth-select"
                  ></Selection>

                  <button style={{ width: "20%" }}>asda</button>
                </div>
              </div>
            </form>
          </div>

          <div
            className="col-lg-2  d-flex justify-content-end align-items-end   "
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <span style={{ fontSize: 15 }}>検索件数：27件</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
