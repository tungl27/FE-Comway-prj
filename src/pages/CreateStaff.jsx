import { Fragment, useContext } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import FormCreate from "../Components/FormCreate/CreateStaff";
import Footer from "../Components/Footer/Footer";
import { BreadcrumbsContext, SetBreadcrumbsContext } from "../State/BreadcrumbContext";

export default function CreateStaff() {
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <FormCreate></FormCreate>
            <Footer></Footer>
        </Fragment>
    )
}