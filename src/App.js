import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Formmenu from './Components/FormMenu/FormMenu';
import Footer from './Components/Footer/Footer';
import Pagination from './Components/Pagination/Pagination';
import { Fragment, useState } from 'react';
import Breadcrumb from './Components/BreadCrumb/BreadCrumb';

const breadcrumbs = [{title: 'メニュー', url: 'menu'}, {title: 'スタッフ一覧', url:'stafflist'}]

function App() {

  const [active, setActive] = useState(2)

  return (
    <Fragment>
      <div className='App'>
        <Header></Header>
        <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
        <Formmenu></Formmenu>
        <Pagination activepage={active} startPage={2} endPage={4} setActive={setActive}></Pagination>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}

export default App;
