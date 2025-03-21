import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Billing = () => {
  const { cart } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Tax Calculation (12%)
  const tax = subtotal * 0.12;

  // Shipping Charges (Fixed)
  const shipping = subtotal > 0 ? 150 : 0;

  // Grand Total
  const grandTotal = subtotal + tax + shipping;
  // Handle Checkout Button Click
  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout page
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 w-full">
      <h3 className="text-2xl font-bold mb-4 text-red-700">Order Summary</h3>
      
      <div className="space-y-3">
        <p className="text-lg flex justify-between">
          <span>Subtotal:</span> <span className="font-semibold text-blue-800">₹{subtotal.toFixed(2)}</span>
        </p>
        <p className="text-lg flex justify-between">
          <span>Tax (12%):</span> <span className="font-semibold text-blue-800">₹{tax.toFixed(2)}</span>
        </p>
        <p className="text-lg flex justify-between">
          <span>Shipping:</span> <span className="font-semibold text-blue-800">₹{shipping}</span>
        </p>
        <p className="text-xl font-bold flex justify-between border-t pt-3">
          <span>Grand Total:</span> <span>₹{grandTotal.toFixed(2)}</span>
        </p>
      </div>

      {/* Checkout Button */}
      <button 
        className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition hover:bg-blue-700"
        onClick={handleCheckout}
        aria-label="Proceed to Checkout"
      >
        Proceed to Checkout
      </button>
      <p className="text-sm text-slate-500 mt-1">Safe and Secure Payments.</p>
    </div>
  );
};

export default Billing;