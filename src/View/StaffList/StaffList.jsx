import React, { Fragment, useState } from "react";
import "./staffList.css";
import SearchStaffComponent from "../../Components/StaffManager/SearchStaff/SearchStaffComponent";
import StaffTable from "../../Components/StaffManager/StaffTable/StaffTable";
import Pagination from "../../Components/Pagination/Pagination";

export default function StaffList() {
  const [active, setActive] = useState(2);

  return (
    <Fragment>
      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle     ">
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
              <button className="regisBtn border">新規登録</button>
            </div>
            <div className="col-lg-7 ">
              <SearchStaffComponent />
            </div>
            <div className="col-lg-2  d-flex justify-content-end align-items-end">
              <span style={{ fontSize: 15 }}>検索件数：10 / 27</span>
            </div>
          </div>

          <div>
            <StaffTable />
          </div>

          <Pagination
            activepage={active}
            startPage={2}
            endPage={4}
            setActive={setActive}
          ></Pagination>
        </div>
      </div>
    </Fragment>
  );
}
