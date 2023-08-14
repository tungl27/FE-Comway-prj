import { Fragment, useContext } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb"
import FormEditOrder from "../Components/FormEdit/FormEditOrder"
import { BreadcrumbsContext } from "../State/BreadcrumbContext"

export default function EditOrder() {
    const breadcrumbs = useContext(BreadcrumbsContext)
    return(
    <Fragment>
        <Header></Header>
        <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
        <FormEditOrder ></FormEditOrder>
        <Footer></Footer>
    </Fragment>
    )
}