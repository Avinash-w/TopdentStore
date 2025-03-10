import imageone from '../assets/images/topdent-banner.webp';
import imagetow from '../assets/images/teethsmil.webp';
import imageright from '../assets/images/topdentmaxbit.webp';


const Ctahome = () => {
	return (
		<div className="flex flex-wrap mt-8 md:mt-16">
			<div className="w-full hidden sm:block md:w-2/12  text-center">
				<div
					className="relative text-white py-16 px-8 text-center rounded-lg shadow-lg overflow-hidden"
					style={{
						backgroundImage: `url("${imagetow}")`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						minHeight: '300px',
						width: '100%'
					}}
				/>
			</div>

			<div className="w-full  md:w-8/12   text-center">
				<div
					className="relative text-white py-16 px-8 text-center rounded-lg shadow-lg overflow-hidden"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url("${imageone}")`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						minHeight: '300px',
						width: '100%'
					}}
				/>
			</div>

			<div className="w-full hidden sm:block md:w-2/12 bg-gray-200  text-center">
            <div
					className="relative text-white py-16 px-8 text-center rounded-lg shadow-lg overflow-hidden"
					style={{
						backgroundImage: `url("${imageright}")`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						minHeight: '300px',
						width: '100%'
					}}
				/>
            </div>
		</div>
	);
};

export default Ctahome;
