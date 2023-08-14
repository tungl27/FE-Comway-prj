import React, { Fragment, useContext, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./orderList.css";
import Pagination from "../../Components/Pagination/Pagination";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import OrderTableComponent from "../../Components/OrderManager/OrderTable/OrderTable";
import OrderSearchComponent from "../../Components/OrderManager/OrderSearchComponent/OrderSearchComponent";
import { BreadcrumbsContext } from "../../State/BreadcrumbContext";

export default function OrderList() {
  const breadcrumbs = useContext(BreadcrumbsContext)
  const [active, setActive] = useState(2);

  const orderList = [
    {
      no: 1,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名",
      status: "実行中",
    },
    {
      no: 2,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名1",
      status: "新規中",
    },
    {
      no: 3,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名2",
      status: "キャンセル",
    },
    {
      no: 4,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名3",
      status: "実行中",
    },
    {
      no: 5,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名4",
      status: "実行中",
    },
    {
      no: 6,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名",
      status: "実行中",
    },
    {
      no: 7,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名",
      status: "実行中",
    },
    {
      no: 8,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名",
      status: "実行中",
    },
    {
      no: 9,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名",
      status: "実行中",
    },
    {
      no: 10,
      orderNo: "CIS2023–019",
      projectName: "全社支払合算システム機能",
      customerName: "顧客名",
      status: "実行中",
    },
  ];

  return (
    <Fragment>
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className=" container-fluid d-flex justify-content-center align-items-center">
        <div className="containerStyle  ">
          <OrderSearchComponent />

          <OrderTableComponent orderList={orderList} />

          <Pagination
            activepage={active}
            startPage={2}
            endPage={4}
            setActive={setActive}
          ></Pagination>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
