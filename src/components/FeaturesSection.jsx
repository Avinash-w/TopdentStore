const FeaturesSection = () => {
    const features = [
      {
        text: "Three-layer quality check for all products.",
        image: "./src/assets/images/Check.png", // Update with actual image path
        bgColor: "bg-rose-100",
      },
      {
        text: "Authentic products for doctors, verified by doctors.",
        image: "./src/assets/images/dr.png", // Update with actual image path
        bgColor: "bg-pink-100",
      },
      {
        text: "Latest dental products at your doorstep by the click of a button.",
        image: "./src/assets/images/Mandelevry.png", // Update with actual image path
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
  