

const Productdetailbanner = () => {
  return (
    <div
    className="relative w-full h-[300px] flex items-center justify-center text-blue-950 bg-blue-100 text-center"
    style={{
      backgroundImage: 'url("/images/slide1.jpeg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
    Product Description
    </h1>
  </div>
  )
}

export default Productdetailbanner
