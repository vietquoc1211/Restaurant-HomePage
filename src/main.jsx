import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import store ,{persistor} from './Components/Store/Store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <PersistGate persistor={persistor} loading={<div>Loading persisted state...</div>}>
    <StrictMode>
    <App />
  </StrictMode>
    </PersistGate>
  </Provider>
)
