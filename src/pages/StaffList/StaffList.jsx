import React, { Fragment, useContext, useEffect, useState } from "react";
import "./staffList.css";
import SearchStaffComponent from "../../Components/StaffManager/SearchStaff/SearchStaffComponent";
import StaffTable from "../../Components/StaffManager/StaffTable/StaffTable";
import Pagination from "../../Components/Pagination/Pagination";
import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import { BreadcrumbsContext, SetBreadcrumbsContext } from "../../State/BreadcrumbContext";
import axios from "axios";
import { GET_STAFF_LIST } from "../../theme/configApi";
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

export default function StaffList() {
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
      <Breadcrumb />

      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle">

          <SearchStaffComponent />

          <StaffTable activePage={activePage} tableData={tableData} pageSize={pageSize} />
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
