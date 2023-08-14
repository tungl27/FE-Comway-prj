import { Fragment, useContext } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FormCreateOrder from '../Components/FormCreate/FormCreateOrder'
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import { BreadcrumbsContext } from "../State/BreadcrumbContext";

export default function CreateOrder(){
    const breadcrumbs = useContext(BreadcrumbsContext)
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormCreateOrder></FormCreateOrder>
            <Footer></Footer>
        </Fragment>
    )
}