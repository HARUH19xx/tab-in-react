import { useState } from 'react';
import {Tab1, Tab2} from './components/index';
import style from './assets/style.module.scss';

const App = () => {
  const [tab, setTab] = useState('tab1')
  const body = () => {
    switch (tab) {
      case 'tab2':
        return(<Tab2 />)
    
      default:
        return(<Tab1 />)
    }
  }
  return (
    <div className={style['l_section_large']}>
      <ul className={style['c_ul']}>
          <li onClick={() => setTab('tab1')} id='#1'>タブ１</li>
          <li onClick={() => setTab('tab2')}>タブ２</li>
      </ul>
      <div>
        {body()}
      </div>
    </div>
  );
}

export default App;