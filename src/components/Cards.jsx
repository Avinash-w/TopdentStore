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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 font-poppins text-center">
          Why TopDents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-md w-full h-auto duration-500 group overflow-hidden relative rounded bg-neutral-50 text-neutral-800 p-10 flex flex-col justify-evenly shadow-lg"
            >
              <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-yellow-200 right-1 -bottom-24"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-red-600 right-1 -top-12"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
              <div className="z-10 flex flex-col justify-evenly w-full h-full">
                <span className="text-xl md:text-2xl font-bold font-poppins mb-4 text-zinc-800">{card.title}</span>
                <p className="font-roboto text-sm md:text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cards;
  