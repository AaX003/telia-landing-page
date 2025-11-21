import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root from './components/Root'
import Register from './components/Register'
import ForgotPass from './components/ForgotPassword'
import Login from './components/Login'
import Error from './components/Error'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Root />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpass" element={<ForgotPass />}/>
        <Route path="*" element={<Error />}/> 
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
)
