const Topbrands = () => {
	return (
		<div>
			<div className="bg-blue-100 py-6 px-6 rounded-2xl mx-auto  w-full shadow-lg  sm:grid sm:grid-cols-2 md:grid-cols-4 items-center justify-between gap-10">
				{/* 20,000+ Products */}
				<div className="flex items-center gap-2 text-gray-700">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<g
							fill="none"
							stroke="#46899c"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							color="#46899c"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-1-7s-1 1-1 2c.75-1 2.25-1 3 0M9 8s1 1 1 2c-.75-1-2.25-1-3 0" />
						</g>
					</svg>
					<span className="font-semibold text-xl   sm:text-lg md:text-2xl">100% Customer Satisfaction</span>
				</div>

				{/* 450+ Brands */}
				<div className="flex items-center gap-2 text-gray-700">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
						<path
							fill="#46899c"
							d="M0 6v2h19v15h-6.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3H4v-5H2v7h3.156c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3H32v-8.156l-.063-.157l-2-6L29.72 10H21V6zm1 4v2h9v-2zm20 2h7.281L30 17.125V23h-1.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3H21zM2 14v2h6v-2zm7 8c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"
						/>
					</svg>
					<span className="font-semibold text-xl   sm:text-lg md:text-2xl   ">
						Free Shipping on order of 5000
					</span>
				</div>

				{/* 100% Original */}
				<div className="flex items-center gap-2 text-gray-700">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
						<g fill="#46899c">
							<path d="M8.069 0c.262 0 .52.017.76.057a4 4 0 0 1 .697.154q.34.102.674.263c.217.103.44.229.663.366c.377.24.748.434 1.126.589a7.5 7.5 0 0 0 2.331.525q.607.045 1.257.046v4q0 1.139-.291 2.166a9 9 0 0 1-.789 1.943a10.3 10.3 0 0 1-1.188 1.725a15 15 0 0 1-1.492 1.532a18 18 0 0 1-1.703 1.325q-.892.62-1.794 1.143l-.24.143l-.24-.143a27 27 0 0 1-1.806-1.143a16 16 0 0 1-1.703-1.325a15 15 0 0 1-1.491-1.532a11 11 0 0 1-1.194-1.725a9.8 9.8 0 0 1-.789-1.943A8 8 0 0 1 .571 6V2q.65-.001 1.258-.046a8 8 0 0 0 1.188-.171c.383-.086.766-.2 1.143-.354A6.6 6.6 0 0 0 5.28.846C5.72.56 6.166.349 6.606.21A4.8 4.8 0 0 1 8.069 0m6.502 2.983a9.6 9.6 0 0 1-2.234-.377a8 8 0 0 1-2.046-.943A4.3 4.3 0 0 0 9.23 1.16A3.9 3.9 0 0 0 8.074.994a4 4 0 0 0-1.165.166a4 4 0 0 0-1.058.503A8 8 0 0 1 3.8 2.61q-1.063.309-2.229.378v3.017q0 .993.258 1.908a8.6 8.6 0 0 0 .72 1.743a9.6 9.6 0 0 0 1.08 1.572c.417.491.862.948 1.342 1.382q.72.651 1.509 1.206q.797.556 1.594 1.017a22 22 0 0 0 1.589-1.017a15 15 0 0 0 1.514-1.206c.48-.434.926-.891 1.343-1.382a9.6 9.6 0 0 0 1.08-1.572a8.3 8.3 0 0 0 .709-1.743a6.8 6.8 0 0 0 .262-1.908z" />
							<path
								fill-rule="evenodd"
								d="m11.797 4.709l-.44-.378l-.406.035l-4.36 5.148l-1.485-2.12l-.4-.068l-.463.331l-.069.4l1.909 2.726l.217.12l.457.028l.234-.102l4.835-5.715z"
								clip-rule="evenodd"
							/>
						</g>
					</svg>
					<span className="font-semibold text-xl   sm:text-lg md:text-2xl">100% Original</span>
				</div>

				{/* Best Price */}
				<div className="flex items-center gap-2 text-gray-700">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path
							fill="#46899c"
							d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
						/>
						<path
							fill="#46899c"
							d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3 3 0 0 0 5.33 12h13.34a3 3 0 0 0 1.83 1.83v4.34A3 3 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"
						/>
					</svg>
					<span className="font-semibold text-xl   sm:text-lg md:text-2xl">Affordable price</span>
				</div>
			</div>
		</div>
	);
};

export default Topbrands;
