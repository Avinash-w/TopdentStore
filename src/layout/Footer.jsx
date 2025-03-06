import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">TOP DENT</h2>
          <p className="mt-2 text-gray-400">
            Your trusted partner in dental equipment and materials, serving the industry for over two decades.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">Shop</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>
{/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">Legal Disclaimer</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <p className="mt-2 text-gray-400">📍 C-125,Preet Vihar,Delhi-110092</p>
          <p className="mt-2 text-gray-400">📞 +91 9910011085 / 7217733632</p>
          

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {/* <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TOP DENT. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
