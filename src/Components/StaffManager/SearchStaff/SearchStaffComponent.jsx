import React, { Fragment, useState } from "react";
import "./searchStaffComponent.css";
import { Link } from "react-router-dom";

export default function SearchStaffComponent({
  setSearchFiller,
  fetchData,
  setActivePage,
  totalRecords,
}) {
  const options = [
    { label: "", value: "" },
    { label: "社員", value: "0" },
    { label: "パートナー", value: "1" },
  ];

  const [stateSearch, setStateSearch] = useState({
    nameSearch: "",
    staffType: "",
  });

  const { nameSearch, staffType } = stateSearch;

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
    <Fragment>
      <div className=" row" style={{ borderWidth: 3 }}>
        <div className="col-lg-3  ">
          <h4
            style={{
              fontWeight: "bold",
              textAlign: "center",
              // marginTop: 5,
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
                  className="inputSearch"
                  name="nameSearch"
                  value={nameSearch}
                  placeholder="山田太郎"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row align-items-center">
              <label className="col-sm-2 d-flex">職制</label>
              <div className="col-sm-7">
                <select
                  name="staffType"
                  className="inputSearch"
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
                <button
                  className="searchBtn border"
                  onClick={() => actionSearch()}
                >
                  検索
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2  d-flex justify-content-end align-items-end ">
          <span style={{ fontSize: 15 }}>検索件数：{totalRecords || 0} 件</span>
        </div>
      </div>
    </Fragment>
  );
}
