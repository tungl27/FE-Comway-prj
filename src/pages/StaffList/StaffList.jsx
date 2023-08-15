import React, { Fragment, useContext, useEffect, useEffect, useState } from "react";
import "./staffList.css";
import SearchStaffComponent from "../../Components/StaffManager/SearchStaff/SearchStaffComponent";
import StaffTable from "../../Components/StaffManager/StaffTable/StaffTable";
import Pagination from "../../Components/Pagination/Pagination";
import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import { BreadcrumbsContext } from "../../State/BreadcrumbContext";
import axios from "axios";
import { GET_STAFF_LIST } from "../../theme/configApi";
import { Link } from 'react-router-dom'

export default function StaffList() {
  const breadcrumbs = useContext(BreadcrumbsContext);

  const [tableData, setTableData] = useState([]);

  const [activePage, setActivePage] = useState(1);
  const [totalRecords, setTotalRecord] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(GET_STAFF_LIST);
      setTableData(response.data);
      setActivePage(1);
      const totalRecord = response.data.length; // Số lượng bản ghi trong response.data
      setTotalRecord(totalRecord); // Gán giá trị tổng số trang cho state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteStaff = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/Show_Staff_Screen"
      );
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Fragment>
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle">
          <SearchStaffComponent />
          <StaffTable
            activePage={activePage}
            tableData={tableData} />
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
          />

          {totalRecords > 10 && (
            <Pagination
              activepage={activePage}
              totalRecords={totalRecords}
              pageSize={pageSize}
              setActive={setActivePage}
            ></Pagination>
          )}
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
