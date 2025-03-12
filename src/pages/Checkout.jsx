import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Billing from '../components/Billing';

const Checkout = () => {
	const navigate = useNavigate();
	const { cart } = useCart();
	const [isPaymentOpen, setIsPaymentOpen] = useState(false); // State for Payment Modal

	// Form Data
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		company: '',
		address: '',
		apartment: '',
		city: '',
		state: '',
		zip: '',
		phone: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Order Details:', formData);
		

		// Open Payment Modal instead of navigating
		setIsPaymentOpen(true);
	};

	// Calculate subtotal
	const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
	const tax = subtotal * 0.12;
	const shipping = subtotal > 0 ? 150 : 0;
	const grandTotal = subtotal + tax + shipping;

	return (
		<div className="flex flex-col md:flex-row justify-center p-6 mt-4 min-h-screen">
			{/* Left Section - Checkout Form */}
			<div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl text-red-700 text-center font-semibold mb-4">Shipping Details</h2>

				<form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
						<input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
					</div>
					<div>
						<label className="block text-gray-700 font-medium">Email Address</label>
						<input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
					</div>
					<input type="text" name="company" placeholder="Company (Optional)" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
					<input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
					<input type="text" name="apartment" placeholder="Apartment, suite, etc. (Optional)" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
					<div className="grid grid-cols-3 gap-4">
						<input type="text" name="city" placeholder="City" onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
						<input type="text" name="state" placeholder="State" onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
						<input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
					</div>
					<input type="text" name="phone" placeholder="Phone (Optional)" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />

					<button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg transition hover:bg-blue-800">
						Continue to Payment
					</button>
				</form>
			</div>

			{/* Right Section - Order Summary */}
			<div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6">
				<div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 w-full mb-5">
					<h3 className="text-2xl text-red-700 font-bold mb-4">Product in Cart</h3>
					<div className="space-y-4">
						{cart.map((item) => (
							<div key={item.id} className="flex justify-between border-b pb-2">
								<div>
									<p className="font-medium">{item.name}</p>
									<p className="text-sm text-red-500">Qty: {item.quantity}</p>
                                    
								</div>
                                
								<p className="font-semibold text-blue-800">
									₹{(item.price * item.quantity).toFixed(2)}
								</p>
                            
							</div>
                            
						))}
					</div>
                    <div>
                    <p className="text-center text-blue-900 mt-4">
							Total Payable Amount: <strong>₹{grandTotal.toFixed(2)}</strong>
						</p>
                       
                    </div>
				</div>
				<div>
					<Billing />
				</div>
			</div>

			{/* Payment Popup Modal */}
			{isPaymentOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-96">
						<h2 className="text-2xl font-semibold text-center mb-4">Payment</h2>
						<p className="text-center mb-4">
							Total Payable Amount: <strong>₹{grandTotal.toFixed(2)}</strong>
						</p>

						{/* Payment Methods */}
						<div className="space-y-3">
							<button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
								Pay with UPI
							</button>
							<button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
								Pay with Credit/Debit Card
							</button>
							<button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600">
								Cash on Delivery
							</button>
						</div>

						{/* Close Button */}
						<button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" onClick={() => setIsPaymentOpen(false)}>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;
