import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Billing from '../components/Billing';

const Checkout = () => {
	const navigate = useNavigate();
	const { cart } = useCart();

	const [ isPaymentOpen, setIsPaymentOpen ] = useState(false);
	const [ selectedPayment, setSelectedPayment ] = useState('');
	const [ formData, setFormData ] = useState({
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
		setIsPaymentOpen(true);
	};

	const generateOrderId = () => {
		const timestamp = Date.now().toString().slice(-6);
		const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
		return `ORD-${timestamp}-${randomPart}`;
	};

	const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
	const tax = subtotal * 0.12;
	const shipping = subtotal > 0 ? 150 : 0;
	const grandTotal = subtotal + tax + shipping;

	const handleConfirmOrder = () => {
		const newOrderId = generateOrderId();
		alert(`Order Placed Successfully!\nYour Order ID: ${newOrderId}`);
		setIsPaymentOpen(false);
		navigate('/thank-you', { state: { orderId: newOrderId } });
	};

	return (
		<div className="flex flex-col md:flex-row justify-center p-6 mt-4 min-h-screen">
			{/* Left Section */}
			<div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl text-red-700 text-center font-semibold mb-4">Shipping Details</h2>
				<form
					onSubmit={handleSubmit}
					className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							onChange={handleChange}
							required
							className="p-3 border rounded"
						/>
						<input
							type="text"
							name="lastName"
							placeholder="Last Name"
							onChange={handleChange}
							required
							className="p-3 border rounded"
						/>
					</div>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
						required
						className="w-full p-3 border rounded"
					/>
					<input
						type="text"
						name="company"
						placeholder="Company (Optional)"
						onChange={handleChange}
						className="w-full p-3 border rounded"
					/>
					<input
						type="text"
						name="address"
						placeholder="Address"
						onChange={handleChange}
						required
						className="w-full p-3 border rounded"
					/>
					<input
						type="text"
						name="apartment"
						placeholder="Apartment (Optional)"
						onChange={handleChange}
						className="w-full p-3 border rounded"
					/>
					<div className="grid grid-cols-3 gap-4">
						<input
							type="text"
							name="city"
							placeholder="City"
							onChange={handleChange}
							required
							className="p-3 border rounded"
						/>
						<input
							type="text"
							name="state"
							placeholder="State"
							onChange={handleChange}
							required
							className="p-3 border rounded"
						/>
						<input
							type="text"
							name="zip"
							placeholder="ZIP"
							onChange={handleChange}
							required
							className="p-3 border rounded"
						/>
					</div>
					<input
						type="text"
						name="phone"
						placeholder="Phone (Optional)"
						onChange={handleChange}
						className="w-full p-3 border rounded"
					/>

					<button type="submit" className="w-full bg-blue-600 text-white py-3 rounded">
						Continue to Payment
					</button>
				</form>
			</div>

			{/* Order Summary */}
			<div className="w-full md:w-1/3 p-6 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
				<h3 className="text-2xl text-red-700 font-bold mb-4">Your Cart</h3>
				{cart.map((item) => (
					<div key={item.id} className="flex justify-between border-b pb-2 mb-2">
						<p>
							{item.name} (x{item.quantity})
						</p>
						<p>₹{item.price * item.quantity}</p>
					</div>
				))}
				<div className="mt-4 font-semibold">
					<p>Subtotal: ₹{subtotal.toFixed(2)}</p>
					<p>Tax (12%): ₹{tax.toFixed(2)}</p>
					<p>Shipping: ₹{shipping.toFixed(2)}</p>
					<hr className="my-2" />
					<p className="text-blue-700">Total: ₹{grandTotal.toFixed(2)}</p>
				</div>
				<Billing />
			</div>

			{/* Payment Modal */}
			{isPaymentOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
						<h2 className="text-xl font-bold text-center mb-4">Select Payment Method</h2>

						{/* Form Info */}
						<p>
							<strong>Name:</strong> {formData.firstName} {formData.lastName}
						</p>
						<p>
							<strong>Email:</strong> {formData.email}
						</p>
						<p>
							<strong>Total:</strong> ₹{grandTotal.toFixed(2)}
						</p>

						<div className="mt-4">
							<label className="block font-semibold mb-2">Payment Options:</label>
							<div>
								<label className="block mb-2">
									<input
										type="radio"
										value="online"
										name="payment"
										checked={selectedPayment === 'online'}
										onChange={() => setSelectedPayment('online')}
									/>{' '}
									Online
								</label>
								<label className="block">
									<input
										type="radio"
										value="cod"
										name="payment"
										checked={selectedPayment === 'cod'}
										onChange={() => setSelectedPayment('cod')}
									/>{' '}
									Cash on Delivery
								</label>
							</div>
						</div>

						{selectedPayment === 'online' && (
							<div className="mt-4 text-center">
								<p className="text-green-700 mb-2">Scan QR to Pay</p>
								<img src="/images/qr.jpeg" alt="QR Code" className="mx-auto h-[150px] w-auto" />
							</div>
						)}

						{selectedPayment && (
							<button
								onClick={handleConfirmOrder}
								className="mt-4 bg-blue-600 text-white w-full py-2 rounded"
							>
								Confirm Order
							</button>
						)}

						<button
							onClick={() => setIsPaymentOpen(false)}
							className="mt-3 text-sm text-red-600 hover:underline w-full"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;
