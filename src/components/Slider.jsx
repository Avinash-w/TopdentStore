import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Correctly resolve image paths in Vite

const slides = [
  { id: 1, img: "/images/BANNER1.jpg" },
  { id: 2, img: "/images/BANNER2.jpg" },
];
export default function App() {
  return (
    <div className="w-full  flex justify-center items-center  bg-gray-100">
      <div className="w-full ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-lg shadow-lg overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
