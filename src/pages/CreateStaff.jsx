import { Fragment } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import FormCreate from "../Components/FormCreate/FormCreate";
import Footer from "../Components/Footer/Footer";

export default function CreateStaff({breadcrumbs}){
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormCreate></FormCreate>
            <Footer></Footer>
        </Fragment>
    )
}