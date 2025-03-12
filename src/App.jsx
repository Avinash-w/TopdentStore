import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
    <Router> 
      <Navbar />
      <div className="pt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer /> {/* Use Footer component */}
    </Router>
    </CartProvider>
  );
}

export default App;
