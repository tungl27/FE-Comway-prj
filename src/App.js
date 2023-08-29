import "./App.css";
import { Fragment, useState } from "react";
import EditOrder from "./pages/EditOrder";
import OrderPlanActualInput from "./pages/OrderPlanActualInput";
import StaffList from "./pages/StaffList/StaffList";
import OrderList from "./pages/OrderList/OrderList";
import CreateOrder from "./pages/CreateOrder";
import CreateStaff from "./pages/CreateStaff";
import EditViewStaff from "./pages/EditViewStaff";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu";
import {
  BreadcrumbsContext,
  SetBreadcrumbsContext,
} from "./State/BreadcrumbContext";
import Protected from "./theme/Protected";

const breadcrumb = [{ title: "メニュー", url: "/home" }];

function App() {
  const [breadcrumbs, setBreadcrumbs] = useState(breadcrumb);

  return (
    <Fragment>
      <BreadcrumbsContext.Provider value={breadcrumbs}>
        <SetBreadcrumbsContext.Provider value={setBreadcrumbs}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Protected Cmp={Menu} />} />
              <Route
                path="/staff/list"
                element={<Protected Cmp={StaffList} />}
              />
              <Route
                path="/staff/new"
                element={<Protected Cmp={CreateStaff} />}
              />
              <Route
                path="/staff/detail"
                element={<Protected Cmp={EditViewStaff} />}
              />

              <Route
                path="/order/list"
                element={<Protected Cmp={OrderList} />}
              />
              <Route
                path="/order/new"
                element={<Protected Cmp={CreateOrder} />}
              />
              <Route
                path="/order/detail"
                element={<Protected Cmp={EditOrder} />}
              />

              <Route
                path="/order/actual"
                element={<Protected Cmp={OrderPlanActualInput} />}
              />
            </Routes>
          </BrowserRouter>
        </SetBreadcrumbsContext.Provider>
      </BreadcrumbsContext.Provider>
    </Fragment>
  );
}

export default App;
