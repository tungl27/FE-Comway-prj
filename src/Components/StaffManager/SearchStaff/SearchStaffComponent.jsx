import React, { Fragment, useState } from "react";
import "./searchStaffComponent.css";
import Selection from "../../Selection/Selection";

export default function SearchStaffComponent() {
  const options = [
    { label: "社員", value: 1 },
    { label: "社員1", value: 2 },
    { label: "社員2", value: 3 },
    { label: "社員3", value: 4 },
  ];

  const [searchFillter, setSearchFiller] = useState({
    fullName: "",
    office: "",
  });

  const { fullName, office } = searchFillter;

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
    <Fragment>
      <div className="searchContainer">
        <form className="h-100">
          <div className=" row h-50 align-items-center">
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

          <div className="form-group row h-50 align-items-center ">
            <label className="col-sm-2  d-flex ">職制</label>
            <div className="col-sm-7">
              {/* <Selection
                options={options}
                selected={0}
                divContainerId={"selectedOfficeStaffList"}
                // customStyleSelect=" w-100 d-flex justify-content-center"
                value={office}
              ></Selection> */}

              <select
                name="office"
                id={"selectedOfficeStaffList"}
                value={office}
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
              <button className="searchBtn border" style={{ marginLeft: 10 }}>
                検索
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
