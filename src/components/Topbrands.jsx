import logos from "../assets/images/logo.png";

const Topbrands = () => {
  return (
    <div>
      

	  <div className="bg-blue-200 py-4 px-6 rounded-2xl mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-10">
      {/* 20,000+ Products */}
      <div className="flex items-center gap-2 text-gray-700">
        <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1.664 1.111M21 10l-1.664 1.111M12 3v2M12 21v-2M5 15l1.664-1.111M19 15l-1.664-1.111M8 12h8m-8 0v3m8-3v3" />
        </svg>
        <span className="font-semibold">1,000+ Products</span>
      </div>

      {/* 450+ Brands */}
      <div className="flex items-center gap-2 text-gray-700">
        <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.07 6.382a1 1 0 00.95.69h6.78c.969 0 1.371 1.24.588 1.81l-5.486 3.982a1 1 0 00-.364 1.118l2.07 6.382c.3.921-.755 1.688-1.54 1.118L12 18.347l-5.487 3.982c-.784.57-1.84-.197-1.54-1.118l2.07-6.382a1 1 0 00-.364-1.118L1.194 10.81c-.784-.57-.381-1.81.588-1.81h6.78a1 1 0 00.95-.69l2.07-6.382z" />
        </svg>
        <span className="font-semibold">Best Selling Brands</span>
      </div>

      {/* 100% Original */}
      <div className="flex items-center gap-2 text-gray-700">
        <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-semibold">100% Original</span>
      </div>

      {/* Best Price */}
      <div className="flex items-center gap-2 text-gray-700">
        <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 10c4.418 0 8-3.582 8-8S16.418 2 12 2 4 5.582 4 10s3.582 8 8 8zm0 0v4m-2-4h4" />
        </svg>
        <span className="font-semibold">Best Price</span>
      </div>
    </div>
    </div>
  );
};

export default Topbrands;
