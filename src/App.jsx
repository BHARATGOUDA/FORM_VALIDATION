import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import User_registration from './Components/User_registration';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header/>
       <ToastContainer></ToastContainer>
    <Routes>
      <Route path='/' element={<User_registration/> }/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App
