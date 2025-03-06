import { useState, useEffect } from "react";

// Import images from your assets folder
import img1 from "../assets/images/homep-1.jpeg";
import img2 from "../assets/images/homep-2.jpeg";
import img3 from "../assets/images/homep-3.jpeg";
import img4 from "../assets/images/homep-4.jpeg";
import img5 from "../assets/images/homep-5.jpeg";
import img6 from "../assets/images/homep-6.jpeg";
import img7 from "../assets/images/homep-7.jpeg";
import img8 from "../assets/images/homep-8.jpeg";
import img9 from "../assets/images/homep-9.jpeg";


const images = [img1, img2, img3, img4, img5,img6, img7, img8, img9,];

function Productslider() {
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
      
      <div className="relative w-[1200px] h-[450px] flex gap-4 overflow-hidden rounded-2xl shadow-sm">
        {images.slice(current, current + itemsPerSlide).map((img, index) => (
          <div key={index} className="relative w-1/3 h-full group">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out"
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="m4.624 12.416l10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832" />
        </svg>
        </button>

        {/* Right Button */}
        <button
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-red-700 text-white p-1 sm:p-2 rounded-full"
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="M8 5.14v14l11-7z" />
        </svg>
        </button>
      </div>
    </div>
  );
}

export default  Productslider;
