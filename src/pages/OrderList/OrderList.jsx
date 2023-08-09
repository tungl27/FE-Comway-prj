import React, { Fragment, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Login from "../Login/Login";
import StaffList from "../StaffList/StaffList";
import "./orderList.css";
import Pagination from "../../Components/Pagination/Pagination";
import Breadcrumb from "../../Components/BreadCrumb/BreadCrumb";
import OrderTableComponent from "../../Components/OrderManager/OrderTable";
import OrderSearchComponent from "../../Components/OrderManager/OrderSearchComponent";

export default function OrderList({ breadcrumbs }) {
  const [active, setActive] = useState(2);

  return (
    <Fragment>
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className=" container-fluid d-flex justify-content-center">
        <div className="containerStyle  ">
          <OrderSearchComponent />
          <OrderTableComponent />

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
