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
import { BreadcrumbsContext, SetBreadcrumbsContext } from "./State/BreadcrumbContext";

const breadcrumb = [
  { title: "メニュー", url: "/home" }
  // { title: "スタッフ一覧", url: "stafflist" },
];

function App() {
  const [breadcrumbs, setBreadcrumbs] = useState(breadcrumb);

  return (
    <Fragment>
      <BreadcrumbsContext.Provider value={breadcrumbs}>
        <SetBreadcrumbsContext.Provider value={setBreadcrumbs}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Menu />} />
              <Route
                path="/staff/list"
                element={<StaffList />}
              />
              <Route
                path="/staff/new"
                element={<CreateStaff />}
              />
              <Route
                path="/staff/detail"
                element={<EditViewStaff />}
              />

              <Route
                path="/order/list"
                element={<OrderList />}
              />
              <Route
                path="/order/new"
                element={<CreateOrder />}
              />
              <Route
                path="/order/detail"
                element={<EditOrder />}
              />

              <Route
                path="/order/actual"
                element={<OrderPlanActualInput />}
              />
            </Routes>
          </BrowserRouter>
        </SetBreadcrumbsContext.Provider>
      </BreadcrumbsContext.Provider>
      {/* <br></br>
      <OrderList breadcrumbs={breadcrumbs} />
      <StaffList breadcrumbs={breadcrumbs}></StaffList>

      <CreateOrder breadcrumbs={breadcrumbs}></CreateOrder>
      <CreateStaff breadcrumbs={breadcrumbs}></CreateStaff> */}
    </Fragment>
  );
}

export default App;
