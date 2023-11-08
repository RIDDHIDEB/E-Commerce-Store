import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContextProvider from './contexts/CartContext';

import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket';
import CheckOut from './components/CheckOut';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="basket" element={<Basket />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="products/:productId" element={<ProductDetail />} />
     
    </Routes>
      
    </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

