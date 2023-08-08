import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Formmenu from './Components/FormMenu/FormMenu';
import Footer from './Components/Footer/Footer';
import Pagination from './Components/Pagination/Pagination';
import { Fragment, useState } from 'react';
import Breadcrumb from './Components/BreadCrumb/BreadCrumb';

const breadcrumbs = [{ title: 'メニュー', url: 'menu' }, { title: 'スタッフ一覧', url: 'stafflist' }]

function App() {

  const [active, setActive] = useState(2)

  return (
    <Fragment>
      <Header></Header>
      <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
      <Formmenu></Formmenu>
      <Pagination activepage={active} totalRecords={50} pageSize={5} setActive={setActive}></Pagination>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
