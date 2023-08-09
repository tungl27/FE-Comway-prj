import { Fragment, useState } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import Footer from "../Components/Footer/Footer";
import FormEdit from "../Components/FormEdit/FormEdit";
import Pagination from "../Components/Pagination/Pagination";

export default function EditViewStaff({breadcrumbs}){
    const [activepage, setActivepage] = useState(2)
    return(
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormEdit></FormEdit>
            <Pagination activepage={activepage} totalRecords={53} pageSize={6} setActive={setActivepage} ></Pagination>
            <Footer></Footer>
        </Fragment>
    )
}