import './App.css';
import { Fragment, useState } from 'react';
import EditOrder from './pages/EditOrder'
import OrderPlanActualInput from './pages/OrderPlanActualInput';

const breadcrumbs = [{ title: 'メニュー', url: 'menu' }, { title: 'スタッフ一覧', url: 'stafflist' }]

function App() {

  const [active, setActive] = useState(2)

  return (
    <Fragment>
      <OrderPlanActualInput breadcrumbs={breadcrumbs}></OrderPlanActualInput>
    </Fragment>
  );
}

export default App;