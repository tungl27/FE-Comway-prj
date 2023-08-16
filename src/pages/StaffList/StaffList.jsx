import React, { Fragment, useContext, useEffect, useState } from "react";
import "./staffList.css";
import SearchStaffComponent from "../../Components/StaffManager/SearchStaff/SearchStaffComponent";
import StaffTable from "../../Components/StaffManager/StaffTable/StaffTable";
import Pagination from "../../Components/Pagination/Pagination";
import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import {
  BreadcrumbsContext,
  SetBreadcrumbsContext,
} from "../../State/BreadcrumbContext";
import axios from "axios";
import { DELETE_STAFF, GET_STAFF_LIST } from "../../theme/configApi";

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
      const totalRecord = response.data.length; //Số lượng bản ghi trong response.data
      setTotalRecord(totalRecord); // Gán giá trị tổng số trang cho state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteStaff = async (staffId) => {
    try {
      const response = await axios.post(DELETE_STAFF, {
        id: staffId,
        id_login: 0,
        Condition: true,
      });
      fetchData();
    } catch (error) {
      console.error("Error delete staff data:");
    }
  };

  return (
    <Fragment>
      <Header />
      <Breadcrumb />

      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle d-flex flex-column  position-relative  ">
          <SearchStaffComponent />

          <StaffTable
            activePage={activePage}
            tableData={tableData}
            pageSize={pageSize}
            deleteStaff={deleteStaff}
          />

          <div className="absoulute-panigation ">
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
      </div>

      <Footer />
    </Fragment>
  );
}
