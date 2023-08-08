import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Menu from './pages/Menu';
import CreateStaff from './pages/CreateStaff';
import EditViewStaff from './pages/EditViewStaff';

const breadcrumbs = [{ title: 'メニュー', url: 'menu' }, { title: 'スタッフ一覧', url: 'stafflist' }]

function App() {

  const [active, setActive] = useState(2)

  return (
    <Fragment>
      <EditViewStaff breadcrumbs={breadcrumbs}></EditViewStaff>
    </Fragment>
  );
}

export default App;