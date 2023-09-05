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

  const [sortConfig, setSortConfig] = useState(null);
  function sortData(data, config) {
    if (!config) {
      return data;
    }

    const { key, direction } = config;

    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  }

  function sortTableRequire(key) {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    // setSortConfig((prevSortConfig) => ({ ...prevSortConfig, key, direction }));
    setSortConfig({ key, direction });
    const sortedData = sortData(tableData, { key, direction });
    setTableData(sortedData);
  }
  const fetchData = async (searchValueParams) => {
    try {
      const params = {
        name: searchValueParams.nameSearch,
        staff_type: searchValueParams.staffType,
        IDLoginUser: localStorage.getItem("IDLoginUser"),
      };

      const response = await axios.post(SEARCH_STAFF_LIST, params);

      if (Array.isArray(response.data)) {
        const sortedData = sortData(response.data, sortConfig);
        setTableData(sortedData);
        const totalRecord = response.data.length; // Số lượng bản ghi trong response.data
        setTotalRecord(totalRecord); // Gán giá trị tổng số trang cho state
      } else {
        setTableData([]);
        setTotalRecord(0);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteStaff = async (staffId) => {
    try {
      const id_login = localStorage.getItem("IDLoginUser");

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
              sortTableRequire={sortTableRequire}
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
