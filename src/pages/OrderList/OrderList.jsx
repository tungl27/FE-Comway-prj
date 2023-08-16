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
import {
  DELETE_ORDER,
  GET_ORDER_LIST,
  SEARCH_ORDER_LIST,
} from "../../theme/configApi";
import Dialog from "../../Components/Popup/DialogConfirm";
import { Tab } from "react-bootstrap";

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
  const [activePage, setActivePage] = useState(2);
  const [totalRecords, setTotalRecord] = useState(0);
  const pageSize = 10;
  const totalPage = Math.ceil(tableData.length / pageSize);

  useEffect(() => {
    fetchData(searchFillter);
  }, []);

  const fetchData = async (searchValue) => {
    try {
      const searchParams = new URLSearchParams(searchValue);
      const url = `${SEARCH_ORDER_LIST}?${searchParams.toString()}`;
      const response = await axios.get(url);
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
      fetchData();
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
            searchFillter={searchFillter}
            setSearchFiller={setSearchFiller}
            fetchData={fetchData}
            setActivePage={setActivePage}
          />

          <div style={{ marginBottom: 55 }}>
            <OrderTableComponent
              deleteOrder={deleteOrder}
              tableData={tableData}
              activePage={activePage}
              pageSize={pageSize}
            />
          </div>

          <div className="border endPag">
            <Pagination
              activepage={activePage}
              totalRecords={totalRecords}
              totalPage={totalPage}
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
