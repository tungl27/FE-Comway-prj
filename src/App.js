import './App.css';
import { Fragment, useState } from 'react';
import EditViewStaff from './pages/EditViewStaff';
import CreateStaff from './pages/CreateStaff';

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