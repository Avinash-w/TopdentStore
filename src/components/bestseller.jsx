import { useEffect, useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "./ProductCard";

const Bestseller = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState([]);

  useEffect(() => {
    // Shuffle products and pick 4 random ones
    const shuffledProducts = [...productsData].sort(() => Math.random() - 0.5);
    setBestsellerProducts(shuffledProducts.slice(0, 4));
  }, []);

  return (
    <div className="container mx-auto py-10 mt-8 md:mt-16">
      <h3 className="text-sm sm:text-lg text-center text-red-600 font-bold">
        Best Seller Products
      </h3>
      <h2 className="text-lg text-center sm:text-5xl font-bold text-[#0077B6] mb-10">
        Top Seller Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestsellerProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
