const CTA = (props) => {
    const imageUrl = props.imageUrl || "/images/slide1.jpeg";
  
    return (
      <div
        className="relative text-white py-16 px-8 text-center rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "200px",
          width: "100%",
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Discover top-quality solutions tailored for you. Take the first step toward innovation and growth.
          </p>
          <button className="bg-red-500 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default CTA;
  