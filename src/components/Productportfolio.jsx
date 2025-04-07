import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductPortfolio = () => {
  return (
    <div className="p-6 mt-8 md:mt-16">
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Show 1 slide on mobile
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile: Show 1 slide
          768: { slidesPerView: 2 }, // Tablets: Show 2 slides
          1024: { slidesPerView: 3 }, // Desktop: Show 3 slides
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Box 1 */}
        <SwiperSlide>
          <div
            className="h-65 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/1.jpg')" }}
          ></div>
        </SwiperSlide>

        {/* Box 2 */}
        <SwiperSlide>
          <div
            className="h-65 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/2.jpg')" }}
          ></div>
        </SwiperSlide>

        {/* Box 3 */}
        <SwiperSlide>
          <div
            className="h-65 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/3.jpg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-65 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/4.jpg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-65 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/5.jpg')" }}
          ></div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default ProductPortfolio;
