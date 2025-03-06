import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart
import logos from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); // Get cart data from context

  const navLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Shop", path: "/shop" },
    { id: 3, title: "About", path: "/about" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logos} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-48"
              />
            </div>

            {/* Cart Link */}
            <Link to="/cart" className="relative p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="#c20c0c"
                  d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* User Account Link */}
            <Link to="/account" className="p-2">Account</Link>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
            <div className="px-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
