import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Info from './Pages/Info'
import Product from './Pages/Product'
import Chapter from './Pages/Chapter'
import Service from './Pages/Service'

export default function App() {
  return (
    <>
      <Contact />
      <Navbar />
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/info' element={<Info />} />
        <Route path='/chapter' element={<Chapter />} />
        <Route path='/addProduct' element={<Product/>} />
        <Route path='/contact' element={<Service/>} />
      </Routes>
    </>
  )
}
