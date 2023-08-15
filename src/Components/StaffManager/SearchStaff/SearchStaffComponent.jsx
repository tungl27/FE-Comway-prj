import React, { Fragment, useState } from "react";
import "./searchStaffComponent.css";
import Selection from "../../Selection/Selection";
import { Link } from "react-router-dom";

export default function SearchStaffComponent() {
  const options = [
    { label: "社員", value: "0" },
    { label: "パートナー", value: "1" },
  ];

  const [searchFillter, setSearchFiller] = useState({
    fullName: "",
    staffType: "0",
  });

  const { fullName, staffType } = searchFillter;

  const updateFilter = (data) =>
    setSearchFiller((prevData) => ({ ...prevData, ...data }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFiller((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const searchAction = () => {
    // Nếu tạo thành th
    console.log(searchFillter);
  };

  return (
    <Fragment>
      <div className=" row" style={{ borderWidth: 3 }}>
        <div className="col-lg-3  ">
          <h4
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            スタッフ一覧画面
          </h4>
          <Link to={"/staff/new"}>
            <button className="regisBtn border">新規登録</button>
          </Link>
        </div>
        <div className="col-lg-7 ">
          <div className="searchContainer">
            <div className=" row  align-items-center">
              <label className="col-sm-2 col-form-label d-flex ">氏名</label>
              <div className="col-sm-7">
                <input
                  type="name"
                  className=" inputSearch"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  placeholder="山田太郎"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className=" row  align-items-center ">
              <label className="col-sm-2  d-flex ">職制</label>
              <div className="col-sm-7">
                {/* <Selection
                 options={options}
                 selected={0}
                 divContainerId={"selectedOfficeStaffList"}
                  customStyleSelect=" w-100 d-flex justify-content-center"
                 value={office}
               ></Selection> */}

                <select
                  name="staffType"
                  id={"selectedOfficeStaffList"}
                  value={staffType}
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

              <div className="col-sm-3">
                <button className="searchBtn border" onClick={searchAction}>
                  検索
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2  d-flex justify-content-end align-items-end ">
          <span style={{ fontSize: 15 }}>検索件数：10 / 27</span>
        </div>
      </div>
    </Fragment>
  );
}
