import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PagDesco from './pages/notfound/index.js';
import PagPrin from './pages/pagina_principal/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PagPrin/>} />
        <Route path='*' element={<PagDesco/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

