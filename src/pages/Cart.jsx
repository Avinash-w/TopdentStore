import Billing from "../components/Billing";
import { useCart } from "../context/CartContext";

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
                  <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded mx-auto" />
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
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-gray-500 text-white px-4 py-2 mt-3 w-full rounded hover:bg-gray-600"
                  >
                    Remove
                  </button>
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
