import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';

render(<div className="title">React apps  1111233456</div>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}