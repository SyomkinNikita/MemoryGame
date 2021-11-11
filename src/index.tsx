import * as React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';

import Button from './components/Button';


import './global.scss';

render(<div className="app" style={{
  backgroundColor: 'blue'
}}><Button title="Кнопка" />с глоабльным стилем</div>, document.getElementById('root'));