import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
