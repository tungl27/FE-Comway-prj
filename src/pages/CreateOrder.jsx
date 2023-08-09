import { Fragment } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FormCreateOrder from '../Components/FormCreate/FormCreateOrder'
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";

export default function CreateOrder({breadcrumbs}){
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormCreateOrder></FormCreateOrder>
            <Footer></Footer>
        </Fragment>
    )
}