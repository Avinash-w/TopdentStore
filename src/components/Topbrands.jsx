const Topbrands = () => {
	const brands = [
		{
			title: "TDI",
			description: "Building modern, scalable websites and applications.",
			image: "https://cmsimgftp.blob.core.windows.net/container1/topdentstore/TopDent.webp",
			color: "bg-white hover:bg-blue-500 hover:text-white", // Default color
		},
		{
			title: "Top Dent",
			description: "Crafting intuitive and engaging user experiences.",
			image: "https://cmsimgftp.blob.core.windows.net/container1/topdentstore/TopDent.webp",
			color: "bg-blue-500 text-white", // Center box highlighted
		},
		{
			title: "Kagayaki",
			description: "Boosting brand presence with strategic marketing.",
			image: "https://cmsimgftp.blob.core.windows.net/container1/topdentstore/TopDent.webp",
			color: "bg-white hover:bg-blue-500 hover:text-white", // Default color
		},
	];

	return (
		<div className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center mt-20 mb-20">
			{brands.map((brand, index) => (
				<div
					key={index}
					className={`shadow-lg rounded-2xl p-6 space-y-4 relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${brand.color}`}
				>
					{/* Badge */}
					<div className="w-22 h-20 bg-green-400 rounded-full absolute -right-5 -top-5 flex items-center justify-center shadow-md">
						<p className="text-white text-xs font-semibold">Best Seller</p>
					</div>

					{/* Brand Icon */}
					<div className="rounded-full w-16 h-16 overflow-hidden border-2 border-violet-500 mx-auto">
						<img
							src={brand.image}
							alt={brand.title}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Title */}
					<h1 className="text-center text-xl font-semibold">
						{brand.title}
					</h1>

					{/* Description */}
					<p className="text-center text-sm">
						{brand.description}
					</p>

					{/* CTA Button */}
					<div className="flex justify-center">
						<button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition">
							Learn More
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Topbrands;
