import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import logos from '../assets/images/logo.png';

const Navbar = () => {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	const { cart } = useCart(); // Get cart data from context

	const navLinks = [
		{ id: 1, title: 'Home', path: '/' },
		{ id: 2, title: 'Shop', path: '/shop' },
		{ id: 3, title: 'About', path: '/about' },
		{ id: 4, title: 'Contact', path: '/contact' }
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-white shadow-lg fixed w-full z-50 md:py-5 ">
			<div className="max-w-7xl mx-auto px-2">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link to="/" className="flex-shrink-0">
						<img src={logos} alt="Logo" className="h-16 w-auto" />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-15">
						{navLinks.map((link) => (
							<Link
								key={link.id}
								to={link.path}
								className="text-blue-900 hover:text-red-600 transition-colors text-xl font-bold "
							>
								{link.title}
							</Link>
						))}
					</div>

					{/* Right Section */}
					<div className="flex  items-center space-x-4">
						{/* Search Bar */}
            <div className='hidden lg:flex gap-2 p-3'>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 640 512"><path fill="#a00909" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"/></svg></div>
              <div className=''>
                <p className='text-blue-900 hover:text-red-600 transition-colors text-xl font-bold'>Free Shipping</p>
                <p className='text-lg'>on all orders over ₹5000</p>
              </div>
            </div>
						<div className=" hidden md:flex    px-3 py-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 14 14">
								<path
									fill="none"
									stroke="#a00909"
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 7V4.37A3.93 3.93 0 0 1 7 .5a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 12.25a2 2 0 0 0 2-2V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25"
									stroke-width="1"
								/>
							</svg>
							<p className="ml-1 text-blue-900 hover:text-red-600 transition-colors text-xl font-bold">
								Help
							</p>
						</div>

						{/* Cart Link */}
						<Link to="/cart" className="relative ">
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
						<Link
							to="/cart"
							className="text-blue-900 hover:text-red-600 transition-colors text-xl font-bold"
						>
							Cart
						</Link>

						<Link
              to="/contact"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 hidden md:block"
            >
              Contact Us
            </Link>


						{/* Mobile Menu Button */}
						<button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            >
              {isMenuOpen ? "✖" : "☰"}
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
								className="block px-4 py-2 text-blue-900 hover:text-red-600 transition-colors text-xl font-bold"
								onClick={toggleMenu}
							>
								{link.title}
							</Link>
						))}
						<div className="px-4">
							<div className=' lg:flex gap-2 p-3'>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 640 512"><path fill="#a00909" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"/></svg></div>
              <div className=''>
                <p className='text-blue-900 hover:text-red-600 transition-colors text-xl font-bold'>Free Shipping</p>
                <p className='text-lg'>on all orders over ₹5000</p>
              </div>
            </div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
