import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import About from "../views/About";
import Popout from "./Popout";
import { CartContext } from "../App";


const Header = (props) => {
    const { cart } = useContext(CartContext);
    const [showAbout, setShowAbout] = useState(false);


    return( 
        <nav className="flex justify-center space-x-4">
            <Link to="/" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">This is supposed to be a logo that goes to home</Link>
            <Link to="/" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Home</Link>
            <Link to="/women" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Women</Link>
            <Link to="/men" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Men</Link>
            <Link to="/browse" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Browse</Link>
            <button className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setShowAbout(true)}>About</button>
            <Popout open={showAbout} onClose={() => setShowAbout(false)}>
            <About />
            </Popout>
            <Link to="/login" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Admin Login</Link>
            <Link to="/cart" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cart</Link>
            <span className = "ml-2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-sm"> {cart.length} </span>
        </nav>
    )
}

export default Header;