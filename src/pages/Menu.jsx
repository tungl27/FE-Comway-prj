import { Fragment } from 'react'
import Header from '../Components/Header/Header'
import Formmenu from '../Components/FormMenu/FormMenu'
import Footer from '../Components/Footer/Footer'
import Breadcrumb from '../Components/BreadCrumb/BreadCrumb'

const breadcrumbs = []
export default function Menu() {
    return (<Fragment>
        <Header></Header>
        <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
        <Formmenu></Formmenu>
        <Footer></Footer>
    </Fragment>)
}