import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';

// styles for this kit
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/now-ui-kit.css?v=1.5.0';
import '../../assets/demo/demo.css?v=1.5.0';
import '../../assets/demo/nucleo-icons-page-styles.css?v=1.5.0';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
