import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, subtotal, tax, shipping, grandTotal } = location.state || {};

  const [selectedMethod, setSelectedMethod] = useState("UPI");

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate("/order-confirmation", {
        state: {
          orderId: `ORD${Math.floor(Math.random() * 1000000)}`,
          amount: grandTotal,
        },
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">💳 Payment</h2>

        {/* Client Details */}
        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold text-gray-900">Client Details</h3>
          <p className="text-gray-700"><strong>Name:</strong> {formData?.firstName} {formData?.lastName}</p>
          <p className="text-gray-700"><strong>Email:</strong> {formData?.email}</p>
          <p className="text-gray-700"><strong>Address:</strong> {formData?.address}, {formData?.city}, {formData?.state} - {formData?.zip}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {formData?.phone}</p>
        </div>

        {/* Billing Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold text-gray-900">Billing Summary</h3>
          <p className="text-gray-700"><strong>Subtotal:</strong> ₹{subtotal?.toFixed(2)}</p>
          <p className="text-gray-700"><strong>Tax (12%):</strong> ₹{tax?.toFixed(2)}</p>
          <p className="text-gray-700"><strong>Shipping:</strong> ₹{shipping}</p>
          <p className="text-lg font-bold text-gray-900"><strong>Grand Total:</strong> ₹{grandTotal?.toFixed(2)}</p>
        </div>

        {/* Payment Methods */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">Select Payment Method</h3>
          <select 
            className="w-full p-3 border rounded-lg mt-2"
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
          >
            <option value="UPI">UPI</option>
            <option value="Card">Credit/Debit Card</option>
            <option value="COD">Cash on Delivery</option>
          </select>
        </div>

        {/* Payment Button */}
        <button 
          onClick={handlePayment}
          className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-lg transition hover:bg-green-700"
        >
          Proceed to Pay ₹{grandTotal?.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Payment;
