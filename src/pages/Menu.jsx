import { Fragment } from 'react'
import Header from '../Components/Header/Header'
import Formmenu from '../Components/FormMenu/FormMenu'
import Footer from '../Components/Footer/Footer'
import Breadcrumb from '../Components/BreadCrumb/BreadCrumb'


export default function Menu() {
    return (<Fragment>
        <Header></Header>
        <div className='breadcrumb'></div>
        <Formmenu></Formmenu>
        <Footer></Footer>
    </Fragment>)
}