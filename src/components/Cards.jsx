const Cards = () => {
    const cardData = [
      { 
        title: "ABOUT THE FREE POSTAGE", 
        description: "If the order value is more than Rs.5000 /- then the postage will be free anywhere in india." 
      },
      { 
        title: "ABOUT SERVICES", 
        description: "We at top dent belive in quality, reliability ,ease of business and competitive price marks. We endeavour on mantaining customer confidence in our services" 
      },
      { 
        title: "BEST DEALS", 
        description: "Deals with all kind of brand starting from small to big with best prices." 
      }
    ];
  
    return (
      <div className="flex flex-col justify-center items-center py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#082a46] font-poppins text-center">
          Why TopDents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-md w-full h-auto duration-500 group overflow-hidden relative rounded bg-blue-100 text-neutral-800 p-10 flex flex-col justify-evenly shadow-lg"
            >
              
              <div className="z-10 flex flex-col justify-evenly w-full h-full">
                <span className="text-xl md:text-2xl font-bold font-poppins mb-4 text-red-500">{card.title}</span>
                <p className="font-roboto text-sm text-slate-900 md:text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cards;
  