import { Fragment, useContext, useState } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import Footer from "../Components/Footer/Footer";
import FormEdit from "../Components/FormEdit/FormEditStaff";
import Pagination from "../Components/Pagination/Pagination";
import { useLocation } from "react-router-dom";
import { BreadcrumbsContext, SetBreadcrumbsContext } from "../State/BreadcrumbContext";

export default function EditViewStaff() {

    const params = useLocation().search
    const staffId = new URLSearchParams(params).get("id");
    console.log(staffId); // 159
    const [activepage, setActivepage] = useState(2)
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb ></Breadcrumb>
            <FormEdit id={staffId}></FormEdit>
            <Pagination activepage={activepage} totalRecords={53} pageSize={6} setActive={setActivepage} ></Pagination>
            <Footer></Footer>
        </Fragment>
    )
}