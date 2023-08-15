import { Fragment, useContext } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import FormCreate from "../Components/FormCreate/CreateStaff";
import Footer from "../Components/Footer/Footer";
import { BreadcrumbsContext, SetBreadcrumbsContext } from "../State/BreadcrumbContext";

export default function CreateStaff() {
    const SetBreadcrumbs = useContext(SetBreadcrumbsContext)

    const breadcrumbs = useContext(BreadcrumbsContext)
    breadcrumbs.push({
        title: "スタッフ登録",
        url: "/staff/new"
    })
    SetBreadcrumbs(breadcrumbs)
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormCreate></FormCreate>
            <Footer></Footer>
        </Fragment>
    )
}