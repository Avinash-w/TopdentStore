import { useState, useEffect } from "react";

// Import images from your assets folder
import img1 from "../assets/images/home-1.webp";
import img2 from "../assets/images/home-2.webp";
import img3 from "../assets/images/home-3.webp";
import img4 from "../assets/images/home-4.webp";
import img5 from "../assets/images/home-5.webp";

const images = [img1, img2, img3, img4, img5, img1];

function ProductPortfolio() {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 3; // Number of images per row

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= images.length - itemsPerSlide ? 0 : prev + itemsPerSlide));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? images.length - itemsPerSlide : prev - itemsPerSlide));
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 mt-20 mb-20">
      <h2 className="text-4xl text-blue-950 font-extrabold mb-5">
        Free Shipping available on order of Rs.5000 and above
      </h2>
      <div className="relative w-[1200px] h-[250px] flex gap-4 overflow-hidden rounded-2xl shadow-sm">
        {images.slice(current, current + itemsPerSlide).map((img, index) => (
          <div key={index} className="relative w-1/3 h-full group">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out"
            />

            {/* Hover Overlay with 10% Opacity */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        ))}

        {/* Left Button */}
        <button
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-red-500 hover:bg-blue-500 backdrop-blur-lg text-white p-3 rounded-full transition-all"
          onClick={prevSlide}
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-red-500 hover:bg-blue-500 backdrop-blur-lg text-white p-3 rounded-full shadow-lg transition-all"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default ProductPortfolio;
