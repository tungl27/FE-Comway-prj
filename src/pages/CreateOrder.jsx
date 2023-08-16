import { Fragment, useContext } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FormCreateOrder from '../Components/FormCreate/FormCreateOrder'
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import { BreadcrumbsContext, SetBreadcrumbsContext } from "../State/BreadcrumbContext";

export default function CreateOrder() {

    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb ></Breadcrumb>
            <FormCreateOrder></FormCreateOrder>
            <Footer></Footer>
        </Fragment>
    )
}