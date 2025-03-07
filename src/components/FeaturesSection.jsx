const FeaturesSection = () => {
    const features = [
      {
        text: "Three-layer quality check for all products.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkW0wHUuuNWdCpon2t-yfmJSSJuIdkLBQfRQ&s", // Update with actual image path
        bgColor: "bg-rose-100",
      },
      {
        text: "Authentic products for doctors, verified by doctors.",
        image: "https://img.freepik.com/free-psd/blue-stethoscope-medical-instrument-auscultation_191095-80856.jpg?t=st=1741369342~exp=1741372942~hmac=422de0c87075df95fffafd1d5abcf20ee35840ed9c2d2691c435a415894a73d7&w=900", // Update with actual image path
        bgColor: "bg-pink-100",
      },
      {
        text: "Latest dental products at your doorstep by the click of a button.",
        image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yOV9waG90b19vZl9hX21hbl9pbl9mb29kX2RlbGl2ZXJ5X3VuaWZvcm1faG9sZF81OWE3ZDQ1Zi0xMTQ1LTQ2YzMtOWUyMi1jOTFmNTdjNTE1ZGMucG5n.png", // Update with actual image path
        bgColor: "bg-blue-100",
      },
    ];
  
    return (
      <div className="w-full mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md flex flex-col justify-between ${feature.bgColor}`}
            >
              <p className="text-2xl font-semibold text-gray-800">{feature.text}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-pink-700 transition">
                  Shop Now →
                </button>
                <img
                  src={feature.image}
                  alt="Feature"
                  className="h-32 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturesSection;
  