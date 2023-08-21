import { Fragment, useContext, useState } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb"
import FormEditOrder from "../Components/FormEdit/FormEditOrder"
import { BreadcrumbsContext } from "../State/BreadcrumbContext"
import { useLocation } from "react-router-dom"

export default function EditOrder() {
    const params = useLocation().search
    const OrderID = new URLSearchParams(params).get("id");
    console.log(OrderID); // 159
    const breadcrumbs = useContext(BreadcrumbsContext)
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormEditOrder OrderID={OrderID} ></FormEditOrder>
            <Footer></Footer>
        </Fragment>
    )
}