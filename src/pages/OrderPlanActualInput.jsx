import { Fragment } from "react";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'

export default function OrderPlanActualInput({breadcrumbs}){
    return (
        <Fragment>
            <Header></Header>
            <BreadCrumb breadcrumbs={breadcrumbs}></BreadCrumb>
            <Footer></Footer>
        </Fragment>
    )
}