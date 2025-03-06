const AboutBanner = () => {
    return (
      <div
        className="relative w-full h-[300px] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://source.unsplash.com/1600x900/?team,office")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          About Us
        </h1>
      </div>
    );
  };
  
  export default AboutBanner;
  