import * as React from 'react';
import { render } from 'react-dom';

import styles from './styles.module.scss';

render(<div className={styles.title}>React apps  1111233456</div>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}