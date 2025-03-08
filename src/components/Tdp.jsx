import logos from '../assets/images/logo.png';
import { Link } from "react-router-dom";

const Tdp = () => {
	return (
		<div className="w-full mx-auto px-6 py-10 md:mt-10">
			<h1 className="text-center text-blue-950 text-4xl font-extrabold">Top Brands</h1>
			<div className="grid grid-cols-1 sm:grid-cols-1 gap-5 mt-5">
				<div className="mx-auto">
					<div className=" w-full sm:w-1/2 mx-auto h-full flex flex-col justify-center gap-2 bg-blue-100  rounded-lg shadow-lg p-5">
						<div className="flex gap-3">
							<img src={logos} alt="Brand logo" className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg" />
							<div className="flex flex-col text-slate-900">
								<span className="font-bold text-red-700 text-4xl italic">Top Dent</span>
								<p className="line-clamp-3 text-lg">
									Established in 1998, TOPDENT has been a trusted name in the dental industry for over
									two decades. Founded by the late Mr. Manjeet Singh Sood, a pioneer in dental
									imports, we continue his legacy under the leadership of Dr. Vishal Sood.
								</p>
								<p className="line-clamp-3 text-lg">
									We specialize in high-quality dental materials, instruments, and equipment, serving
									as the sole distributors of TDI USA LED light cure & scaler units and Teeth Sets
									from Japan & Turkey. With a commitment to quality, reliability, and competitive
									pricing, we ensure the best solutions for dental professionals across India.
								</p>
							</div>
						</div>
						<Link to="/about" className=" text-center bg-red-700 font-bold text-white rounded p-2 transition">
							Know More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tdp;
