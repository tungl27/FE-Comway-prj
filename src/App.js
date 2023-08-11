import "./App.css";
import { Fragment, useState } from "react";
import EditOrder from "./pages/EditOrder";
import OrderPlanActualInput from "./pages/OrderPlanActualInput";
import StaffList from "./pages/StaffList/StaffList";
import OrderList from "./pages/OrderList/OrderList";
import CreateOrder from "./pages/CreateOrder";
import CreateStaff from "./pages/CreateStaff";
import EditViewStaff from "./pages/EditViewStaff";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu";

const breadcrumbs = [
  { title: "メニュー", url: "menu" },
  { title: "スタッフ一覧", url: "stafflist" },
];

function App() {
  const [active, setActive] = useState(2);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Menu />} />
          <Route
            path="/staff/list"
            element={<StaffList breadcrumbs={breadcrumbs} />}
          />
          <Route
            path="/staff/new"
            element={<CreateStaff breadcrumbs={breadcrumbs} />}
          />
          <Route
            path="/staff/detail"
            element={<EditViewStaff breadcrumbs={breadcrumbs} />}
          />

          <Route
            path="/order/list"
            element={<OrderList breadcrumbs={breadcrumbs} />}
          />
          <Route
            path="/order/new"
            element={<CreateOrder breadcrumbs={breadcrumbs} />}
          />
          <Route
            path="/order/detail"
            element={<EditOrder breadcrumbs={breadcrumbs} />}
          />

          <Route
            path="/order/actual"
            element={<OrderPlanActualInput breadcrumbs={breadcrumbs} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <br></br>
      <OrderList breadcrumbs={breadcrumbs} />
      <StaffList breadcrumbs={breadcrumbs}></StaffList>

      <CreateOrder breadcrumbs={breadcrumbs}></CreateOrder>
      <CreateStaff breadcrumbs={breadcrumbs}></CreateStaff> */}
    </Fragment>
  );
}

export default App;
