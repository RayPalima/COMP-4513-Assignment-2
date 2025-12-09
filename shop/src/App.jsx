import { useState, useEffect, createContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

// The following are importing components.
import Header from './components/Header'
import Footer from './components/Footer'

// The following are importing pages/views.
import Home from './views/Home'
import Men from './views/Men'
import Browse from './views/Browse'
import Cart from './views/Cart'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Product from './views/SingleProduct'
import Women from './views/Women'
import About from './views/About'


const App = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  // The following utilizes immediate invocation.
    (async () => {
      try {
        const resp = await fetch('https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json');
        const data = await resp.json();
        setProducts(data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
      })();

    }, []);

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women products={products}/>} />
        <Route path="/men" element={<Men products={products}/>} />
        <Route path="/browse" element={<Browse products={products}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart products={products}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/singleproduct/:id" element={<Product products={products} />} />
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
