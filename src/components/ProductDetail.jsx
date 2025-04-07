import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';
import {  toast, ToastContainer } from 'react-toastify';
import ProductCard from '../components/ProductCard';
import SidebarProduc from './sidebarProduc';
import Slider from '../components/Slider'
import 'react-toastify/dist/ReactToastify.css';
import FeaturesSection from "../components/FeaturesSection";
import Productdetailbanner from "../components/Productdetailbanner"

const ProductDetail = () => {
	const { id } = useParams();
	const { addToCart } = useCart();
	const product = productsData.find((item) => item.id === parseInt(id));
	// Get 4 random recommended products (excluding the current product)
	const recommendedProducts = productsData
		.filter((item) => item.id !== parseInt(id)) // Exclude current product
		.sort(() => Math.random() - 0.5) // Shuffle array
		.slice(0, 4); // Get 4 items

	if (!product) {
		return <h2 className="text-center text-red-500">Product Not Found</h2>;
	}

	const handleAddToCart = () => {
		addToCart(product);
		toast.success('Product added to cart!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	if (!product) {
		return <h2 className="text-center text-red-500">Product Not Found</h2>;
	}

	return (
		<div>

		
		<Productdetailbanner/>
		<div className="container mx-auto p-6">
			{/* Toast Container (Must be added once in the app) */}
			<ToastContainer />
			<div className=" flex flex-wrap justify-center ">
				<div className="w-full lg:w-8/12 ">
					<div className="flex flex-col md:flex-row items-center gap-6">
						<img src={product.image} alt={product.name} className="w-96 h-96 rounded shadow-md " />
						<div>
							<h1 className="text-3xl text-blue-900 font-bold">{product.name}</h1>
							<p className="text-lg text-red-700 font-bold">Brand: {product.brand}</p>
							<p className="text-lg text-slate-900">Description: {product.decreption}</p>
							<p className="text-xl font-bold text-blue-950">₹{product.price}</p>
							<p className="text-sm text-slate-500">Exclusive of 12% GST</p>

							<button
								onClick={handleAddToCart}
								className="bg-green-500 text-white px-6 py-2 mt-4 rounded hover:bg-green-600 transition duration-300"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-4/12 mt-4 md:mt-0">
        <SidebarProduc />
        <Slider/>
      
        
        </div >
			</div>

			{/* Recommended Products Section */}
			<div className="mt-10">
				<h2 className=" text-lg text-center sm:text-5xl font-bold text-[#082a46] mb-10 ">Recommended Products</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{recommendedProducts.map((product) => <ProductCard key={product.id} {...product} />)}
				</div>
			</div>
			<FeaturesSection />
		</div>
		</div>
		 
	);
};

export default ProductDetail;
