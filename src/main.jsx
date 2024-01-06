import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.jsx';
import Login from './routes/Login.jsx';
import Registro from './routes/Registro.jsx';
import Home from './routes/Home.jsx';
import Salaespera from './routes/Salaespera.jsx';
import Sala from './routes/Sala.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}  >
            <Route index element ={<Login/>} />
            <Route path='login' element={<Login/>} />
            <Route path='registro' element={<Registro/>} />
            <Route path='home' element={<Home/>} />
            <Route path='salaespera' element={<Salaespera/>} />
            <Route path='sala' element={<Sala/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
