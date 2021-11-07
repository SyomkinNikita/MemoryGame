import * as React from 'react';
import { render } from 'react-dom';

import styles from './styles.module.scss';
import sun from './4-clipart-sun-1.png';

render(<div className={styles.title}>
  React apps  1111233456
  <div className={styles.picture} style={{backgroundImage: `url(${sun})`}}></div>
</div>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}