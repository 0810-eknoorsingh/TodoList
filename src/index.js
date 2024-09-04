import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import { persistor } from './redux/store';
import { ToastContainer } from 'react-toastify'; 
import App from './App';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);