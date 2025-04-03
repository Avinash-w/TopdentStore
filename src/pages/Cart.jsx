import Billing from '../components/Billing';
import { useCart } from '../context/CartContext';

const Cart = () => {
	const { cart, addToCart, removeFromCart } = useCart();

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

			{cart.length === 0 ? (
				<p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
        
			) : (
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					{/* Cart Items - Takes 3 Columns on Large Screens */}
					<div className="lg:col-span-3">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
							{cart.map((item) => (
								<div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
									<img
										src={item.image}
										alt={item.name}
										className="w-40 h-40 object-cover rounded mx-auto"
									/>
									<h2 className="text-lg font-semibold mt-2 text-center">{item.name}</h2>
									<p className="text-gray-600 text-center">{item.brand}</p>
									<p className="text-blue-500 font-semibold text-center">₹{item.price}</p>

									{/* Quantity Controls */}
									<div className="flex items-center justify-center gap-2 mt-2">
										<button
											onClick={() => removeFromCart(item.id)}
											className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
										>
											-
										</button>
										<span className="text-lg font-bold">{item.quantity}</span>
										<button
											onClick={() => addToCart(item)}
											className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
										>
											+
										</button>
									</div>

									{/* Remove from Cart */}
                  <div className='flex gap-1 justify-around mt-2'> 
                    <div>
                      <button
										onClick={() => removeFromCart(item.id)}
										className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
									>
										<svg
											stroke="currentColor"
											viewBox="0 0 24 24"
											fill="none"
											className="h-5 w-5 mr-2"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												strokeWidth="2"
												strokeLinejoin="round"
												strokeLinecap="round"
											/>
										</svg>
										Delete
									</button></div>
                    <div>
                    <button
										onClick={() => console.log('Share button clicked')}
										className="inline-flex items-center px-4 py-2 bg-blue-600 transition ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
									>
										<svg
											stroke="currentColor"
											viewBox="0 0 24 24"
											fill="none"
											className="h-5 w-5 mr-2"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15 8V4m0 0h4m-4 0l5 5m-5 7v4m0 0h4m-4 0l5-5M9 16v4m0 0H5m4 0l-5-5M9 8V4m0 0H5m4 0L4 9"
												strokeWidth="2"
												strokeLinejoin="round"
												strokeLinecap="round"
											/>
										</svg>
										Share
									</button>
                    </div>
                  </div>
									
									
								</div>
							))}
						</div>
					</div>

					{/* Billing Section - Takes 1 Column on Large Screens */}
					<div className="lg:col-span-1">
						<Billing />
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
