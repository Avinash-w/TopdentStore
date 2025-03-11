import { useState } from "react";
import productsData from "../data/products.json"; // Import JSON file
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products] = useState(productsData); // Directly use imported data
  const [searchName, setSearchName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Show 10 products per page

  // Filter products based on name and price range
  const filteredProducts = products.filter((product) => {
    const matchesName = searchName ? product.name.toLowerCase().includes(searchName.toLowerCase()) : true;
    const matchesMinPrice = minPrice ? product.price >= parseInt(minPrice) : true;
    const matchesMaxPrice = maxPrice ? product.price <= parseInt(maxPrice) : true;
    return matchesName && matchesMinPrice && matchesMaxPrice;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Search & Filter Section */}
      <h4 className="text-2xl font-bold text-blue-700 text-center md:text-5xl shadow-lg">Our Product</h4>
      <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-6 bg-blue-50 p-2 rounded-xl">
        
        <input type="text" placeholder="Search Product" className="border  border-blue-500 p-2 rounded-md w-60"
          value={searchName} onChange={(e) => setSearchName(e.target.value)}
        />
        <input type="number" placeholder="Min Price" className="border border-blue-500 p-2 rounded-md w-32"
          value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
        />
        <input type="number" placeholder="Max Price" className="border border-blue-500 p-2 rounded-md w-32"
          value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => <ProductCard key={product.id} {...product} />)
        ) : (
          <p className="text-center col-span-3">No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
