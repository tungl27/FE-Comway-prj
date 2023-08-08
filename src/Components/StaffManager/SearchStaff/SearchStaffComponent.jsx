import React, { Fragment } from "react";
import "./searchStaffComponent.css";

export default function SearchStaffComponent() {
  return (
    <Fragment>
      <div className="searchContainer">
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label d-flex align-items-center">
              氏名
            </label>
            <div className="col-sm-7">
              <input
                type="name"
                className=" inputSearch"
                id="name"
                placeholder="山田太郎"
                name="name"
              />
            </div>
          </div>

          <div className="form-group row mt-2">
            <label className="col-sm-2  d-flex align-items-center">職制</label>
            <div className="col-sm-7">
              <select class="inputSearch rounded-0">
                <option selected>社員</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
