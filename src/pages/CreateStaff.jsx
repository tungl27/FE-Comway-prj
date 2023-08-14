import { Fragment, useContext } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import FormCreate from "../Components/FormCreate/CreateStaff";
import Footer from "../Components/Footer/Footer";
import { BreadcrumbsContext } from "../State/BreadcrumbContext";

export default function CreateStaff() {
    const breadcrumbs = useContext(BreadcrumbsContext)
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormCreate></FormCreate>
            <Footer></Footer>
        </Fragment>
    )
}