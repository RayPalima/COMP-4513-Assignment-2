import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./Login";
import { useCart } from "./ContextCart";
import About from "../views/About";
import Login from "../views/Login";
import Popout from "./Popout";

const Header = () => {
  const { items } = useCart();
  const { user, logout } = useAuth();
  const [showAbout, setShowAbout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b bg-white shadow-md">
      {/* Logo - Left */}
      <Link to="/" className="flex-shrink-0">
        <img
          src="https://placehold.co/120x40/png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </Link>

      {/* Center Navigation */}
      <div className="flex space-x-6 justify-center flex-1">
        <Link
          to="/"
          className="font-semibold text-gray-700 hover:text-gray-900"
        >
          Home
        </Link>
        <Link
          to="/women"
          className="font-semibold text-gray-700 hover:text-gray-900"
        >
          Women
        </Link>
        <Link
          to="/men"
          className="font-semibold text-gray-700 hover:text-gray-900"
        >
          Men
        </Link>
        <Link
          to="/browse"
          className="font-semibold text-gray-700 hover:text-gray-900"
        >
          Browse
        </Link>
        <button
          onClick={() => setShowAbout(true)}
          className="font-semibold text-gray-700 hover:text-gray-900"
        >
          About
        </button>
        <Popout open={showAbout} onClose={() => setShowAbout(false)}>
          <About />
        </Popout>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            {user.isAdmin && (
              <Link
                to="/dashboard"
                className="font-semibold text-gray-700 hover:text-gray-900"
              >
                Dashboard
              </Link>
            )}
            <button
              onClick={logout}
              className="font-semibold text-gray-700 hover:text-gray-900"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="font-semibold text-gray-700 hover:text-gray-900"
          >
            Login
          </button>
        )}
        <Popout open={showLogin} onClose={() => setShowLogin(false)}>
          <Login onClose={() => setShowLogin(false)} />
        </Popout>

        <Link
          to="/cart"
          className="font-semibold text-gray-700 hover:text-gray-900 relative"
        >
          Cart
          <span className="absolute -top-2 -right-3 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs">
            {items.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
