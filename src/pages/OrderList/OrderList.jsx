import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./orderList.css";
import Pagination from "../../Components/Pagination/Pagination";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import OrderTableComponent from "../../Components/OrderManager/OrderTable/OrderTable";
import OrderSearchComponent from "../../Components/OrderManager/OrderSearchComponent/OrderSearchComponent";
import { BreadcrumbsContext } from "../../State/BreadcrumbContext";
import axios from "axios";
import { DELETE_ORDER, SEARCH_ORDER_LIST } from "../../theme/configApi";

export default function OrderList() {
  const breadcrumbs = useContext(BreadcrumbsContext);

  // State du lieu
  const [tableData, setTableData] = useState([]);
  const [searchFillter, setSearchFiller] = useState({
    orderNo: "",
    clientName: "",
    projectName: "",
    status: "",
  });

  // State phan trang
  const [activePage, setActivePage] = useState(1);
  const [totalRecords, setTotalRecord] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchData(searchFillter);
  }, []);

  const fetchData = async (searchValue) => {
    try {
      // const searchParams = new URLSearchParams(searchValue);
      // const url = `${SEARCH_ORDER_LIST}?${searchParams.toString()}`;
      // const response = await axios.get(url);
      const response = await axios.post(SEARCH_ORDER_LIST, {
        order_number: searchValue?.orderNo || "",
        project_name: searchValue?.projectName || "",
        client_name: searchValue?.clientName || "",
        status: searchValue?.status || "",
      });

      setTableData(response.data);

      const totalRecord = response.data.length; // Số lượng bản ghi trong response.data
      setTotalRecord(totalRecord); // Gán giá trị tổng số trang cho state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteOrder = async (orderID) => {
    try {
      const response = await axios.post(DELETE_ORDER, {
        Id_User_Login: 0,
        Id_Order: orderID,
        Condition_verify: true,
      });
      fetchData(searchFillter);
    } catch (error) {
      console.error("Error delete data:");
    }
  };

  return (
    <Fragment>
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle d-flex flex-column  position-relative  ">
          <OrderSearchComponent
            setSearchFiller={setSearchFiller}
            fetchData={fetchData}
            setActivePage={setActivePage}
            totalRecords={totalRecords}
          />

          <div style={{ marginBottom: 55 }}>
            <OrderTableComponent
              deleteOrder={deleteOrder}
              tableData={tableData}
              activePage={activePage}
              pageSize={pageSize}
              totalRecords
            />
          </div>

          <div className="endPag">
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
