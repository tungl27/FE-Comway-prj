import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pagination from "./Components/Pagination/Pagination";
import { Fragment, useState } from "react";
import Breadcrumb from "./Components/BreadCrumb/BreadCrumb";
import StaffList from "./View/StaffList/StaffList";
import Login from "./View/Login/Login";

const breadcrumbs = [
  { title: "メニュー", url: "menu" },
  { title: "スタッフ一覧", url: "stafflist" },
];

function App() {
  const [active, setActive] = useState(2);

  return (
    <Fragment>
      <div className="App">
        <Header></Header>
        {/* <Login/> */}
        <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>

        <StaffList></StaffList>
        {/* <Formmenu></Formmenu> */}

        <Footer></Footer>
      </div>
    </Fragment>
  );
}

export default App;
