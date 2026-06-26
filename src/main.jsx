import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastProvider } from "./context/ToastContext.jsx"
import { store } from './store/index.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastProvider>
          <App/>
        </ToastProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
