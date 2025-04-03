

const Shopbanner = () => {
  return (
    <div
        className="relative w-full h-[300px] flex items-center justify-center text-blue-950 bg-blue-100 text-center"
        style={{
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          Our Product
        </h1>
      </div>
  )
}

export default Shopbanner
