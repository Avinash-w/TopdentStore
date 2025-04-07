const sidebarProduc = () => {
	return (
		<div>
			<div className="grid grid-cols-3 justify-around gap-2 mt-5 mb-5">
				<div className="bg-slate-100 p-2 rounded-lg  ">
					<div>
					<img src="/images/Delivery.png" width={"48px"}  alt="" />
					</div>
					Free <br/> Devlivery
				</div>
				<div className="bg-slate-100 p-2 rounded-lg">
        <div>
					<img src="/images/cancellations.png" width={"48px"} alt="" />
					</div>
          Hassle-Free Cancellations</div>
				<div className="bg-slate-100 p-2 rounded-lg ">
        <div>
					<img src="/images/replacement.png" width={"48px"} alt="" />
					</div>
          7-Day Replacement </div>
			</div>
		</div>
	);
};

export default sidebarProduc;
