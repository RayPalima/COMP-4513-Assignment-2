import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'

// The following are importing components
import Header from './components/Header'
import Footer from './components/Footer'

// The following are importing pages/views.
import Home from './views/Home'
import Men from './views/Men'
import Browse from './views/Browse'
import Cart from './views/Cart'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import SingleProduct from './views/SingleProduct'
import Women from './views/Women'
import About from './views/About'

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
      </Routes>

      <h1 className="text-3xl font-bold text-yellow-600 m-4">
        If this is yellow, tailwind works
      </h1>

      <Footer/>
    </>
  )
}

export default App
