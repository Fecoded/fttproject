import React, { Fragment } from 'react';

import Routes from './pages';
import Alert from './components/alert/alert';

// Styles
import './styles/style.css';

const App = () => (
  <Fragment>
    <Alert />
    <Routes />
  </Fragment>
);

export default App;
