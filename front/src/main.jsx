import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import BasketItemContextProvider from './context/BasketItemContext'
import WishlistItemContextProvider from './context/WishlistItemContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <WishlistItemContextProvider>
    <BasketItemContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </BasketItemContextProvider>
  </WishlistItemContextProvider>
  // </React.StrictMode>,
)
