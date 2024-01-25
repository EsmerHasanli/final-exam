import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import BasketItemContextProvider from './context/BasketItemContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BasketItemContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </BasketItemContextProvider>
  // </React.StrictMode>,
)
