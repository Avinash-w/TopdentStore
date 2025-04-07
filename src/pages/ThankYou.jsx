import { useLocation } from 'react-router-dom';

const ThankYou = () => {
	const location = useLocation();
	const orderId = location.state?.orderId || "N/A";

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-6 bg-green-50">
			<h1 className="text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
			<p className="text-xl mb-2">🎉 Your order has been placed.</p>
			<p className="text-lg">Your Order ID: <span className="bg-white border px-3 py-1 rounded text-blue-600">{orderId}</span></p>
		</div>
	);
};

export default ThankYou;
