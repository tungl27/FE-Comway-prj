import './App.css';
import { Fragment, useState } from 'react';
import EditOrder from './pages/EditOrder'

const breadcrumbs = [{ title: 'メニュー', url: 'menu' }, { title: 'スタッフ一覧', url: 'stafflist' }]

function App() {

  const [active, setActive] = useState(2)

  return (
    <Fragment>
      <EditOrder breadcrumbs={breadcrumbs}></EditOrder>
    </Fragment>
  );
}

export default App;