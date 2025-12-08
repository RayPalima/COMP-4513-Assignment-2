import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import SingleProduct from './views/SingleProduct'
import Women from './views/Women'
import About from './views/About'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

      fetchData();
    }, []);

  return (
    <>
      <Header/>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {data.map(item => (
        <div key={item.id} className="border p-4 rounded shadow">
          <img
            src={item.image || "https://via.placeholder.com/300x400?text=Product"}
            alt={item.title}
            className="w-full h-48 object-cover mb-2"
          />
          <h2 className="font-bold">{item.title}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>

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

      <Footer/>
    </>
  )
}

export default App
