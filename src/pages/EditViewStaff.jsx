import { Fragment, useContext, useState } from "react";
import Header from "../Components/Header/Header";
import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import Footer from "../Components/Footer/Footer";
import FormEdit from "../Components/FormEdit/FormEditStaff";
import { useLocation } from "react-router-dom";

export default function EditViewStaff() {

    const params = useLocation().search
    const staffId = new URLSearchParams(params).get("id");
    console.log(staffId); // 159
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb ></Breadcrumb>
            <FormEdit staffId={staffId}></FormEdit>
            <Footer></Footer>
        </Fragment>
    )
}