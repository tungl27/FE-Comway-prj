import { Fragment } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb"
import FormEditOrder from "../Components/FormEdit/FormEditOrder"

export default function EditOrder({breadcrumbs}) {
    return(
    <Fragment>
        <Header></Header>
        <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
        <FormEditOrder ></FormEditOrder>
        <Footer></Footer>
    </Fragment>
    )
}