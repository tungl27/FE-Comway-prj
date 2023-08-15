import React, { Fragment, useContext, useEffect, useState } from "react";
import "./staffList.css";
import SearchStaffComponent from "../../Components/StaffManager/SearchStaff/SearchStaffComponent";
import StaffTable from "../../Components/StaffManager/StaffTable/StaffTable";
import Pagination from "../../Components/Pagination/Pagination";
import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import { BreadcrumbsContext, SetBreadcrumbsContext } from "../../State/BreadcrumbContext";
import { Link } from "react-router-dom";

const tableData = [
  { id: 1, name: "山田太郎", fullName: "やまだたろう", office: "社員" },
  { id: 2, name: "弘黒金", fullName: "ひろしくろがね", office: "London" },
  { id: 3, name: "大山崎", fullName: "おおやまみさき", office: "London" },
  { id: 4, name: "Jane dsddsadad", fullName: 30, office: "London" },
  { id: 5, name: "Jane", fullName: 30, office: "London" },
  { id: 6, name: "Jane", fullName: 30, office: "London" },
  { id: 7, name: "Jane", fullName: 30, office: "London" },
  { id: 8, name: "John", fullName: 25, office: "New York" },
  { id: 9, name: "Jane", fullName: 30, office: "London" },
  { id: 10, name: "Jane", fullName: 30, office: "London" },
  { id: 11, name: "Jane", fullName: 30, office: "London" },
  { id: 12, name: "Jane", fullName: 30, office: "London" },
  { id: 13, name: "Jane", fullName: 30, office: "London" },
  { id: 14, name: "Jane", fullName: 30, office: "London" },
  { id: 15, name: "Jane", fullName: 30, office: "London" },
  { id: 16, name: "Jane", fullName: 30, office: "London" },
];

const pageSize = 5
const totalRecords = tableData.length

export default function StaffList() {
  const [activePage, setActivePage] = useState(1);

  const SetBreadcrumbs = useContext(SetBreadcrumbsContext)

  const breadcrumbs = useContext(BreadcrumbsContext)
  breadcrumbs.push({
    title: "スタッフ一覧",
    url: "/staff/list"
  })
  SetBreadcrumbs(breadcrumbs)

  return (
    <Fragment>
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle">
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
              <Link to={'/staff/new'}>
                <button className="regisBtn border">新規登録</button>
              </Link>
            </div>
            <div className="col-lg-7 ">
              <SearchStaffComponent />
            </div>
            <div className="col-lg-2  d-flex justify-content-end align-items-end ">
              <span style={{ fontSize: 15 }}>検索件数：10 / 27</span>
            </div>
          </div>

          <StaffTable activePage={activePage} tableData={tableData} pageSize={pageSize} />

          <Pagination
            activepage={activePage}
            totalRecords={totalRecords}
            pageSize={pageSize}
            setActive={setActivePage}
          ></Pagination>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
