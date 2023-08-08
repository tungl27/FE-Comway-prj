import { Fragment } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import FormCreate from "../Components/FormCreate/FormCreate";
import Footer from "../Components/Footer/Footer";
import FormEdit from "../Components/FormEdit/FormEdit";

export default function EditViewStaff({breadcrumbs}){
    return(
        <Fragment>
            <Header></Header>
            <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            <FormEdit></FormEdit>
            <Footer></Footer>
        </Fragment>
    )
}