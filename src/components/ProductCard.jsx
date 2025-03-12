import { Link } from "react-router-dom";


const ProductCard = ({ id, name, brand, image, price , }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2 text-blue-950">{name}</h3>
      <p className="text-red-600">Brand: {brand}</p>
      <p className="text-gray-900 font-bold">₹{price}</p>
      
      <Link to={`/product/${id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
