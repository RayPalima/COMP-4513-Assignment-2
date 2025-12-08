import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./Login";
import About from "../views/About";
import Login from "../views/Login";
import Popout from "./Popout";


const Header = () => {
    const { user, logout } = useAuth();
    const [showAbout, setShowAbout] = useState(false);
    const [showLogin, setShowLogin] = useState(false);


    return( 
        <nav class="flex justify-center space-x-4">
            <Link to="/" class="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">This is supposed to be a logo that goes to home</Link>
            <Link to="/" class="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Home</Link>
            <Link to="/women" class="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Women</Link>
            <Link to="/men" class="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Men</Link>
            <Link to="/browse" class="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Browse</Link>
            <button className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setShowAbout(true)}>About</button>
            <Popout open={showAbout} onClose={() => setShowAbout(false)}>
            <About />
            </Popout>
            {user ? (
            <>
              <span className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Logged In
              </span>

              {user.isAdmin && (
                <Link to="/dashboard" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Dashboard
                </Link>
              )}

              <button onClick={logout} className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => setShowLogin(true)} className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Login
            </button>
          )}
            <Popout open={showLogin} onClose={() => setShowLogin(false)}>
            <Login onClose={() => setShowLogin(false)} />
            </Popout>
            <Link to="/cart" class="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cart</Link>
        </nav>
    )
}

export default Header;