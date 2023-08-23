import React, { Fragment, useEffect, useState } from "react";
import "./staffList.css";
import SearchStaffComponent from "../../Components/StaffManager/SearchStaff/SearchStaffComponent";
import StaffTable from "../../Components/StaffManager/StaffTable/StaffTable";
import Pagination from "../../Components/Pagination/Pagination";
import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { DELETE_STAFF, SEARCH_STAFF_LIST } from "../../theme/configApi";

export default function StaffList() {
  // State table
  const [tableData, setTableData] = useState([]);
  const [searchFillter, setSearchFiller] = useState({
    nameSearch: "",
    staffType: "",
  });

  // State phan trang
  const [activePage, setActivePage] = useState(1);
  const [totalRecords, setTotalRecord] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchData(searchFillter);
  }, []);

  const fetchData = async (searchValueParams) => {
    try {
      // const response = await axios.post(SEARCH_ORDER_LIST, {
      //   order_number: searchValue?.orderNo || "",
      //   project_name: searchValue?.projectName || "",
      //   client_name: searchValue?.clientName || "",
      //   status: searchValue?.status || "",
      // });

      const params = {
        name: searchValueParams.nameSearch,
        staff_type: searchValueParams.staffType,
        IDLoginUser: localStorage.getItem("admin_id"),
      };

      const response = await axios.post(SEARCH_STAFF_LIST, params);
      console.log(response.data);

      // const searchParams = new URLSearchParams(params);
      // const url = `${SEARCH_STAFF_LIST}?${searchParams.toString()}`;
      // const response = await axios.get(url);

      setTableData(response.data);
      const totalRecord = response.data?.length; //Số lượng bản ghi trong response.data
      setTotalRecord(totalRecord); // Gán giá trị tổng số trang cho state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteStaff = async (staffId) => {
    try {
      const id_login = localStorage.getItem("admin_id");

      const response = await axios.post(DELETE_STAFF, {
        id: staffId,
        id_login: id_login,
        Condition: true,
        IDLoginUser: id_login,
      });

      fetchData(searchFillter);
    } catch (error) {
      console.log("Error delete staff data:");
      console.log(error.response.data);
    }
  };

  return (
    <Fragment>
      <Header />
      <Breadcrumb />

      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle d-flex flex-column  position-relative  ">
          <SearchStaffComponent
            searchFillter={searchFillter}
            setSearchFiller={setSearchFiller}
            fetchData={fetchData}
            setActivePage={setActivePage}
            totalRecords={totalRecords}
          />

          <div style={{ marginBottom: 55 }}>
            <StaffTable
              activePage={activePage}
              tableData={tableData}
              pageSize={pageSize}
              deleteStaff={deleteStaff}
            />
          </div>

          <div className="absoulute-panigation ">
            <Pagination
              activepage={activePage}
              totalRecords={totalRecords}
              pageSize={pageSize}
              setActive={setActivePage}
            ></Pagination>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
